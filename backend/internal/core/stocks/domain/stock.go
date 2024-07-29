package domain

import (
	"github.com/google/uuid"
)

type Stock struct {
	id        uuid.UUID
	code      string
}

func NewStock() {}
