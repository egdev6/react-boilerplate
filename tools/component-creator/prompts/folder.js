import { kebabCase } from "../utils/helpers.js";

export const promptFolder = {
  type: 'input',
  name: 'carpeta',
  message: (answers) => {
    console.log('------------------------------------------');
    if (answers.tipo === 'página') {
        console.log(`Se tomará como ruta base pages`)
        console.log('Ejemplo1: si la llamas home, se creará en pages/home');
        console.log('Ejemplo2: si la llamas home/user, se creará en pages/home/user');
    }
    if (answers.tipo === 'componente') {
      console.log('Se tomará como ruta base "components"')
      console.log('Selecciona una categoría:')
      console.log('atoms, molecules, organisms, templates');
    }
    console.log('------------------------------------------');
    return'📁 [Ruta de la carpeta]:';
  },
  when: (answers) => (answers.tipo !== 'hook' && answers.tipo !== 'servicio') ? true : false,
  choices: (answers) => {
    if (answers.tipo === 'componente') {
      return ['atoms', 'molecules', 'organisms', 'templates'];
    }
    return [];
  },
  default: (answers) => {
    if(answers.tipo === 'página'){
      return kebabCase(answers.nombre);
    }
    if(answers.tipo === 'componente'){
      return 'atoms';
    }
    return 'otro'
  },
  validate: (value, answers) => {
    if(answers.tipo == 'componente' && (value !== 'atoms' && value !== 'molecules' && value !== 'organisms' && value !== 'templates')){
      return 'La carpeta debe ser atoms, molecules, organisms o templates';
    }
    return value !== '' ? true : 'La carpeta es obligatoria';
  },
}