package domain

import (
	valueobject "assets-manager/backend/internal/core/stocks/value-object"
	"errors"
	"time"

	"github.com/google/uuid"
)

type Operation struct {
	id            uuid.UUID
	quantity      float64
	operationType valueobject.OperationType
	unitValue     valueobject.Money
	date          time.Time
}

func NewOperation(props CreateOperationProps) (*Operation, error) {
	operationType, err := valueobject.NewOperationType(props.Type)

	if err != nil {
		return nil, err
	}

	unitValue, err := valueobject.NewMoney(props.UnitValue, props.CurrencyType)

	if err != nil {
		return nil, err
	}

	operation := &Operation{
		id:            uuid.New(),
		quantity:      props.Quantity,
		operationType: *operationType,
		unitValue:     *unitValue,
		date:          props.Date,
	}

	err = validate(operation)

	if err != nil {
		return nil, err
	}

	return operation, nil
}

func validate(o *Operation) error {
	if o.unitValue.GetValue() < 0 {
		return errors.New("Valor não pode ser negativo")
	}

	if o.quantity < 0 {
		return errors.New("Quantidade não pode ser negativa")
	}

	return nil
}

type CreateOperationProps struct {
	Type         string
	UnitValue    float64
	CurrencyType string
	Quantity     float64
	Date         time.Time
}
