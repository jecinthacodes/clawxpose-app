import { type FastifyPluginAsync } from 'fastify';

const root: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get('/', async function () {
    return {
      name: 'clawxpose-api',
      status: 'ok',
      docs: '/health',
    };
  });

  fastify.get('/health', async function () {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  });
};

export default root;
