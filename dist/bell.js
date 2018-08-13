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

  class Util {
    constructor() {
      this.getType = getType_1;
      this.isNumeric = isNumeric_1;
      this.toNumber = toNumber;
      this.lpad = lpad_1;
    }
  }

  class Bell {
    constructor() {
      this.util = new Util();
    }
  }

  return Bell;

})));
