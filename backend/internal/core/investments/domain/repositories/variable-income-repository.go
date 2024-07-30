package repositories

import (
	"assets-manager/backend/internal/core/investments/domain/entities"

	"github.com/google/uuid"
)

type VariableIncomeRepository interface {
	Save(entity *entities.VariableIncome) error
	FindBy(id uuid.UUID) entities.VariableIncome
}
