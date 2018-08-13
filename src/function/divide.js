/**
 * @file 除法
 * @author wth
 */
const divide = (a, b) => {
  let length = Math.max(
    decimalLength(a),
    decimalLength(b)
  );
  a = float2Int(a, length);
  b = float2Int(b, length);
  return a / b;
};
export default divide;