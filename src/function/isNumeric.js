/**
 * @file 判断是不是类数字
 * @author wth
 */
const isNumeric = val => typeof val === 'number' || typeof +val === 'number';
export default isNumeric;