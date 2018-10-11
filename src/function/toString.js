/**
 * @file 转成 string 类型
 * @author wth
 */

import getType from './getType';

/**
 * 转成 string 类型
 *
 * @param {*} value
 * @param {*} defaultValue
 * @return {string}
 */
const toString = (value, defaultValue) => {
  let type = getType(value);

  if (type === 'number') {
    value = '' + value;
  }
  else if (type !== 'string') {

    if (arguments.length === 1) {
      defaultValue = '';
    }

    value = defaultValue;
  }

  return value;
};

export default toString;