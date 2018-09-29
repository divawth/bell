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

  /**
   * @file 判断是不是类数字
   * @author wth
   */
  const isNumeric = val => typeof val === 'number' || typeof +val === 'number';

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
    if (getType(value) != 'number') {
      let parse = parser[parseType];
      if (parse) {
        value = parse(value, 10);
      } else if (isNumeric(value)) {
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

  /**
   * @file 获得小数的位数
   * @author wth
   */
  const decimalLength = str => {
    let parts = ('' + str).split('.');
    return parts.length === 2 ? parts[1].length : 0;
  };

  /**
   * @file 把小数换成整数避免小数计算的精度问题
   * @author wth
   */
  const float2Int = (float, length = 0) => {
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

  /**
   * @file 创建一个异步任务
   * @author wth
   */
  /** 
  * 执行一个异步任务
  *
  * @param {Function} before
  * @param {Function} after
  * @param {number} delay 延时
  */
  const createTimer = (before, after, delay) => {
    let timer;
    if (getType(after) === 'number') {
      delay = after;
      after = before;
      before = null;
    }
    let stop = function () {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
    };
    return function () {
      stop();
      if (before) {
        before();
      }
      timer = setTimeout(function () {
        timer = null;
        after();
      }, delay);
    };
  };

  /**
   * @file 节流函数
   * @author wth
   */

  /** 
  * 节流调用
  *
  * @param {Function} fn 需要节制调用的函数
  * @param {number=} delay 调用的时间间隔，默认 50ms
  * @param {boolean=} immediate 是否立即执行函数
  */
  const debounce = (fn, delay, immediate) => {

    delay = getType(delay) === 'number' ? delay : 50;

    let timer;

    return function () {
      if (!timer) {
        var context = this;
        var args = arguments;
        if (immediate) {
          fn.apply(context, args);
        }
        timer = setTimeout(function () {
          timer = null;
          if (!immediate) {
            fn.apply(context, args);
          }
        }, delay);
      }
    };
  };

  /**
   * @file 去抖函数
   * @author wth
   */

  /** 
  * 去抖函数
  *
  * @param {Function} fn 需要节制调用的函数
  * @param {number=} time 调用的时间间隔，默认 50ms
  */
  const throttle = (fn, time) => {

    time = getType(time) === 'number' ? time : 50;

    let timer = null;
    let startTime = new Date().getTime();

    return function () {

      clearTimeout(timer);

      var context = this;
      var args = arguments;
      var now = new Date().getTime();

      if (now - startTime > time) {
        startTime = now;
        fn.apply(context, args);
      } else {
        timer = setTimeout(function () {
          fn.apply(context, args);
        }, time);
      }
    };
  };

  /**
   * @file decode html 字符
   * @author wth
   */
  /**
   * decode html 字符
   *
   * @param {string} source 字符串
   * @return {string}
   */
  const decodeHTML = source => {
    let str = String(source).replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
    // 处理转义的中文和实体字符
    return str.replace(/&#([\d]+);/g, function ($0, $1) {
      return String.fromCharCode(parseInt($1, 10));
    });
  };

  /**
   * @file encode html 字符
   * @author wth
   */
  /**
   * encode html 字符
   *
   * @param {string} source 字符串
   * @return {string}
   */
  const encodeHTML = source => {
    return String(source).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  };

  class Util {
    constructor() {
      this.getType = getType;
      this.isNumeric = isNumeric;
      this.toNumber = toNumber;
      this.lpad = lpad;
      this.decimalLength = decimalLength;
      this.float2Int = float2Int;
      this.plus = plus;
      this.minus = minus;
      this.divide = divide;
      this.multiply = multiply;
      this.createTimer = createTimer;
      this.debounce = debounce;
      this.throttle = throttle;
      this.decodeHTML = decodeHTML;
      this.encodeHTML = encodeHTML;
    }
  }

  class Bell {
    constructor() {
      this.util = new Util();
    }
  }

  return Bell;

})));
