/* eslint-disable no-template-curly-in-string */
import test from 'tape';
import Interpolate from 'interpolate-es';

test('Creates a template from a string', (t) => {
  const template = 'This is a template string';
  const expect = 'This is a template string';
  const result = Interpolate(template);

  t.deepEqual(result, expect);

  t.end();
});

test('Creates a template string with tagged values', (t) => {
  const template = 'This is a ${value} value';
  const expect = 'This is a tagged value';
  const result = Interpolate(template, { value: 'tagged' });

  t.deepEqual(result, expect);

  t.end();
});

test('Should throw if a tagged value is used but undefined', (t) => {
  t.plan(1);
  const template = 'This is a ${nope} value';

  try {
    Interpolate(template);
  } catch (e) {
    t.pass('Expected exception thrown');
  }

  t.end();
});
