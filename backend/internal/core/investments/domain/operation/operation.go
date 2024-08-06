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
	operationType OperationType
	date          time.Time
}

func NewOperation(props CreateOperationProps) (*Operation, *domain.ValidationErrorsCollection) {
	operationType, err := NewOperationType(props.Type)
	errors := domain.NewValidationErrorsCollection()

	if err != nil {
		errors.Add("operation", err)
	}

	operation := &Operation{
		id:            uuid.New(),
		quantity:      props.Quantity,
		unitValue:     props.UnitValue,
		operationType: *operationType,
		date:          props.Date,
	}

	validationErrors := validate(operation)

	if validationErrors.HasErrors() {
		errors.Merge(validationErrors)
	}

	if errors.HasErrors() {
		return nil, errors
	}

	return operation, errors
}

func validate(o *Operation) *domain.ValidationErrorsCollection {
	validator := NewValidator()
	if validator.IsValid(o) {
		return validator.errors
	}
	return nil
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
	return &o.operationType
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
