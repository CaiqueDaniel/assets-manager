import { EntityFactory } from '~/modules/shared/core/EntityFactory';
import { Investment } from './Investment';

export interface InvestmentFactory<T> extends EntityFactory<T, Investment> {}
