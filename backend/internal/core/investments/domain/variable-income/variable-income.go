package variableincome

import (
	"assets-manager/backend/internal/core/investments/domain"
	op "assets-manager/backend/internal/core/investments/domain/operation"

	"github.com/google/uuid"
)

type VariableIncome struct {
	id                  uuid.UUID
	code                string
	negotiationCurrency *domain.Currency
	totalValueBought    *domain.Money
	totalQuantity       float64
	operations          []op.Operation
}

func NewVariableIncome(props CreateVariableIncomeProps) (*VariableIncome, error) {
	negotiationCurrency, _ := domain.NewCurrency(props.NegotiationCurrency)
	totalValueBought, err := domain.NewMoney(0, props.NegotiationCurrency)

	if err != nil {
		return nil, err
	}

	return &VariableIncome{
		id:                  uuid.New(),
		negotiationCurrency: negotiationCurrency,
		totalValueBought:    totalValueBought,
		code:                props.Code,
		totalQuantity:       0,
		operations:          make([]op.Operation, 0),
	}, nil
}

func (s *VariableIncome) AddOperation(props op.CreateOperationProps) error {
	operation, err := op.NewOperation(op.CreateOperationProps{
		Type:      props.Type,
		UnitValue: props.UnitValue,
		Quantity:  props.Quantity,
		Date:      props.Date,
	})

	if err != nil {
		return err
	}

	var totalValueBought *domain.Money

	if operation.GetOperationType().IsEqualTo(op.OPERATION_BUY) {
		s.totalQuantity += operation.GetQuantity()
		totalValueBought, err = domain.NewMoney(
			s.totalValueBought.GetValue()+(operation.GetUnitValue()*operation.GetQuantity()),
			s.negotiationCurrency.GetValue(),
		)
	}

	if operation.GetOperationType().IsEqualTo(op.OPERATION_SELL) {
		s.totalQuantity -= operation.GetQuantity()
		totalValueBought, err = domain.NewMoney(
			s.totalValueBought.GetValue()-(operation.GetUnitValue()*operation.GetQuantity()),
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

func (s *VariableIncome) GetNegotiationCurrency() domain.Currency {
	return *s.negotiationCurrency
}

func (s *VariableIncome) GetTotalValueBought() domain.Money {
	return *s.totalValueBought
}

func (s *VariableIncome) GetTotalQuantity() float64 {
	return s.totalQuantity
}

func (s *VariableIncome) GetOperations() []op.Operation {
	return s.operations
}

type CreateVariableIncomeProps struct {
	Code                string
	NegotiationCurrency string
}
