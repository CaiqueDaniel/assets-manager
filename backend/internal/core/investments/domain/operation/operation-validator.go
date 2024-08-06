package operation

import "assets-manager/backend/internal/core/shared/domain"

type OperationValidator struct {
	errors *domain.ValidationErrorsCollection
}

func NewValidator() *OperationValidator {
	return &OperationValidator{
		errors: domain.NewValidationErrorsCollection(),
	}
}

func (v *OperationValidator) Validate(operation *Operation) *domain.ValidationErrorsCollection {
	v.errors.AddAll("quantity", domain.NewValidator(operation.quantity).IsFloat().IsPositive().GetErrors())
	v.errors.AddAll("unitValue", domain.NewValidator(operation.unitValue).IsFloat().IsPositive().GetErrors())

	return v.errors
}
