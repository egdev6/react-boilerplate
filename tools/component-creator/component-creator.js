import path from 'path';
import { promptsGenerator } from './prompts/promptsGenerator.js';
import { addComponentActions } from './types/component.js';
import { addPageActions } from './types/page.js';
import { addHookActions } from './types/hook.js';
import { addServiceActions } from './types/service.js';

const srcRoot = path.resolve(process.cwd(), 'src');

export default function (plop) {
  plop.setHelper('pascalCase', (text) =>
    text
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .replace(/[\s_]+/g, '-')               
      .toLowerCase()
      .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match) => match.toUpperCase())
      .replace(/-/g, '')
  );
  plop.setHelper('kebabCase', (text) =>
    text
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')               
    .toLowerCase()
  );
  plop.setHelper('camelCase', (text) =>
    text
    .replace(/(^\w|-\w)/g, (match) => match.replace('-', '').toUpperCase())
    .replace(/\s+/g, '')
  );
  console.log('-----------------------------------------------------------------------------------\n');
  
  plop.setGenerator('crear', {
    description: 'Crea un componente, página o hook',
    prompts: promptsGenerator,
    actions: function (data) {
      const actions = [];
      data.pascalNombre = plop.getHelper('pascalCase')(data.nombre);
      data.kebabNombre = plop.getHelper('kebabCase')(data.nombre);
      data.camelNombre = plop.getHelper('camelCase')(data.nombre);
      
      addComponentActions(actions, data, srcRoot);
      addPageActions(actions, data, srcRoot);
      addHookActions(actions, data, srcRoot);
      addServiceActions(actions, data, srcRoot);
      
      return actions;
    }
  })
}