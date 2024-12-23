function saveData() {
  const fields = [
      "nama-pasien", "jenis-kunjungan", "alamat-pasien", "jenis-kelamin",
      "usia", "no-register", "keluhan-pasien", "diagnosa",
      "terapi-dan-tindakan", "tanggal-kunjungan"
  ];

  let existingData = JSON.parse(localStorage.getItem("dataPasien")) || [];

  let newData = {};
  fields.forEach((field) => {
      const inputElement = document.getElementById(field);
      const value = inputElement ? inputElement.value.trim() : "";
      newData[field] = value || "Tidak diisi";
  });

  existingData.push(newData);
  localStorage.setItem("dataPasien", JSON.stringify(existingData));

  alert('Data berhasil ditambahkan!');
  window.location.href = 'dataPasien.html';
}
