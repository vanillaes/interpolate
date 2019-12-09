/* eslint-disable no-new-func */
export default function interpolate (template, tags = {}) {
  const keys = Object.keys(tags);
  const values = Object.values(tags);
  return new Function(...keys, `return \`${template}\`;`)(...values);
}
