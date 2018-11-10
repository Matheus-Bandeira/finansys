import {InMemoryDbService} from 'angular-in-memory-web-api';

import {Category} from './pages/categories/shared/category.module';
import {Entry} from './pages/entries/shared/entry.module';

export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    const categories: Category[] = [
      {id: 1, name: 'Moradia', description: 'Pagamentos de Contas da Casa'},
      {id: 2, name: 'Saúde', description: 'Plano de Saúde e Remédios'},
      {id: 3, name: 'Lazer', description: 'Cinema, parque, praia, etc'},
      {id: 4, name: 'Salário', description: 'Recebimento de Salário'},
      {id: 5, name: 'Freelas', description: 'Trabalhos como freelancer'}
    ];

    const entries: Entry[] = [
      {
        id: 1,
        name: 'Compras',
        categoryId: categories[0].id,
        category: categories[0],
        paid: true,
        date: '14/09/2018',
        amount: '70,85',
        type: 'expense',
        description: 'Foi necessário realizar compras não planejadas'
      } as Entry,
      {
        id: 2,
        name: 'Suplemento',
        categoryId: categories[1].id,
        category: categories[1],
        paid: false,
        date: '14/09/2018',
        amount: '102,99',
        type: 'expense'
      } as Entry,
      {
        id: 3,
        name: 'Salário da empresa SpaceX',
        categoryId: categories[4].id,
        category: categories[4],
        paid: true,
        date: '14/09/2018',
        amount: '9999,99',
        type: 'revenue'
      } as Entry,
      {
        id: 4,
        name: 'Aluguel de Filme',
        categoryId: categories[2].id,
        category: categories[2],
        paid: true,
        date: '14/09/2018',
        amount: '15,15',
        type: 'expense'
      } as Entry,
      {
        id: 5,
        name: 'Gás de Cozinha',
        categoryId: categories[0].id,
        category: categories[0],
        paid: true,
        date: '14/09/2018',
        amount: '60,85',
        type: 'expense'
      } as Entry
    ];

    return {categories, entries};
  }
}
