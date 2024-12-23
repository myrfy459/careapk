
function saveData1() {
    
    const namaPasien = document.getElementById("nama-pasien").value;
    const nomorRegister = document.getElementById("jenis-kunjungan").value;
    const tanggalKunjungan = document.getElementById("alamat-pasien").value;
    const dataSubjektif = document.getElementById("jenis-kelamin").value;
    const dataObjektif = document.getElementById("usia").value;
    const assesment = document.getElementById("no-register").value;
    const planing = document.getElementById("keluhan-pasien").value;

  
    if (
        namaPasien === "" ||
        nomorRegister === "" ||
        tanggalKunjungan === "" ||
        dataSubjektif === "" ||
        dataObjektif === "" ||
        assesment === "" ||
        planing === ""
    ) {
        alert("Harap isi semua kolom data pasien.");
        return;
    }

   
    const allData = JSON.parse(localStorage.getItem("dataSoap")) || [];

 
    const newData = {
        namaPasien,
        nomorRegister,
        tanggalKunjungan,
        dataSubjektif,
        dataObjektif,
        assesment,
        planing,
    };

    allData.push(newData);

  
    localStorage.setItem("dataSoap", JSON.stringify(allData));

    alert("Data berhasil disimpan!");
    window.location.href = "dataSoap.html";
}
