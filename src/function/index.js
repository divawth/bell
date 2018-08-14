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
import createTimer from './createTimer';
import debounce from './debounce';
import throttle from './throttle';
import decodeHTML from './decodeHTML';
import encodeHTML from './encodeHTML';

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
    this.createTimer = createTimer;
    this.debounce = debounce;
    this.throttle = throttle;
    this.decodeHTML = decodeHTML;
    this.encodeHTML = encodeHTML;
  }
};