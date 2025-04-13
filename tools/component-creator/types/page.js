import path from 'path';
import { pascalCase, kebabCase } from '../utils/helpers.js';

export const addPageActions = (actions, data, srcRoot) => {
  if (data?.tipo === 'página') {
    const basePath = path.join(srcRoot,'/pages/{{kebabNombre}}/');

    if(kebabCase(data.carpeta) === kebabCase(data.nombre)){
      data.routePath = data.carpeta;
    }else{
      data.routePath = `${data.carpeta}/${data.nombre}`;
    }
    
    actions.push(
      {
        type: 'add',
        path: path.join(basePath,'{{pascalNombre}}Page.tsx'),
        templateFile: 'plop-templates/page/logic.tsx.hbs',
      },
      {
        type: 'add',
        path: path.join(basePath,'{{pascalNombre}}PageView.tsx'),
        templateFile: 'plop-templates/page/view.tsx.hbs',
      },
      {
        type: 'add',
        path: path.join(basePath,'types.ts'),
        templateFile: 'plop-templates/page/types.ts.hbs',
      },
      {
        type: 'add',
        path: path.join(basePath,'index.tsx'),
        templateFile: 'plop-templates/page/index.ts.hbs',
      },
      {
        type: 'append',
        path: path.join(srcRoot,'/app/Router.tsx'),
        pattern: /(\/\/\s-- plop hook for import --\s\/\/)/,
        templateFile: "plop-templates/page/import.txt.hbs",
      },
      {
        type: 'append',
        path: path.join(srcRoot, '/app/Router.tsx'),
        pattern: /(\{\/\*\s-- plop hook for route --\*\/\})/,
        templateFile: "plop-templates/page/route.txt.hbs",
      },
      () =>{
        console.log('------------------------------------------');
        console.log(`🔧 Generando página ${pascalCase(data.nombre)}Page\n`)
        console.log(`🔗 añadido: src/pages/${data.routePath}/${pascalCase(data.nombre)}Page.tsx`)
        console.log(`🔗 añadido: src/pages/${data.routePath}/${pascalCase(data.nombre)}PageView.tsx`)
        console.log(`🔗 añadido: src/pages/${data.routePath}/index.tsx`)
        console.log(`🔗 añadido: src/pages/${data.routePath}/types.ts`)
        console.log(`🔗 modificado: src/app/Routes.tsx' + ' con el nuevo import`)
        console.log(`🔗 modificado: src/app/Routes.tsx' + ' con la nueva ruta\n`)
      }
    )
  }
  return actions;
}