/**
 * @type {string} str String to check.
 * @type {string} open Opening character (e.g. '{').
 * @type {string} close Closing character (e.g. '}').
 * @return {Array.<[number, number]>} Indices of balanced substrings.
 */
function getBalancedSubstrings(str, open, close) {
  var res = [],
      openings = [], // indices of open characters without matched close character.
      substrings = []; // currently found balanced substrings.

  for (var i = 0, len = str.length; i < len; i++) {
    var c = str[i];

    if (c === open) {
      openings.push(i);
    }
    else if (c === close) {
      if (openings.length) {
        var substring = [openings.pop(), i];

        j = substrings.length - 1;

        while (j >= 0 && substrings[j][0] > substring[0]) {
          substrings.pop();
          --j;
        }

        substrings.push(substring);

        if (!openings.length) {
          res = res.concat(substrings);
          substrings.length = 0;
        }
      }
    }
  }

  return res.concat(substrings);
};
