package desktop

import "assets-manager/backend/internal/core/shared/domain"

const (
	VALIDATION_ERROR = "VALIDATION"
	FATAL_ERROR      = "FATAL"
)

type ErrorResponse struct {
	Type    string
	Message string
	Errors  map[string][]error
}

func ErrorHandler(exception any) *ErrorResponse {
	validationErrors, isValidation := exception.(domain.ValidationErrorsCollection)

	if isValidation {
		return &ErrorResponse{
			Type:    VALIDATION_ERROR,
			Message: "Erro ao processar os itens",
			Errors:  validationErrors.GetAll(),
		}
	}

	return &ErrorResponse{
		Type:    FATAL_ERROR,
		Message: "Erro interno",
		Errors:  make(map[string][]error),
	}
}
