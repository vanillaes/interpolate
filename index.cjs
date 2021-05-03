'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/* eslint-disable no-new-func */
/**
 * Interpolate a tagged template literal from the inputs
 *
 * @param {*} template the template literal string
 * @param {*} [tags] the tagged values in the template
 * @returns the template output with the tagged literals applied
 */
function interpolate (template, tags = {}) {
  const keys = Object.keys(tags);
  const values = Object.values(tags);
  try {
    return new Function(...keys, `return \`${template}\`;`)(...values)
  } catch (e) {
    throw new TemplateException(template, tags, e)
  }
}

/**
 * @private
 */
class TemplateException extends Error {
  constructor (template, tags, message) {
    super();
    this.name = 'TemplateError';
    let msg = '\n------------------\n';
    msg += `Template: \`${template}\``;
    msg += '\n------------------\n';
    msg += `Tags: ${JSON.stringify(tags, null, 2)}`;
    msg += '\n------------------\n';
    msg += message;
    this.message = msg;
  }
}

exports.interpolate = interpolate;
