export const promptHttp = {
  type: 'list',
  name: 'http',
  message: (answers) => {
    console.log('-------------------------------------------');
    console.log('GET, POST, PUT, PATCH, DELETE');
    console.log('-------------------------------------------');
    return '🖥️ [Método http]:';
  },
  when: (answers) => answers.tipo === 'servicio',
  choices: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  default: 'GET',
  validate: (value) => {
    if(answers.tipo == 'servicio' && (value !== 'GET' && value !== 'POST' && value !== 'PUT' && value !== 'PATCH' && value !== 'DELETE')){
      return 'El método http debe ser GET, POST, PUT, PATCH o DELETE (mayúsculas)';
    }
    return value !== '' ? true : 'El método http es obligatorio';
  },
}