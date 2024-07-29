package domain

import (
	valueobject "assets-manager/backend/internal/core/stocks/value-object"
	"time"

	"github.com/google/uuid"
)

type Operation struct {
	id        uuid.UUID
	stockId   uuid.UUID
	unitValue float64
	quantity  float64
	operation *valueobject.OperationType
	currency  *valueobject.Currency
	date      time.Time
}

func NewOperation() {}
