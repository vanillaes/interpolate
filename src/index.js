/* @ts-self-types="./index.d.ts" */
/* eslint-disable no-new-func */
/**
 * Interpolate a tagged template literal from the inputs
 * @param {string} template the template literal string
 * @param {{[key: string]: string}} [tags] the tagged values in the template
 * @returns {string} the template output with the tagged literals applied
 */
export function interpolate (template, tags = {}) {
  const keys = Object.keys(tags)
  const values = Object.values(tags)
  try {
    return new Function(...keys, `return \`${template}\`;`)(...values)
  } catch (error) {
    if (error instanceof Error) {
      throw new TemplateError(template, tags, error.message)
    } else {
      throw new TemplateError(template, tags, `${error}`)
    }
  }
}

/**
 * A teplate-specific Exception
 */
class TemplateError extends Error {
  /**
   * @param {string} template the template literal string
   * @param {{[key: string]: string}} [tags] the tagged values in the template
   * @param {string} [message] the error message
   */
  constructor (template, tags, message) {
    super()
    this.name = 'TemplateError'
    let msg = '\n------------------\n'
    msg += `Template: \`${template}\``
    msg += '\n------------------\n'
    msg += `Tags: ${JSON.stringify(tags, null, 2)}`
    msg += '\n------------------\n'
    msg += message
    this.message = msg
  }
}
