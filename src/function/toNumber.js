/**
 * @file 转成 number 类型
 * @author wth
 */

import getType from './getType';
import isNumeric from './isNumeric';

const parser = {
  int: parseInt,
  float: parseFloat
};

/**
 * 转成 number 类型
 *
 * @param {*} value
 * @param {*=} defaultValue 转换失败时的默认值
 * @param {string=} parseType 如果需要解析转换，可传入 int 或 float
 * @return {number}
 */
const toNumber = (value, defaultValue, parseType) => {
  if (getType(value) != 'number') {
    let parse = parser[ parseType ];
    if (parse) {
      value = parse(value, 10);
    } 
    else if (isNumeric(value)) {
      value = +value;
    }
    else {
      value = NaN;
    }
  } 
  return isNaN(value) ? defaultValue : value;
};

export default toNumber;