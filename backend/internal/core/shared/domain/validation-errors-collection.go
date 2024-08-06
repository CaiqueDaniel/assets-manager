package domain

type ValidationErrorsCollection struct {
	errors map[string][]error
}

func NewValidationErrorsCollection() *ValidationErrorsCollection {
	return new(ValidationErrorsCollection)
}

func (v *ValidationErrorsCollection) Add(field string, e error) {
	v.errors[field] = append(v.errors[field], e)
}

func (v *ValidationErrorsCollection) AddAll(field string, errors []error) {
	v.errors[field] = append(v.errors[field], errors...)
}

func (v *ValidationErrorsCollection) GetAll() map[string][]error {
	return v.errors
}

func (v *ValidationErrorsCollection) Merge(collection *ValidationErrorsCollection) {
	for key, errors := range collection.GetAll() {
		v.errors[key] = append(v.errors[key], errors...)
	}
}

func (v *ValidationErrorsCollection) HasErrors() bool {
	return len(v.errors) != 0
}
