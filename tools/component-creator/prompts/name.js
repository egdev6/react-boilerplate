export const promptName = {
  type: 'input',
  name: 'nombre',
  message: (answers) => {
    console.log('-----------------------------------------------------------------------------------');
    console.log('Nombre sin extensión.');
    if(answers.tipo === 'página'){
      console.log('Página-> Agrega Page al final del nombre')

    }
    if(answers.tipo === 'hook'){
      console.log('Hook-> Agrega use al inicio del nombre');
    }
    if(answers.tipo === 'servicio'){
      console.log('Servicio-> Sólo nombre base, el resto se generará automáticamente');
      console.log('Ejemplo: si la llamas user, se generará userService.ts');
    }
    console.log('-------------------------------------------');
    return `💬 [Nombre de ${answers.tipo}]:`;
  },
  validate: (value) => (!!value ? true : 'El nombre es obligatorio'),
}