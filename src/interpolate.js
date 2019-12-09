/* eslint-disable no-new-func */
export default function interpolate (template, params = {}) {
  const keys = Object.keys(params);
  const values = Object.values(params);
  return new Function(...keys, `return \`${template}\`;`)(...values);
}
