import { InvestmentFormDto } from '~/modules/financial-assets/core/application/investment/InvestmentFormDto';
import { SaveInvestmentUseCase } from '~/modules/financial-assets/core/application/investment/SaveInvestmentUseCase';
import {
  mockedInvestmentFactory,
  mockedInvestmentGateway,
} from '~/tests/fixture/assets/AssetsFixtures';

describe('SaveInvestmentUseCase unit tests', () => {
  let sut: SaveInvestmentUseCase;

  beforeAll(() => {
    sut = new SaveInvestmentUseCase(
      mockedInvestmentGateway,
      mockedInvestmentFactory
    );
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should be able to save a operation', async () => {
    const dto: InvestmentFormDto = {
      code: 'INTR',
      type: 'Variable',
      unitValue: '5,00',
      date: new Date(),
      currency: 'USD',
      quantity: '1,00',
    };

    await sut.execute(dto);

    expect(mockedInvestmentFactory.create).toHaveBeenCalledWith(dto);
    expect(mockedInvestmentGateway.save).toHaveBeenCalled();
  });
});
