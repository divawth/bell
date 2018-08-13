import getType from './getType';
import isNumeric from './isNumeric';
import toNumber from './toNumber';
import lpad from './lpad';

export default class Util {
  constructor() {
    this.getType = getType;
    this.isNumeric = isNumeric;
    this.toNumber = toNumber;
    this.lpad = lpad;
  }
};