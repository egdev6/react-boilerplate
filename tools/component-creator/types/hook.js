import path from 'path';
import { kebabCase } from '../utils/helpers.js';

export const addHookActions = (actions, data, srcRoot) => {
  if (data?.tipo === 'hook') {
    const basePath = path.join(srcRoot,'infrastructure/hooks/use-{{kebabNombre}}/');
    actions.push(
      {
        type: 'add',
        path: path.join(basePath,'hook.ts'),
        templateFile: 'plop-templates/hook/hook.ts.hbs',
      },
      {
        type: 'add',
        path: path.join(basePath,'store.ts'),
        templateFile: 'plop-templates/hook/store.ts.hbs',
      },
      {
        type: 'add',
        path: path.join(basePath,'types.ts'),
        templateFile: 'plop-templates/hook/types.ts.hbs',
      },
      {
        type: 'add',
        path: path.join(basePath,'index.ts'),
        templateFile: 'plop-templates/hook/index.ts.hbs',
      },
      () => {
        () => {
        console.log('------------------------------------------');
        console.log(`🔧 Generando hook use-${kebabCase(data.nombre)}\n`)
        console.log(`🔗 añadido: src/infrastructure/hooks/use-${kebabCase(data.nombre)}/hook.ts`)
        console.log(`🔗 añadido: src/infrastructure/hooks/use-${kebabCase(data.nombre)}/store.ts`)
        console.log(`🔗 añadido: src/infrastructure/hooks/use-${kebabCase(data.nombre)}/index.ts`)
        console.log(`🔗 añadido: src/infrastructure/hooks/use-${kebabCase(data.nombre)}/types.ts\n`)
      }
      }
    )
  }
  return actions;
}