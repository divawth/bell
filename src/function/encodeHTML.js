/**
 * @file encode html 字符
 * @author wth
 */
/**
 * encode html 字符
 *
 * @param {string} source 字符串
 * @return {string}
 */
const encodeHTML = source => {
  return String(source)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
};
export default encodeHTML;