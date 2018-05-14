
    var str1 = "abcdefghijklname123what";
    var str2 = "defghiwhatisyourname";
    var L = []; //备忘录 记录L[i][j]最大长度子串L[i][j]=max(L[i-1][j-1]+1,0)
    getMaxSubStr();

    function getMaxSubStr() {
      for (var i = 0; i < str1.length + 1; i++) {
        L[i] = [];
        L[i][0] = 0;
      }
      for (var j = 0; j < str2.length + 1; j++) {
        L[0][j] = 0;
      }
      var max = -1;
      var x = -1;
      var y = -1;
      for (var i = 1; i < str1.length + 1; i++) {
        for (var j = 1; j < str2.length + 1; j++) {
          if (str1.charAt(i - 1) == str2.charAt(j - 1)) {
            L[i][j] = L[i - 1][j - 1] + 1;
          } else {
            L[i][j] = 0;
          }

          if (L[i][j] > max) {
            max = L[i][j];
            x = i - 1;
            y = j - 1;
            console.log("i=" + i + ";j=" + j + ";max=" + max );
          }
        }
      }
      //输出共同的子串
      var str = [];
      while (x >= 0 && y >= 0) {
        if (str1.charAt(x) == str2.charAt(y)) {
          str[--max] = str1.charAt(x);
          x--;
          y--;
        } else
          break;
      }
      var str_out = "";
      for (var i = 0; i < str.length; i++) {
        str_out += str[i];
      }
      console.log(str_out);
    }
  