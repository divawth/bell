/**
 * @file 减法
 * @author wth
 */
import decimalLength from './decimalLength';
import float2Int from './float2Int';

const multiply = (a, b) => {
  let length = Math.max(
    decimalLength(a),
    decimalLength(b)
  );
  a = float2Int(a, length);
  b = float2Int(b, length);
  let factor = Math.pow(10, length);
  return (a * b) / (factor * factor);
};
export default multiply;