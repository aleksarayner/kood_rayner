
  function harjutus1(nimi)  
let nimi = Alex;
console.log("Tere!" + nimi + "!" )
  
  
  
  function harjutus2(mark, mudel, värv)
let mark = Ford;
let mudel = Mustang;
let värv = punane;
console.log(`Minu auto on ${värv} ${mark} ${mudel}`);


   function harjutus3(püramiidi põhjapindala)
let pindala = 50;
let kõrgus = 30;

console.log((1/3) * pindala * korgus);


   function harjutus4(nimi)
let nimi = ("nimi"); 
let lühendnimi;

   if (nimi > 5) 
    console.log('jep');


  function harjutus5
    let sisend = nimi
    console.log(sisend.split("").reverse().join(""));


  function harjutus6
  {for (let i = 0; i <= 100; i++) {
      console.log(i);
    }}


    function harjutus7
    { for (let i = 100; i >= 1; i--) {
      console.log(i);}}


  function harjutus10
  let Name = 'Samuel';
let MiddleName = "L";
let FamilyName = `Jackson`; 
console.log(`Minu nimi on ${Name} ${MiddleName} ${FamilyName}`);

function average(array) {
  let sum = array.reduce((acc, curr) => acc + curr, 0);
  return sum / array.length;}

function harjutus11(hinded)
let hinded = [3, 5, 4, 3, 4, 5, 3, 4, 2, 4, 5, 3]
console.log(average(hinded));

function harjutus12(){
  for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {console.log('Lütseum');}
      else if (i % 3 === 0) {console.log('Tallinna');}
      else if (i % 5 === 0) {console.log('Prantsuse');}
      if i === 50 {console.log('Tallinna Prantsuse Lütseum');}
      else {console.log(i);}}}

function harjutus13(massiiv){
  if massiiv.includes("Marek") {console.log("Marek on massiivis")}
  else {console.log("Marek pole massiivis");}}


  function harjutus14(massiiv){
    let inimesed = 
    {
        nimi: 'Alice',
        vanus: 28,
        aadress: 'Pargi 7',
        telefon: '23857493',
        email: 'alice@eesti.ee'
    },
    {
        nimi: 'Bob',
        vanus: 32,
        aadress: 'Tänavaküla 12',
        telefon: '293463847',
        email: 'bob@gmail.com'
    },
    {
        nimi: 'Marek',
        vanus: 22,
        aadress: 'Metsatee 3',
        telefon: '8594032',
        email: 'marek@example.com'
    }
  }

  
  function harjutus14(massiiv) {
    let vanimInimene = massiiv[0];
    let pikimaAadressigaInimene = massiiv[0];
    let luhimaTelefonigaInimene = massiiv[0];
    let eestiEmailigaInimene = null;
    for (let inimene of massiiv) {
      if (inimene.vanus > vanimInimene.vanus) {
          vanimInimene = inimene;
      }

      if (inimene.aadress.length > pikimaAadressigaInimene.aadress.length) {
          pikimaAadressigaInimene = inimene;
      }

      if (inimene.telefon.length < luhimaTelefonigaInimene.telefon.length) {
          luhimaTelefonigaInimene = inimene;
      }

      if (inimene.email.includes("eesti")) {
          eestiEmailigaInimene = inimene;
      }
  }

  console.log(`Kõige vanem inimene: ${vanimInimene.nimi}`);
  console.log(`Inimene kellel on kõige pikem aadress: ${pikimaAadressigaInimene.nimi}`);
  console.log(`Inimene kellel on kõige lühem telefoninumber: ${luhimaTelefonigaInimene.nimi}`);
  if (eestiEmailigaInimene) {
      console.log(`Inimene kelle e-posti aadressis sisaldub sõna "eesti": ${eestiEmailigaInimene.nimi}`);
  } else {
      console.log(`Ei leidnud kedagi kelle e-posti aadressis sisaldub sõna "eesti".`);
  }
}
