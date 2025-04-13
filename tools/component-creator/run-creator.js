import inquirer from 'inquirer';
import nodePlop from 'node-plop';
import { pascalCase, kebabCase } from './utils/helpers.js';

const main = async () => {
  console.log('-----------------------------------------------------------------------------------');
  console.log('                              S28 component creator');
  const plop = await nodePlop('./tools/component-creator/component-creator.js');
  const generator = plop.getGenerator('crear');
  let repeat = true;

  const getFolderByType = (answers) => {
    const type = answers.tipo;
    switch(type){
      case 'página':
        return `pages/${kebabCase(answers.nombre)}`;
      case 'hook':
        return `infrastructure/hooks/use-${kebabCase(answers.nombre)}`;
      case 'componente':
        return `components/${answers.carpeta}/${kebabCase(answers.nombre)}`;
      case 'service':
        return `infrastructure/api/${pascalCase(answers.nombre)}`;
      default:
        return '';
    }
  }
  const getNameByType = (answers) => {
    const type = answers.tipo;
    switch(type){
      case 'página':
        return `${pascalCase(answers.nombre)}Page.tsx`;
      case 'hook':
        return 'hook.ts'; 
      default:
        return `${pascalCase(answers.nombre)}.tsx`;
    }
  }
  const openInVSCode = async (folderPath) => {
    const vscodePath = "open -a 'Visual Studio Code'"; // MacOs

    try {
      console.log(`Abriendo editor en: ${folderPath}`);
      const { execSync } = await import('child_process');
      execSync(`${vscodePath} ${folderPath}`, {
        stdio: 'inherit', // Esto permite ver la salida en la consola
        env: { ...process.env, PATH: process.env.PATH } // Asegura que el entorno tiene el PATH correcto
      });
    } catch (error) {
      console.error('Error al abrir Visual Studio Code:', error.message);
    }
  };

  while (repeat) {  
    const answers = await generator.runPrompts();
  
    try {
      const result = await generator.runActions(answers);

      if (result.failures && result.failures.length > 0) {
        console.error('❌ Error al generar el componente:');
        //console.log(answers)
        //console.log(result);
        result.failures.forEach((failure) => {
          console.error(failure.error || failure.message);
        });
        console.log('----------------------------------------------------');
        repeat = true;
      }
    } catch (error) {
      console.error('Error inesperado:', error);
      repeat = true;
    }
    console.log('✅ Componente creado con éxito');
    console.log('----------------------------------------------------');

    const { next } = await inquirer.prompt([
      {
        type: 'list',
        name: 'next',
        message: '¿Qué quieres hacer ahora?',
        choices: [
          { name: '🔁 Crear otro', value: 'again' },
          { name: '✏️  Editar el archivo creado', value: 'edit' },
          { name: '🚪 Salir', value: 'exit' },
        ],
      },
    ]);

    console.log('-----------------------------------------------------------------------------------');

    if (next === 'edit') {
      console.log('Abriendo editor...');
      // Abre VS Code en la carpeta del archivo creado (esto puede personalizarse más)
      const folder = getFolderByType(answers);
      const fileName = getNameByType(answers);
      const path = `src/${folder}/${fileName}`;
      console.log(`Abriendo ${path}...`);
      openInVSCode(path);
      repeat = true;
    } else if (next === 'again') {
      repeat = true;
    } else {
      repeat = false;
    }
  }
};

main();