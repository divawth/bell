/**
 * @file 获得事件的 offsetX/offsetY
 * @author wth
 */

import getType from "./getType";

const eventOffset = event => {
  
  /**
   * 获得事件的 offsetX/offsetY
   *
   * @param {Event} event
   * @return {Object}
   */
  let x = event.offsetX;
  let y = event.offsetY;

  // 如果获取不到的话（Firfox 获取不到）
  if (getType(x) !== 'number') {
    let rect = event.target.getBoundingClientRect();
    x = event.clientX - rect.left;
    y = event.clientY - rect.top;
  }
  return {
    x,
    y
  };
};
export default eventOffset;