import { SaveOperationUseCase } from '~/modules/financial-assets/core/application/operation/SaveOperationUseCase';
import {
  mockedOperationFactory,
  mockedOperationGateway,
} from '~/tests/fixture/assets/AssetsFixtures';

describe('SaveOperationUseCase unit tests', () => {
  let sut: SaveOperationUseCase;

  beforeAll(() => {
    sut = new SaveOperationUseCase(
      mockedOperationGateway,
      mockedOperationFactory
    );
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should be able to save a operation', async () => {
    await sut.execute({
      unitValue: '5,00',
      type: 'buy',
      date: new Date(),
      quantity: '1,00',
    });

    expect(mockedOperationGateway.save).toHaveBeenCalled();
  });
});
