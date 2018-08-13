/**
 * @file 把小数换成整数避免小数计算的精度问题
 * @author wth
 */
const float2Int = (float, length = 0) => {
  let parts = ('' + float).split('.');
  let result = '';

  if (parts.length === 1) {
    result = float + new Array(length + 1).join('0');
  }
  else {
    length = Math.max(0, length - parts[ 1 ].length);
    result = parts.join('') + new Array(length + 1).join('0');
  }
  return + result;
};
export default float2Int;