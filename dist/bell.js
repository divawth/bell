(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.Bell = factory());
}(this, (function () { 'use strict';

  /**
   * @file 判断数据类型
   * @author wth
   */
  const getType = x => {
    return x === undefined ? 'undefined' : x === null ? 'null' : x.constructor.name.toLowerCase();
  };

  var getType_1 = getType;

  /**
   * @file 判断是不是类数字
   * @author wth
   */
  const isNumeric = val => typeof val === 'number' || typeof +val === 'number';
  var isNumeric_1 = isNumeric;

  /**
   * @file 转成 number 类型
   * @author wth
   */

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
    if (getType_1(value) != 'number') {
      let parse = parser[parseType];
      if (parse) {
        value = parse(value, 10);
      } else if (isNumeric_1(value)) {
        value = +value;
      } else {
        value = NaN;
      }
    }
    return isNaN(value) ? defaultValue : value;
  };

  /**
   * @file 数字左边补零到两位
   * @author wth
   */
  const lpad = (num, length = 2) => {
    let arr = new Array(length - ('' + num).length + 1);
    return arr.join('0') + num;
  };
  var lpad_1 = lpad;

  /**
   * @file 获得小数的位数
   * @author wth
   */
  const decimalLength$1 = str => {
    let parts = ('' + str).split('.');
    return parts.length === 2 ? parts[1].length : 0;
  };
  var decimalLength_1 = decimalLength$1;

  /**
   * @file 把小数换成整数避免小数计算的精度问题
   * @author wth
   */
  const float2Int$1 = (float, length = 0) => {
    let parts = ('' + float).split('.');
    let result = '';

    if (parts.length === 1) {
      result = float + new Array(length + 1).join('0');
    } else {
      length = Math.max(0, length - parts[1].length);
      result = parts.join('') + new Array(length + 1).join('0');
    }
    return +result;
  };

  /**
   * @file 加法
   * @author wth
   */
  const plus = (a, b) => {
    let length = Math.max(decimalLength(a), decimalLength(b));
    a = float2Int(a, length);
    b = float2Int(b, length);

    return (a + b) / Math.pow(10, length);
  };

  /**
   * @file 减法
   * @author wth
   */
  const minus = (a, b) => {
    let length = Math.max(decimalLength(a), decimalLength(b));
    a = float2Int(a, length);
    b = float2Int(b, length);

    return (a - b) / Math.pow(10, length);
  };

  /**
   * @file 除法
   * @author wth
   */
  const divide = (a, b) => {
    let length = Math.max(decimalLength(a), decimalLength(b));
    a = float2Int(a, length);
    b = float2Int(b, length);
    return a / b;
  };

  /**
   * @file 减法
   * @author wth
   */
  const multiply = (a, b) => {
    let length = Math.max(decimalLength(a), decimalLength(b));
    a = float2Int(a, length);
    b = float2Int(b, length);
    let factor = Math.pow(10, length);
    return a * b / (factor * factor);
  };

  class Util {
    constructor() {
      this.getType = getType_1;
      this.isNumeric = isNumeric_1;
      this.toNumber = toNumber;
      this.lpad = lpad_1;
      this.decimalLength = decimalLength_1;
      this.float2Int = float2Int$1;
      this.plus = plus;
      this.minus = minus;
      this.divide = divide;
      this.multiply = multiply;
    }
  }

  class Bell {
    constructor() {
      this.util = new Util();
    }
  }

  return Bell;

})));
