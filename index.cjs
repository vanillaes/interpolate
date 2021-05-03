var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};

// index.js
__markAsModule(exports);
__export(exports, {
  interpolate: () => interpolate
});
function interpolate(template, tags = {}) {
  const keys = Object.keys(tags);
  const values = Object.values(tags);
  try {
    return new Function(...keys, `return \`${template}\`;`)(...values);
  } catch (e) {
    throw new TemplateException(template, tags, e);
  }
}
var TemplateException = class extends Error {
  constructor(template, tags, message) {
    super();
    this.name = "TemplateError";
    let msg = "\n------------------\n";
    msg += `Template: \`${template}\``;
    msg += "\n------------------\n";
    msg += `Tags: ${JSON.stringify(tags, null, 2)}`;
    msg += "\n------------------\n";
    msg += message;
    this.message = msg;
  }
};
