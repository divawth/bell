/**
 * @file 创建一个异步任务
 * @author wth
 */

import getType from './getType';
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
    timer = setTimeout(
      function () {
        timer = null;
        after();
      },
      delay
    )
  };
};
export default createTimer;