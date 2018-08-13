import getType from './getType';
import isNumeric from './isNumeric';
import toNumber from './toNumber';
import lpad from './lpad';
import decimalLength from './decimalLength';
import float2Int from './float2Int';
import plus from './plus';
import minus from './minus';
import divide from './divide';
import multiply from './multiply';

export default class Util {
  constructor() {
    this.getType = getType;
    this.isNumeric = isNumeric;
    this.toNumber = toNumber;
    this.lpad = lpad;
    this.decimalLength = decimalLength;
    this.float2Int = float2Int;
    this.plus = plus;
    this.minus = minus;
    this.divide = divide;
    this.multiply = multiply;
  }
};