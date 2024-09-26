import {
  Operation,
  OperationType,
} from '../../core/domain/operation/Operation';
import { OperationFactory } from '../../core/domain/operation/OperationFactory';
import { OperationFormDto } from '../../core/application/operation/OperationFormDto';
import { NumberParser } from '~/modules/shared/infra/helpers/NumberParser';

export class FormOperationFactory
  implements OperationFactory<OperationFormDto>
{
  create(props: OperationFormDto): Operation {
    return new Operation(
      props.type as OperationType,
      NumberParser.toFloat(props.unitValue),
      NumberParser.toFloat(props.quantity),
      props.date
    );
  }
}
