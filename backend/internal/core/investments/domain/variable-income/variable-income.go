package variableincome

import (
	"assets-manager/backend/internal/core/investments/domain"
	op "assets-manager/backend/internal/core/investments/domain/operation"
	shared "assets-manager/backend/internal/core/shared/domain"

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

func NewVariableIncome(props CreateVariableIncomeProps) (*VariableIncome, *shared.ValidationErrorsCollection) {
	negotiationCurrency, _ := domain.NewCurrency(props.NegotiationCurrency)
	totalValueBought, errorMoney := domain.NewMoney(0, props.NegotiationCurrency)

	variableIncome := &VariableIncome{
		id:                  uuid.New(),
		negotiationCurrency: negotiationCurrency,
		totalValueBought:    totalValueBought,
		code:                props.Code,
		totalQuantity:       0,
		operations:          make([]op.Operation, 0),
	}
	errors := validate(variableIncome)

	if errorMoney != nil {
		errors.Add("negotiationCurrency", errorMoney)
	}

	if errors.HasErrors() {
		return nil, errors
	}

	return variableIncome, errors
}

func (s *VariableIncome) AddOperation(props op.CreateOperationProps) *shared.ValidationErrorsCollection {
	operation, errors := op.NewOperation(op.CreateOperationProps{
		Type:      props.Type,
		UnitValue: props.UnitValue,
		Quantity:  props.Quantity,
		Date:      props.Date,
	})

	if errors.HasErrors() {
		return errors
	}

	var totalValueBought *domain.Money
	var err error

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
		errors.Add("general", err)
		return errors
	}

	s.totalValueBought = totalValueBought
	s.operations = append(s.operations, *operation)

	return errors
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

func validate(v *VariableIncome) *shared.ValidationErrorsCollection {
	return NewValidator().Validate(v)
}

type CreateVariableIncomeProps struct {
	Code                string
	NegotiationCurrency string
}
