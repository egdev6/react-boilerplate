import type { MockHandler } from 'vite-plugin-mock-simple';

export default [
  {
    pattern: '/mock/people',
    method: 'GET',
    delay: 100,
    handle: async (_req, res) => {
      const data = await import('./data/people.json');
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data));
    },
  },
] as MockHandler[];
