import { BaseEntity, Fields } from 'lib/entity';

export default BaseEntity.extends({
  name: 'SomeEntity',
  idField: 'uuid',

  fields: {
    uuid: Fields.UuidField,
    task: Fields.CharField,
    feedback: Fields.TextField,
    description: Fields.TextField,
    observation: Fields.TextField,
  },
});