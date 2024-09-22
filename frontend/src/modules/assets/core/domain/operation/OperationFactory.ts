import { EntityFactory } from '~/modules/shared/core/EntityFactory';
import { Operation } from './Operation';

export interface OperationFactory<T> extends EntityFactory<T, Operation> {}
