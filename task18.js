function vowelOne(s){
 let vowels = "aeiouyAEIOUY"; 
let pos=0;
  
let res = '';
for (var i = 0; i <= s.length; i++) {
  let counter=0;
  for (var j = 0; j <= vowels.length; j++) {
    if (s[i] === vowels[j])
    { 
   counter++;  
    } 
  }
  if (counter===1)
    {
      res+="1";
    }
  else{
     res+="0";
  }
}
  res=res.slice(0,-1);
  return res;
  }
