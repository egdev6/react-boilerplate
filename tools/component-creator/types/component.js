import path from 'path';
import { pascalCase, kebabCase } from '../utils/helpers.js';

export const addComponentActions = (actions, data, srcRoot) => {
  if (data?.tipo === 'componente') {
    const basePath = path.join(srcRoot,'components/{{carpeta}}/{{kebabNombre}}/');

    if (data && data.carpeta) {
      const folderSegments = data.carpeta.split('/');
      const groupIndex = folderSegments.indexOf('components') + 1;
      const groupName = folderSegments[groupIndex];
      
      data.storyGroup = groupName
      ? groupName.charAt(0).toUpperCase() + groupName.slice(1)
      : 'Components';
    }
    actions.push(
      {
        type: 'add',
        path: path.join(basePath,'{{pascalNombre}}.tsx'),
        templateFile: 'plop-templates/component/component.tsx.hbs',
      },
      {
        type: 'add',
        path: path.join(basePath,'types.ts'),
        templateFile: 'plop-templates/component/types.ts.hbs',
      },
      {
        type: 'add',
        path: path.join(basePath,'{{pascalNombre}}.stories.tsx'),
        templateFile: 'plop-templates/component/stories.tsx.hbs',
      },
      {
        type: 'add',
        path: path.join(basePath,'index.ts'),
        templateFile: 'plop-templates/component/index.ts.hbs',
      },
      () => {
        console.log('------------------------------------------');
        console.log(`🔧 Generando componente ${pascalCase(data.nombre)}\n`)
        console.log(`🔗 añadido: src/components/${data.carpeta}/${kebabCase(data.nombre)}/${pascalCase(data.nombre)}.tsx`)
        console.log(`🔗 añadido: src/components/${data.carpeta}/${kebabCase(data.nombre)}/${pascalCase(data.nombre)}.stories.tsx`)
        console.log(`🔗 añadido: src/components/${data.carpeta}/${kebabCase(data.nombre)}/index.ts`)
        console.log(`🔗 añadido: src/components/${data.carpeta}/${kebabCase(data.nombre)}/types.ts\n`)
      }
    )
  }

  return actions;
}