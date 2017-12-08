export default (val) => {
  return val != null && typeof val === 'object' && val.constructor !== RegExp
}
