/**
 * @file 节流函数
 * @author wth
 */

import getType from './getType';

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
      timer = setTimeout(
        function () {
          timer = null;
          if (!immediate) {
            fn.apply(context, args);
          }
        },
        delay
      );
    }
  };
};
export default debounce;