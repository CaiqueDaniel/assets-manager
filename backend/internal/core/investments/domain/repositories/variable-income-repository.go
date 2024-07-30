package repositories

import (
	"assets-manager/backend/internal/core/investments/domain/entities"

	"github.com/google/uuid"
)

type VariableIncomeRepository interface {
	Save(entity *entities.VariableIncome)
	FindBy(id uuid.UUID)
}
