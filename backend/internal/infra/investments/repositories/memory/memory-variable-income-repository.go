package repositories_memory

import (
	"assets-manager/backend/internal/core/investments/domain/entities"

	"github.com/google/uuid"
)

type MemoryVariableIncomeRepository struct {
	items []*entities.VariableIncome
}

func NewMemoryVariableIncomeRepository() *MemoryVariableIncomeRepository {
	return &MemoryVariableIncomeRepository{items: make([]*entities.VariableIncome, 0)}
}

func (r *MemoryVariableIncomeRepository) Save(entity *entities.VariableIncome) error {
	r.items = append(r.items, entity)
	return nil
}

func (r *MemoryVariableIncomeRepository) FindBy(id uuid.UUID) entities.VariableIncome {
	var result entities.VariableIncome

	for _, item := range r.items {
		if item.GetId().String() == id.String() {
			result = *item
			break
		}
	}

	return result
}

func (r *MemoryVariableIncomeRepository) GetAll() []*entities.VariableIncome {
	return r.items
}
