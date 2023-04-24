import styles from "./FormCovid.module.css";
import img from "../../asset/img/form_img.png";
import Select from "react-select";
import { useState } from "react";
import Error from "../Allert/Error";

// Success
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormCovid = (props) => {
  const { provinces, setProvinces } = props;
  
  const cityOptions = provinces.provinces.map((province) => ({
    value: province.kota,
    label: province.kota,
  }));

  const statusOptions = [
    { value: "kasus", label: "Positif" },
    { value: "sembuh", label: "Sembuh" },
    { value: "dirawat", label: "Dirawat" },
    { value: "meninggal", label: "Meninggal" },
  ];

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedCount, setSelectedCount] = useState("");

  const [errors, setErrors] = useState({
   provinsi: false,
   status: false,
   jumlah: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {
      provinsi: selectedCity === "",
      status: selectedStatus === "",
      jumlah: selectedCount === "",
    }
    setErrors(newErrors);

    if (!Object.values(newErrors).some(Boolean)) {
      const updatedProvince = provinces.provinces.map((province) => {
         if (province.kota === selectedCity) {
         return {
            ...province,
            [selectedStatus]: parseInt(province[selectedStatus]) + parseInt(selectedCount),
         };
         }
         return province;
      });
      setProvinces({
         ...provinces,
         provinces: updatedProvince,
      });

      toast.success('Data berhasil disimpan', {
         position: toast.POSITION.TOP_RIGHT,
         autoClose: 2500,
      });

      setErrors({
         provinsi: false,
         status: false,
         jumlah: false,
      })
    } else {
      toast.error('Data gagal disimpan', {
         position: toast.POSITION.TOP_RIGHT,
         autoClose: 2500,
      });
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img src={img} alt="" className={styles.left__img} />
        </div>
        <div className={styles.form__right}>
          <h1 className={styles.right__title}>Form Covid</h1>
          <form onSubmit={handleSubmit}>
            <div className={styles.right__data}>
              <p className={styles.data__title}>Provinsi</p>
              <Select
                options={cityOptions}
                onChange={(selectedOption) => setSelectedCity(selectedOption.value)}
              />
              {errors.provinsi && <Error>Provinsi Wajib Diisi</Error>}
              <p className={styles.data__title}>Status</p>
              <Select
                options={statusOptions}
                onChange={(selectedOption) => setSelectedStatus(selectedOption.value)}
              />
              {errors.status && <Error>Status Wajib Diisi</Error>}
              <p className={styles.data__title}>Jumlah</p>
              <input
                type="number"
                className={styles.data__input}
                placeholder="Number..."
                value={selectedCount}
                onChange={(event) => setSelectedCount(event.target.value)}
              />
              {errors.jumlah && <Error>Jumlah Wajib Diisi</Error>}
              <input
                type="submit"
                className={styles.data__submit}
                value="Submit"
              />
              <ToastContainer />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default FormCovid;
