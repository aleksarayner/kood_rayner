function harjutus15(arvud) {
    return Math.max(...arvud);
}
  

  function harjutus16(celsius) {
    return (celsius * 9/5) + 32;
}
  

  function harjutus17(number) {
    for (let i = 1; i <= 10; i++) {
      console.log(`${number} * ${i} = ${number * i}`);
    }
}
  

  function harjutus18(num) {
    let faktoriaal = 1;
    for (let i = 1; i <= num; i++) {
      faktoriaal *= i;
    }
    return faktoriaal;
}


function harjutus19(ridadeArv) {
    for (let i = 1; i <= ridadeArv; i++) {
      let rida = '';
      for (let j = 1; j <= i; j++) {
        rida += '*';
      }
      console.log(rida);
    }
}
  

  function harjutus20(arv) {
    if (arv <= 1) 
    {
      console.log(`${arv} ei ole algarv.`);
      return;
    }
    for (let i = 2; i * i <= arv; i++) 
    {
      if (arv % i === 0) {
        console.log(`${arv} ei ole algarv.`);
        return;
      }
    }
    console.log(`${arv} on algarv.`);
}