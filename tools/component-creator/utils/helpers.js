export const kebabCase = (text) =>
  text
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()
export const pascalCase = (text) =>
  text
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()
    .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match) => match.toUpperCase())
    .replace(/-/g, '')
export const camelCase = (text) =>
  text
    .replace(/(^\w|-\w)/g, (match) => match.replace('-', '').toUpperCase())
    .replace(/\s+/g, '')