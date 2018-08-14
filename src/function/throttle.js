/**
 * @file 去抖函数
 * @author wth
 */

import getType from './getType';

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
    }
    else {
      timer = setTimeout(
        function () {
          fn.apply(context, args);
        }, 
        time
      );
    }

  };

};
export default throttle;