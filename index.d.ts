/**
 * Interpolate a tagged template literal from the inputs
 * @param {string} template the template literal string
 * @param {{[key: string]: string}} [tags] the tagged values in the template
 * @returns {string} the template output with the tagged literals applied
 */
export function interpolate(template: string, tags?: {
    [key: string]: string;
}): string;
