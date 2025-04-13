import type { MockHandler } from 'vite-plugin-mock-simple';

export default [
  {
    pattern: '/mock/test',
    method: 'GET',
    delay: 100,
    handle: async (_req, res) => {
      const data = await import('./data/test.json');
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data));
    }
  }
  // -- plop hook for mocks --
] as MockHandler[];
