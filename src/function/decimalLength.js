/**
 * @file 获得小数的位数
 * @author wth
 */
const decimalLength = str => {
  let parts = ('' + str).split('.');
  return parts.length === 2 ? parts[ 1 ].length : 0;
};
export default decimalLength;