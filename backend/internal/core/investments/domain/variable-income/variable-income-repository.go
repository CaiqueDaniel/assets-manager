package variableincome

import (
	"github.com/google/uuid"
)

type VariableIncomeRepository interface {
	Save(entity *VariableIncome) error
	FindBy(id uuid.UUID) VariableIncome
}
