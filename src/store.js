import {assoc} from 'ramda';


/**
 * The global store @hax
 * window.store.set(key, value) sets a value to the store
 * window.store.get(key) returns a value from the store
 */
export default (initialState = {}) => {
  window.store = {
    values: initialState
  }
  window.store.set = (key, value) => assoc(key, value, window.store.values)
  window.store.get = (key) => window.store.values[key]

}