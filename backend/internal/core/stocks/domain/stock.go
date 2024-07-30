package domain

import (
	valueobject "assets-manager/backend/internal/core/stocks/value-object"

	"github.com/google/uuid"
)

type Stock struct {
	id         uuid.UUID
	code       string
	total      valueobject.Money
	quantity   float64
	operations []Operation
}

func NewStock(props CreateStockProps) (*Stock, error) {
	total, err := valueobject.NewMoney(0, valueobject.CURRENCY_BRL)

	if err != nil {
		return nil, err
	}

	return &Stock{
		id:         uuid.New(),
		total:      *total,
		code:       props.Code,
		quantity:   0,
		operations: make([]Operation, 0),
	}, nil
}

func (s *Stock) AddOperation(props CreateOperationProps) error {
	operation, err := NewOperation(CreateOperationProps{
		Type:         props.Type,
		UnitValue:    props.UnitValue,
		CurrencyType: props.CurrencyType,
		Quantity:     props.Quantity,
		Date:         props.Date,
	})

	if err != nil {
		return err
	}

	var total *valueobject.Money

	if operation.operationType.IsEqualTo(valueobject.OPERATION_BUY) {
		s.quantity += operation.quantity
		total, err = valueobject.NewMoney(
			s.total.GetValue()+(operation.unitValue.GetValue()*operation.quantity),
			operation.unitValue.GetCurrency(),
		)
	}

	if operation.operationType.IsEqualTo(valueobject.OPERATION_SELL) {
		s.quantity -= operation.quantity
		total, err = valueobject.NewMoney(
			s.total.GetValue()-(operation.unitValue.GetValue()*operation.quantity),
			operation.unitValue.GetCurrency(),
		)
	}

	if err != nil {
		return err
	}

	s.total = *total
	s.operations = append(s.operations, *operation)

	return nil
}

func (s *Stock) GetId() uuid.UUID {
	return s.id
}

func (s *Stock) GetCode() string {
	return s.code
}

func (s *Stock) GetTotal() valueobject.Money {
	return s.total
}

func (s *Stock) GetQuantity() float64 {
	return s.quantity
}

func (s *Stock) GetOperations() []Operation {
	return s.operations
}

type CreateStockProps struct {
	Code string
}
