/**
 * @file 数字左边补零到两位
 * @author wth
 */
const lpad = (num, length = 2) => {
  let arr = new Array(
    length - ('' + num).length + 1
  );
  return arr.join('0') + num;
};
export default lpad;