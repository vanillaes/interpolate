/* eslint-disable no-template-curly-in-string */
import test from 'tape';
import Interpolate from '../index.js';

test('Creates a template from a string', (t) => {
  const tempStr = 'This is a template string';
  const expect = 'This is a template string';
  const result = Interpolate(tempStr);

  t.deepEqual(result, expect);

  t.end();
});

test('Creates a template string with tagged values', (t) => {
  const tempStr = 'This is a ${value} value';
  const expect = 'This is a tagged value';
  const result = Interpolate(tempStr, { value: 'tagged' });

  t.deepEqual(result, expect);

  t.end();
});

test('Should throw if a tagged value is used but undefined', (t) => {
  t.plan(1);
  const tempStr = 'This is a ${nope} value';

  try {
    Interpolate(tempStr);
  } catch (e) {
    t.pass('Expected exception thrown');
  }

  t.end();
});
