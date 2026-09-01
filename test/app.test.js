import test from 'node:test';
import assert from 'node:assert/strict';

import { createAppInfo } from '../src/app.js';

test('createAppInfo returns expected starter shape', () => {
  const info = createAppInfo();

  assert.equal(info.name, 'clawxpose-app');
  assert.equal(info.status, 'ready');
  assert.match(info.timestamp, /^\d{4}-\d{2}-\d{2}T/);
});
