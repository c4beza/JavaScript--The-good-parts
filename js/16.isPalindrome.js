/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  //  console.log(s);
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    // console.log(s.charAt(start),s.charAt(end));
    if (s.charAt(start) === s.charAt(end)) {
      start++;
      end--;
    } else {
      return false;
    }
  }
  return true;
};

let s = "A man, a plan, a canal: Panama";
isPalindrome(s);
