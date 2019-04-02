import {Entity, model, property} from '@loopback/repository';

// the below line is like a switch - damage the fixed one and fix the damaged one
@model({ settings: { strictObjectIDCoercion: true, }, })

export class Atest extends Entity {
  @property({
    id: true,
    type: 'string',
    required: false,
    mongo: {
      columnName: '_id',
      dataType: 'ObjectID',
    },
  })
  id: string;
  
  @property({
    type: 'boolean',
    required: true,
  })
  valid: boolean;

  @property({
    type: 'string',
    required: true,
  })
  testId: string;


  constructor(data?: Partial<Atest>) {
    super(data);
  }
}
