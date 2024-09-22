import { Gateway } from '~/modules/shared/core/Gateway';
import { Investment } from './Investment';

export interface InvestmentGateway extends Gateway<Investment> {}
