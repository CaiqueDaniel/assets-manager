package repositories_memory

import (
	variableincome "assets-manager/backend/internal/core/investments/domain/variable-income"

	"github.com/google/uuid"
)

type MemoryVariableIncomeRepository struct {
	items []*variableincome.VariableIncome
}

func NewMemoryVariableIncomeRepository() *MemoryVariableIncomeRepository {
	return &MemoryVariableIncomeRepository{items: make([]*variableincome.VariableIncome, 0)}
}

func (r *MemoryVariableIncomeRepository) Save(entity *variableincome.VariableIncome) error {
	r.items = append(r.items, entity)
	return nil
}

func (r *MemoryVariableIncomeRepository) FindBy(id uuid.UUID) variableincome.VariableIncome {
	var result variableincome.VariableIncome

	for _, item := range r.items {
		if item.GetId().String() == id.String() {
			result = *item
			break
		}
	}

	return result
}

func (r *MemoryVariableIncomeRepository) GetAll() []*variableincome.VariableIncome {
	return r.items
}
