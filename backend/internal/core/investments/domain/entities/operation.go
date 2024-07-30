package entities

import (
	valueobject "assets-manager/backend/internal/core/investments/domain/value-object"
	"errors"
	"time"

	"github.com/google/uuid"
)

type Operation struct {
	id            uuid.UUID
	quantity      float64
	unitValue     float64
	operationType valueobject.OperationType
	date          time.Time
}

func NewOperation(props CreateOperationProps) (*Operation, error) {
	operationType, err := valueobject.NewOperationType(props.Type)

	if err != nil {
		return nil, err
	}

	operation := &Operation{
		id:            uuid.New(),
		quantity:      props.Quantity,
		unitValue:     props.UnitValue,
		operationType: *operationType,
		date:          props.Date,
	}

	err = validate(operation)

	if err != nil {
		return nil, err
	}

	return operation, nil
}

func validate(o *Operation) error {
	if o.unitValue < 0 {
		return errors.New("Valor não pode ser negativo")
	}

	if o.quantity < 0 {
		return errors.New("Quantidade não pode ser negativa")
	}

	return nil
}

type CreateOperationProps struct {
	Type      string
	UnitValue float64
	Quantity  float64
	Date      time.Time
}
