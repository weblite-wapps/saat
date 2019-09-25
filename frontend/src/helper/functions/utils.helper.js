/** Abbreviated for  A & B test for classnames
 * Caution try not to use branch function so much this function lead you to better
 * styling architecture */
export const ab = className => test => (test ? className : false)

/** Abbreviated ClassNames
 * Used with ab function to evaluate dynamic classnames for styling */
export const cns = (...args) => {
  let index = 0
  let classNames = ''
  while (index < args.length) {
    classNames += !args[index] ? '' : `${args[index]} `
    index += 1
  }
  return classNames.trimEnd()
}

/* === Logical helpers === */

/** onEnterPress */
export const onEnterPress = (handler = Function.prototype) => ({ key }) => {
  if (key === 'Enter') handler()
}

/* === Strings === */
export const toPersian = string =>
  string.replace(/[0-9]/g, num => parseInt(num, 10).toLocaleString('ar-EG'))
