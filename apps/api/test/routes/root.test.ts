import * as assert from 'node:assert';
import { test } from 'node:test';

import { build } from '../helper';

test('default root route', async (t) => {
  const app = await build(t);

  const res = await app.inject({
    url: '/',
  });

  assert.deepStrictEqual(JSON.parse(res.payload), {
    name: 'clawxpose-api',
    status: 'ok',
    docs: '/health',
  });
});

test('health route returns status payload', async (t) => {
  const app = await build(t);

  const res = await app.inject({
    url: '/health',
  });

  const payload = JSON.parse(res.payload) as { status: string; timestamp: string };
  assert.equal(payload.status, 'ok');
  assert.ok(Date.parse(payload.timestamp) > 0);
});
