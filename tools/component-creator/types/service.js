import path from 'path';
import { camelCase } from '../utils/helpers.js';

export const addServiceActions = (actions, data, srcRoot) => {
  if (data?.tipo === 'servicio') {
    actions.push(
      {
        type: 'add',
        path: path.join(srcRoot,'infrastructure/api/{{camelNombre}}Service.ts'),
        templateFile: 'plop-templates/service/service.ts.hbs',
      },
      {
        type: 'add',
        path: path.join(srcRoot,'infrastructure/models/api/{{camelNombre}}ServiceTypes.ts'),
        templateFile: 'plop-templates/service/types.ts.hbs',
      },
      {
        type: 'add',
        path: path.join(srcRoot,'mocks/data/{{kebabNombre}}.json'),
        templateFile: 'plop-templates/service/data.json.hbs',
      },
      {
        type: 'append',
        path: path.join(srcRoot,'mocks/mocksServer.ts'),
        pattern: /(\/\/ -- plop hook for mocks --)/,
        templateFile: 'plop-templates/service/mock.txt.hbs',
      },
      () => {
        console.log('------------------------------------------');
        console.log(`🔧 Generando servicio ${camelCase(data.nombre)}Service\n`)
        console.log(`🔗 añadido: src/infrastructure/api/${camelCase(data.nombre)}Service.ts`)
        console.log(`🔗 añadido: src/infrastructure/models/api/${camelCase(data.nombre)}Service.ts`)
        console.log(`🔗 añadido: src/mocks/data/${camelCase(data.nombre)}.json`)
        console.log('🔗 modificado: src/mocks/mocksServer.ts\n') + ' con el nuevo mock'
      }
    )
  }
  return actions;
}