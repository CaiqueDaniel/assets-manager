package operation

import (
	"assets-manager/backend/internal/core/shared/domain"
	"time"

	"github.com/google/uuid"
)

type Operation struct {
	id            uuid.UUID
	quantity      float64
	unitValue     float64
	operationType *OperationType
	date          time.Time
}

func NewOperation(props CreateOperationProps) (*Operation, *domain.ValidationErrorsCollection) {
	operationType, operationError := NewOperationType(props.Type)

	operation := &Operation{
		id:            uuid.New(),
		quantity:      props.Quantity,
		unitValue:     props.UnitValue,
		operationType: operationType,
		date:          props.Date,
	}

	errors := validate(operation)

	if operationError != nil {
		errors.Add("operation", operationError)
	}

	if errors.HasErrors() {
		return nil, errors
	}

	return operation, errors
}

func validate(o *Operation) *domain.ValidationErrorsCollection {
	return NewValidator().Validate(o)
}

func (o *Operation) GetId() uuid.UUID {
	return o.id
}

func (o *Operation) GetQuantity() float64 {
	return o.quantity
}

func (o *Operation) GetUnitValue() float64 {
	return o.unitValue
}

func (o *Operation) GetOperationType() *OperationType {
	return o.operationType
}

func (o *Operation) GetDate() time.Time {
	return o.date
}

type CreateOperationProps struct {
	Type      string
	UnitValue float64
	Quantity  float64
	Date      time.Time
}
