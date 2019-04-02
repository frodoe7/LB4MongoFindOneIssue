import {DefaultCrudRepository} from '@loopback/repository';
import {Atest} from '../models';
import {TestDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class AtestRepository extends DefaultCrudRepository<
  Atest,
  typeof Atest.prototype.id
> {
  constructor(
    @inject('datasources.test') dataSource: TestDataSource,
  ) {
    super(Atest, dataSource);
  }
}
