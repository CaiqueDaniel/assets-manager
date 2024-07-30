package entities

import (
	valueobject "assets-manager/backend/internal/core/investments/value-object"

	"github.com/google/uuid"
)

type VariableIncome struct {
	id                  uuid.UUID
	code                string
	negotiationCurrency *valueobject.Currency
	totalValueBought    *valueobject.Money
	totalQuantity       float64
	operations          []Operation
}

func NewVariableIncome(props CreateStockProps) (*VariableIncome, error) {
	negotiationCurrency, _ := valueobject.NewCurrency(props.NegotiationCurrency)
	totalValueBought, err := valueobject.NewMoney(0, props.NegotiationCurrency)

	if err != nil {
		return nil, err
	}

	return &VariableIncome{
		id:                  uuid.New(),
		negotiationCurrency: negotiationCurrency,
		totalValueBought:    totalValueBought,
		code:                props.Code,
		totalQuantity:       0,
		operations:          make([]Operation, 0),
	}, nil
}

func (s *VariableIncome) AddOperation(props CreateOperationProps) error {
	operation, err := NewOperation(CreateOperationProps{
		Type:      props.Type,
		UnitValue: props.UnitValue,
		Quantity:  props.Quantity,
		Date:      props.Date,
	})

	if err != nil {
		return err
	}

	var totalValueBought *valueobject.Money

	if operation.operationType.IsEqualTo(valueobject.OPERATION_BUY) {
		s.totalQuantity += operation.quantity
		totalValueBought, err = valueobject.NewMoney(
			s.totalValueBought.GetValue()+(operation.unitValue*operation.quantity),
			s.negotiationCurrency.GetValue(),
		)
	}

	if operation.operationType.IsEqualTo(valueobject.OPERATION_SELL) {
		s.totalQuantity -= operation.quantity
		totalValueBought, err = valueobject.NewMoney(
			s.totalValueBought.GetValue()-(operation.unitValue*operation.quantity),
			s.negotiationCurrency.GetValue(),
		)
	}

	if err != nil {
		return err
	}

	s.totalValueBought = totalValueBought
	s.operations = append(s.operations, *operation)

	return nil
}

func (s *VariableIncome) GetId() uuid.UUID {
	return s.id
}

func (s *VariableIncome) GetCode() string {
	return s.code
}

func (s *VariableIncome) GetNegotiationCurrency() valueobject.Currency {
	return *s.negotiationCurrency
}

func (s *VariableIncome) GetTotalValueBought() valueobject.Money {
	return *s.totalValueBought
}

func (s *VariableIncome) GetTotalQuantity() float64 {
	return s.totalQuantity
}

func (s *VariableIncome) GetOperations() []Operation {
	return s.operations
}

type CreateStockProps struct {
	Code                string
	NegotiationCurrency string
}
