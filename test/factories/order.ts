import { Factory } from 'fishery';
import { faker } from '@faker-js/faker';

import { CreateOrderDto } from 'src/server/app/orders/dto/create-order.dto';

export default Factory.define<CreateOrderDto>(({ associations }) => ({
  alias: faker.internet.userName(),
  user: associations.user,
  thing: associations.thing,
}));
