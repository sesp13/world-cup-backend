const data = [
  'FIFA',
  'Official Trophy FOIL',
  'Official Trophy FOIL',
  'Official Mascot FOIL',
  'Official Mascot FOIL',
  'Official Emblem FOIL',
  'Official Emblem FOIL',
  'Ahmad Bin Ali Stadium',
  'Al Janoub Stadium',
  'Al Thumama Stadium',
  'Education City Stadium',
  'Khalifa International Stadium',
  'Stadium 974',
  'Al Bayt Stadium outdoor',
  'Al Bayt Stadium indoor',
  'Lusail Stadium outdoor',
  'Lusail Stadium indoor',
  'Official Match Ball',
  'Champion Uruguay 1930',
  'Champion Italy 1938',
  'Champion Brazil 1958',
  'Champion England 1966',
  'Champion Brazil 1970',
  'Champion Argentina 1978',
  'Champion Italy 1982',
  'Champion Germany 1990',
  'Champion France 1998',
  'Champion Spain 2010',
  'Champion France 2018',
];

finalStr = ``;

for (let i = 1; i <= data.length; i++) {
  const item = data[i - 1];
  finalStr += `'${item}', //${i} \n`;
}

console.log(finalStr);
