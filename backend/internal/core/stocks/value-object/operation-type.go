package valueobject

import "errors"

const (
	OPERATION_BUY  = "buy"
	OPERATION_SELL = "sell"
)

type OperationType struct {
	value string
}

func NewOperationType(value string) (*OperationType, error) {
	if value != OPERATION_BUY && value != OPERATION_SELL {
		return nil, errors.New("Operação inválida. Operações aceitas: \"buy\" ou \"sell\"")
	}

	return &OperationType{value: value}, nil
}

func (o *OperationType) ToString() string {
	return o.value
}

func (o *OperationType) IsEqualTo(comparisson string) bool {
	return o.value == comparisson
}
