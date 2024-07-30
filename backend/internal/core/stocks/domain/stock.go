package domain

import (
	valueobject "assets-manager/backend/internal/core/stocks/value-object"

	"github.com/google/uuid"
)

type Stock struct {
	id                  uuid.UUID
	code                string
	negotiationCurrency valueobject.Currency
	totalValueBought    valueobject.Money
	totalQuantity       float64
	operations          []Operation
}

func NewStock(props CreateStockProps) (*Stock, error) {
	negotiationCurrency, _ := valueobject.NewCurrency(props.NegotiationCurrency)
	totalValueBought, err := valueobject.NewMoney(0, props.NegotiationCurrency)

	if err != nil {
		return nil, err
	}

	return &Stock{
		id:                  uuid.New(),
		negotiationCurrency: *negotiationCurrency,
		totalValueBought:    *totalValueBought,
		code:                props.Code,
		totalQuantity:       0,
		operations:          make([]Operation, 0),
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
		s.totalQuantity += operation.quantity
		total, err = valueobject.NewMoney(
			s.totalValueBought.GetValue()+(operation.unitValue.GetValue()*operation.quantity),
			operation.unitValue.GetCurrency(),
		)
	}

	if operation.operationType.IsEqualTo(valueobject.OPERATION_SELL) {
		s.totalQuantity -= operation.quantity
		total, err = valueobject.NewMoney(
			s.totalValueBought.GetValue()-(operation.unitValue.GetValue()*operation.quantity),
			operation.unitValue.GetCurrency(),
		)
	}

	if err != nil {
		return err
	}

	s.totalValueBought = *total
	s.operations = append(s.operations, *operation)

	return nil
}

func (s *Stock) GetId() uuid.UUID {
	return s.id
}

func (s *Stock) GetCode() string {
	return s.code
}

func (s *Stock) GetNegotiationCurrency() valueobject.Currency {
	return s.negotiationCurrency
}

func (s *Stock) GetTotalValueBought() valueobject.Money {
	return s.totalValueBought
}

func (s *Stock) GetTotalQuantity() float64 {
	return s.totalQuantity
}

func (s *Stock) GetOperations() []Operation {
	return s.operations
}

type CreateStockProps struct {
	Code                string
	NegotiationCurrency string
}
