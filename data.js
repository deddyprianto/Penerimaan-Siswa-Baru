const products = [
  { nama: "arman", hobi: "main Bola", usia: 12, jenisKelamin: "laki-laki" },
  {
    nama: "Ratna Sinambela",
    hobi: "main Tenis",
    usia: 13,
    jenisKelamin: "perempuan",
  },
  {
    nama: "asep supriadi",
    hobi: "main Tenis",
    usia: 13,
    jenisKelamin: "laki-laki",
  },
  {
    nama: "Raisa Simarmata",
    hobi: "Renang",
    usia: 14,
    jenisKelamin: "perempuan",
  },
];

const dataGropByName = products.reduce((acc, curr) => {
  const { jenisKelamin } = curr;
  acc[jenisKelamin] = acc[jenisKelamin] ?? [];
  acc[jenisKelamin].push(curr);
  return acc;
}, {});
console.log(dataGropByName);
