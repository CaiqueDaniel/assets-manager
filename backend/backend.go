package backend

import "assets-manager/backend/internal/infra/investments/desktop"

type Backend struct {
	*desktop.InvestmentModule
}

func InitBackend() *Backend {
	return &Backend{
		desktop.NewInvestmentModule(),
	}
}
