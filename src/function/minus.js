/**
 * @file 减法
 * @author wth
 */
import decimalLength from './decimalLength';
import float2Int from './float2Int';

const minus = (a, b) => {
  let length = Math.max(
    decimalLength(a),
    decimalLength(b)
  );
  a = float2Int(a, length);
  b = float2Int(b, length);

  return (a - b) / Math.pow(10, length);
};
export default minus;