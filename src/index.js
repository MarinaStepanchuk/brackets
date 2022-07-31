module.exports = function check(str, bracketsConfig) {
let open = [];
let close = [];

bracketsConfig.forEach(value => {
  open.push(value[0]);
  close.push(value[1]);
});

let steck = [];

for (let z = 0; z < str.length; z++) {
  if (open.includes(str[z]) && steck.length === 0){
    steck.push(str[z])
  } else if (close.includes(str[z])) {
        if (open.indexOf(steck[steck.length-1]) === close.indexOf(str[z])) {
          steck.pop()
        } else if(open.indexOf(str[z]) !== close.indexOf(str[z])) {return false} else {steck.push(str[z])}
  } else {
    steck.push(str[z])
  }
}

return steck.length === 0;
}
