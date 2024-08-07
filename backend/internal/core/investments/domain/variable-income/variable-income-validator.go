package variableincome

import shared "assets-manager/backend/internal/core/shared/domain"

type VariableIncomeValidator struct {
	errors *shared.ValidationErrorsCollection
}

func NewValidator() *VariableIncomeValidator {
	return &VariableIncomeValidator{
		errors: shared.NewValidationErrorsCollection(),
	}
}

func (v *VariableIncomeValidator) Validate(variableIncome *VariableIncome) *shared.ValidationErrorsCollection {
	v.errors.AddAll("code", shared.NewValidator(variableIncome.code).IsString().IsRequired().GetErrors())
	return v.errors
}
