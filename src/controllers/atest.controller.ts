import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
} from '@loopback/rest';
import {Atest} from '../models';
import {AtestRepository} from '../repositories';

export class AtestController {
  constructor(
    @repository(AtestRepository)
    public atestRepository : AtestRepository,
  ) {}

  @get('/eltest', {
    responses: {
      '200': {
        description: 'Array of Atest model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Atest}},
          },
        },
      },
    },
  })
  async find() {
    return await this.atestRepository.findOne({where : {testId : "5ca358720916cec7fd29e875"}});
  }

  @get('/anothertest', {
    responses: {
      '200': {
        description: 'Array of Atest model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Atest}},
          },
        },
      },
    },
  })
  async findA() {
    return await this.atestRepository.findOne({where : {id : "5ca3589e0916cec7fd29e87a"}});
  }
}
