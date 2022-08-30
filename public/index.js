const data = [
  'Croatia Shield',
  'Dominik Livaković',
  'Ivica Ivušić',
  'Duje Ćaleta-Car',
  'Joško Gvardiol',
  'Josip Juranović',
  'Dejan Lovren',
  'Borna Sosa',
  'Domagoj Vida',
  'Marcelo Brozović',
  'Mateo Kovačić',
  'Luka Modrić',
  'Mario Pašalić',
  'Ivan Perišić',
  'Nikola Vlašić',
  'Josip Brekalo',
  'Andrej Kramarić',
  'Marko Livaja',
  'Mislav Oršić',
];

finalStr = ``;

for (let i = 1; i < 20; i++) {
  const item = data[i - 1];
  finalStr += `'${item}', //${i} \n`;
}

console.log(finalStr);
