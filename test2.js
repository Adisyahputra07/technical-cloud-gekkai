const obj = {
  kecamatan: [
    {
      id: 1,
      nama: "Ciracas",
    },
    {
      id: 2,
      nama: "Tanjung Priok",
    },
  ],
  kelurahan: [
    {
      id: 1,
      kecamatan_id: 1,
      nama: "Rambutan",
    },
    {
      id: 2,
      kecamatan_id: 1,
      nama: "Susukan",
    },
    {
      id: 3,
      kecamatan_id: 2,
      nama: "Kb. Bawang",
    },
  ],
};

const results = obj.kecamatan.map((kec) => {
  return {
    ...kec,
    kelurahan: obj.kelurahan.filter((item) => item.kecamatan_id === kec.id),
  };
});

console.log(JSON.stringify(results, null, 2));
