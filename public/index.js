const data = [
  'Netherlands logo',
  'Justin Bijlow',
  'Jasper Cillessen',
  'Daley Blind',
  'Matthijs de Ligt',
  'Stefan de Vrij',
  'Denzel Dumfries',
  'Virgil van Dijk',
  'Steven Berghuis',
  'Frenkie de Jong',
  'Ryan Gravenberch',
  'Davy Klaassen',
  'Teun Koopmeiners',
  'Georginio Wijnaldum',
  'Steven Bergwijn',
  'Arnaut Danjuma',
  'Memphis Depay',
  'Cody Gakpo',
  'Donyell Malen',
];

finalStr = ``;

for (let i = 1; i < 20; i++) {
  const item = data[i - 1];
  finalStr += `'${item}', //${i} \n`;
}

console.log(finalStr);
