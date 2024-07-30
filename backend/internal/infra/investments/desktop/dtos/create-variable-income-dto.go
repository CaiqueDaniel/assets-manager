package dtos

import "time"

type CreateVariableIncomeDto struct {
	Code                string
	NegotiationCurrency string
	UnitValue           float64
	Quantity            float64
	Date                time.Time
}