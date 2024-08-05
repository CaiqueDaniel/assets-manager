package variableincome

type CreateVariableIncomeDto struct {
	Code                string  `json:"code"`
	NegotiationCurrency string  `json:"negotiationCurrency"`
	UnitValue           float64 `json:"unitValue"`
	Quantity            float64 `json:"quantity"`
	Date                string  `json:"date"`
}
