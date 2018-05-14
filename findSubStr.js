
function findSubStr(s1, s2) {
  var S = sstr = "",
    L1 = s1.length,
    L2 = s2.length;
  if (L1 > L2) {
    var s3 = s1;
    s1 = s2, s2 = s3, L1 = s2.length;
  }
  for (var j = L1; j > 0; j--)
    for (var i = 0; i <= L1 - j; i++) {
      sstr = s1.substr(i, j);
      if (s2.indexOf(sstr) >= 0) return sstr;
    }
  return "";
}
console.log(findSubStr("aaa3333", "baa333cc")); //aa333
console.log(findSubStr("aaaX3333--", "baa333ccX3333333x")); //X3333
  