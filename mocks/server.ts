import type { MockHandler } from 'vite-plugin-mock-simple';

export default [
  {
    pattern: '/api/get-data',
    method: 'GET',
    delay: 100,
    handle: async (req, res) => {
      const data = await import('./testData/data.json');
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data));
    },
  },
] as MockHandler[];
