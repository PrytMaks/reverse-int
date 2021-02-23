module.exports = function reverse (n) {
  let strFromN = Math.abs(n)
  strFromN = strFromN.toString();
  let revStr = strFromN.split('').reverse().join('');
  return +revStr;
}
