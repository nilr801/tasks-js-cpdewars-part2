function nbDig(n, d) {
    let chisla=[];
  let counter=0;
  if (d===0)
    {
      counter=1;
    }
  let k=0;
    while(k<=n)
      {
        sum=k*k;
        chisla.push(sum);
        k++;
      }
  for (let i=0; i<chisla.length; i++)
    {
      chisla[i];
      while (chisla[i]>=1)
        {
          let ost=chisla[i]%10;
          if (ost===d)
            {
             counter++; 
            }
          chisla[i]=Math.floor(chisla[i]/10);
        }
    }
  return counter;
}
