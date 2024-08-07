package domain

import (
	"errors"
	"reflect"
)

type Validator struct {
	value  any
	errors []error
}

func NewValidator(value any) *Validator {
	return &Validator{
		value:  value,
		errors: make([]error, 0),
	}
}

func (v *Validator) IsInteger() *Validator {
	if !isInteger(v.value) {
		v.addMessage("Não é um valor inteiro")
	}
	return v
}

func (v *Validator) IsFloat() *Validator {
	if !isFloat(v.value) {
		v.addMessage("Não é um número real")
	}
	return v
}

func (v *Validator) IsPositive() *Validator {
	valueInt, isInt := v.value.(int)

	if isInt && valueInt < 0 {
		v.addMessage("Não é um valor positivo")
		return v
	}

	valueFloat, isFloat := v.value.(float64)

	if (isFloat && valueFloat < 0) || (!isInt && !isFloat) {
		v.addMessage("Não é um valor positivo")
	}

	return v
}

func (v *Validator) IsString() *Validator {
	_, isString := v.value.(string)
	if !isString {
		v.addMessage("Não é um texto")
	}
	return v
}

func (v *Validator) IsRequired() *Validator {
	if v.value == nil {
		v.addMessage("Campo obrigatório")
		return v
	}

	str, _ := v.value.(string)

	if len(str) == 0 {
		v.addMessage("Campo obrigatório")
	}

	return v
}

func (v *Validator) GetErrors() []error {
	return v.errors
}

func (v *Validator) addMessage(message string) {
	v.errors = append(v.errors, errors.New(message))
}

func isInteger(value any) bool {
	return reflect.TypeOf(value).String() == "int"
}

func isFloat(value any) bool {
	valueType := reflect.TypeOf(value).String()
	return valueType == "float32" || valueType == "float64"
}
