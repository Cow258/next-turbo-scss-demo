export const isBrowser = typeof window !== 'undefined'
export const isServer = typeof window === 'undefined'

/** @type {Object<string,({ state: any, dispatch: () => {} })>} */
export const globalContext = {}
if (isBrowser) { window.__globalContext = globalContext }

/**
 * @param {string} key 
 * @param {*} state 
 * @param {Function} dispatch 
 */
export const setGlobalContext = (key, state, dispatch) => {
  if (!globalContext[key]) globalContext[key] = {}
  globalContext[key].state = state
  globalContext[key].dispatch = dispatch
}

/**
 * @param {string} key 
 * @returns {[any, () => {}]}
 */
export const getGlobalContext = (key) => {
  try {
    const { state, dispatch } = globalContext[key]
    return [state, dispatch]
  } catch (error) {
    return [null, () => { }]
  }
}

export const cleanGlobalContext = () => {
  const keys = Object.keys(globalContext)
  keys.forEach(key => delete globalContext[key])
}
