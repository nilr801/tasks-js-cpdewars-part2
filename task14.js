function sortMyString(S) {
  let arr1='';
  let arr2='';
   for (let i=0; i<S.length; i++)
     {
       if (i%2==0)
         {
           arr2+=(S[i]);
         }
       else
         {
           arr1+=(S[i]);
         }
     }
    return arr2+' '+arr1;
}
