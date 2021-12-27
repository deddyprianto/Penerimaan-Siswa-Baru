const data = [
  {
    nama: "deddy",
    kelas: "SI",
    apakahAlumni: "yaa",
    tahun: 2017,
  },
  {
    nama: "Devan",
    kelas: "SI",
    apakahAlumni: "yaa",
    tahun: 2018,
  },
  {
    nama: "Rio",
    kelas: "SI",
    apakahAlumni: "yaa",
    tahun: 2019,
  },
  {
    nama: "Fauzi",
    kelas: "SI",
    apakahAlumni: "yaa",
    tahun: 2017,
  },
];
const groupByCategory = data.reduce((group, product) => {
  const { tahun } = product;
  group[tahun] = group[tahun] ?? [];
  group[tahun].push(product);
  return group;
}, {});
for (m in groupByCategory) {
  if (m === "2017") {
    console.log(groupByCategory[m]);
  }
}
// let a = [];
// data.map((da) => {
//   const dataAm = { id: 112 };
//   a.push({ ...da, id: dataAm });
// });
// console.log(a);
