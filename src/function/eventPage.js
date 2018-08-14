/**
 * @file 获得事件的 pageX/pageY
 * @author wth
 */

import getType from "./getType";

const eventPage = event => {
  
  /**
   * 获得事件的 pageX/pageY
   *
   * @param {Event} event
   * @return {Object}
   */
  let x = event.pageX;
  let y = event.pageY;

  // 如果获取不到的话（ie.8 获取不到）
  if (getType(x) !== 'number') {
    let documentElement = document.documentElement;
    x = event.clientX + documentElement.scrollLeft;
    y = event.clientY + documentElement.scrollTop;
  }
  return {
    x,
    y
  };
};
export default eventPage;