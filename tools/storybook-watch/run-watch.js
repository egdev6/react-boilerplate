import { spawn } from 'child_process';
import open from 'open';
import kill from 'kill-port';
import chokidar from 'chokidar';

let storybookProcess;
let isStorybookOpen = false;

function getStoryIdFromPath(path) {
  const parts = path.split('/');
  const componentName = parts.at(-2);
  const category = parts.at(-3);
  console.log(`[📂] Componente: ${componentName}, Categoría: ${category}`);
  return `${category}-${componentName.toLowerCase()}--default`;
}

function restartStorybook(path) {
  const storyId = getStoryIdFromPath(path);
  const storyUrl = `http://localhost:6006/?path=/story/${storyId}`;

  // Matar el proceso que está utilizando el puerto 6006
  kill(6006)
    .then(() => {
      console.log('[🛑] Storybook detenido en el puerto 6006');

      // Iniciar Storybook nuevamente
      console.log('[🚀] Iniciando Storybook...');
      storybookProcess = spawn('npm', ['run', 'storybook'], {
        stdio: 'inherit',
        shell: true,
      });

      // Esperar unos segundos antes de abrir la historia
      setTimeout(() => {
        console.log(`[🌐] Abriendo historia en: ${storyUrl}`);

        // Si la pestaña de Storybook no está abierta, abrirla
        if (!isStorybookOpen) {
          open('http://localhost:6006');
          isStorybookOpen = true;
        }

        // Cambiar la URL de la historia abierta
        open(storyUrl);
      }, 5000); // Ajusta este tiempo según lo que tarde Storybook en arrancar
    })
    .catch((err) => {
      console.error('[❌] Error al liberar el puerto:', err);
    });
}

// Iniciar Storybook en paralelo y luego ejecutar chokidar
console.log('[🚀] Iniciando Storybook...');
storybookProcess = spawn('npm', ['run', 'storybook'], {
  stdio: 'inherit',
  shell: true,
});

// Ejecutar chokidar para observar cambios en los archivos
console.log('[👀] Observando cambios en los archivos...');
chokidar
  .watch('src/components/**/*.{ts,tsx}')
  .on('change', (path) => {
    console.log(`[📝] Cambio detectado en: ${path}`);
    restartStorybook(path);
  });