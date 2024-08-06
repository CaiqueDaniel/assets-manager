package domain_test

import (
	"assets-manager/backend/internal/core/shared/domain"
	"testing"
)

func TestItShouldBeAbleToValidateAInteger(t *testing.T) {
	result := domain.NewValidator(1).IsInteger().GetErrors()

	if len(result) > 0 {
		t.Fail()
	}

	result = domain.NewValidator("1").IsInteger().GetErrors()

	if len(result) == 0 {
		t.Fail()
	}
}

func TestItShouldBeAbleToValidateAFloat(t *testing.T) {
	result := domain.NewValidator(1.0).IsFloat().GetErrors()

	if len(result) > 0 {
		t.Fail()
	}

	result = domain.NewValidator("1.0").IsInteger().GetErrors()

	if len(result) == 0 {
		t.Fail()
	}
}

func TestItShouldBeAbleToValidateIfANumberIsPositive(t *testing.T) {
	result := domain.NewValidator(1.0).IsPositive().GetErrors()

	if len(result) > 0 {
		t.Error("Incorrect assertion for float number")
	}

	result = domain.NewValidator(1).IsPositive().GetErrors()

	if len(result) > 0 {
		t.Error("Incorrect assertion for integer number")
	}

	result = domain.NewValidator("1.0").IsPositive().GetErrors()

	if len(result) == 0 {
		t.Error("Incorrect assertion for string value")
	}

	result = domain.NewValidator(-1).IsPositive().GetErrors()

	if len(result) == 0 {
		t.Error("Incorrect assertion for negative value")
	}
}
