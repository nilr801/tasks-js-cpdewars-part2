function whoseBicycle(diary1, diary2, diary3) {
  let sum1=0; 
  let sum2=0;
  let sum3=0;
  sum1=diary1.algebra+diary1.history+diary1.physics+diary1.geography+diary1.chemistry;
  sum2=diary2.algebra+diary2.history+diary2.physics+diary2.geography+diary2.chemistry;
  sum3=diary3.algebra+diary3.history+diary3.physics+diary3.geography+diary3.chemistry;
  if (sum3>=sum2 && sum3>=sum1)
    {
  return 'I need to buy a bicycle for my third son.';
    }
  if (sum2>=sum1 && sum2>sum3)
    {
  return 'I need to buy a bicycle for my second son.';
    }
  if (sum1>sum2 && sum1>sum3)
    {
  return 'I need to buy a bicycle for my first son.';
    }
}
