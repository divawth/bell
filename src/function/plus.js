/**
 * @file 加法
 * @author wth
 */
const plus = (a, b) => {
  let length = Math.max(
    decimalLength(a),
    decimalLength(b)
  );
  a = float2Int(a, length);
  b = float2Int(b, length);

  return (a + b) / Math.pow(10, length);
};
export default plus;