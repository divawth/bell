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
  if (getType(value) !== 'boolean') {

    if (arguments.length === 1) {
      defaultValue = !!value;
    }

    value = defaultValue;

  }

  return value;

};

export default toString;