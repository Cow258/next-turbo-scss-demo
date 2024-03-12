const is = {
  /** @return {val is NonNullable<any>} */
  defined: val => typeof val !== 'undefined' && val !== null,
  /** @return {val is boolean} */
  bool: val => typeof val === 'boolean',
  /** @return {val is number} */
  number: val => typeof val === 'number' && !Number.isNaN(val),
  /** @return {val is typeof NaN} */
  nan: val => typeof val === 'number' && Number.isNaN(val),
  /** @return {val is string} */
  string: val => typeof val === 'string',
  /** @return {val is Function} */
  fn: val => typeof val === 'function',
  /** @return {val is Function} */
  async: val => typeof val === 'function' && !!val.constructor && val.constructor.name === 'AsyncFunction',
  /** @return {val is Promise} */
  promise: val => val instanceof Promise,
  /** @return {val is RegExp} */
  regex: val => val instanceof RegExp,
  /** @return {val is Set} */
  set: val => val instanceof Set,
  /** @return {val is any[]} */
  array: val => Array.isArray(val),
  /** @return {val is Object} */
  object: val => typeof val === 'object',
  plainObject: val => Object.prototype.toString.call(val) === '[object Object]',
  between: (val, min, max) => val >= min && val <= max,
  empty(val) {
    if (!val) return true
    if (is.array(val)) return val.length === 0
    if (is.plainObject(val)) return Object.keys.length === 0
    return false
  },
  notEmpty(val) {
    return !is.empty(val)
  },
  even: val => val % 2 === 0,
  url: val => {
    try {
      const parsedUrl = new URL(val)
      return parsedUrl.protocol === 'https:'
    } catch (e) {
      return false
    }
  },
}

export default is
