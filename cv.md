1. Margarita Lebedevich
2. Skype: margosha24093, Telegram: @Margorik
3. Start a career of front-end developer, gain in skills, and become a teamlead after several years
4. Labview, Javascript, HTML, CSS, Git
5. Code example from Codewars

   Who likes this
 ```javascript
    function likes(names) {
      switch (names.length) {
      case 0: return "no one likes this";
        break;
      case 1: return names[0]+" likes this";
        break;
      case 2: return names[0]+ " and " + names[1] + " like this";
        break;
      case 3: return names[0] + ", " + names[1]+ " and " + names[2] + " like this"; ;
        break;
      default: return names[0] + ", " + names[1]+ " and " + (names.length-2) + " others like this";
     }
    }
   ```
   Build a pile of cubes
```javascript
    function findNb(m) {
        var i = 1, a=0;
        while(a<m) {
          a+= Math.pow(i, 3);
          i++;
        }
        return m==a ? i-1:-1;
    }
```
