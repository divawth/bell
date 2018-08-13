/**
 * @file 判断数据类型
 * @author wth
 */
const getType = (x) => {
  return x === undefined ? 'undefined' : x === null ? 'null' : x.constructor.name.toLowerCase();
};

module.exports = getType;