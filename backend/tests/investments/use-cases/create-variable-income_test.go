package investments_usecases_test

import (
	usecases "assets-manager/backend/internal/core/investments/application/use-cases"
	"assets-manager/backend/internal/core/investments/domain/entities"
	valueobject "assets-manager/backend/internal/core/investments/domain/value-object"
	"testing"
	"time"

	"github.com/google/uuid"
)

func TestItShouldCreate(t *testing.T) {
	repository := NewMemoryVariableIncomeRepository()
	sut := usecases.NewCreateVariableIncome(repository)
	err := sut.Execute(getData())

	if err != nil {
		t.FailNow()
	}

	if len(repository.GetAll()) == 0 {
		t.Error("Variable income was not created")
	}
}

func getData() usecases.CreateVariableIncomeInput {
	return usecases.CreateVariableIncomeInput{
		Code:                "INTR",
		NegotiationCurrency: valueobject.CURRENCY_USD,
		InitalOperation: usecases.CreateVariableIncomeOperationInput{
			UnitValue: 1.5,
			Quantity:  2,
			Date:      time.Now(),
		},
	}
}

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
