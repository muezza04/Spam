import { nanoid } from "nanoid";
import { useState } from "react";
import styles from "./AddMovieForm.module.css";
import Alert from "../Allert/Allert";
import Button from "../ui/button";
import Heading from "../ui/Heading";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMovie } from "../../features/moviesSlice";
function AddMovieForm() {
  // buat dispatch
  const dispatch = useDispatch();

  // buat navigation
  const navigation = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    poster: "",
    type: "",
  });

  const {
    title,
    date,
    poster,
    genre,
    isTitleError,
    isDateError,
    isPosterError,
  } = formData;

  const validate = () => {
    if (title === "") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        isTitleError: true,
      }));
      return false;
    } else if (date === "") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        isTitleError: false,
        isDateError: true,
      }));
      return false;
    } else if (poster === "") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        isPosterError: true,
        isDateError: false,
      }));
      return false;
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        isTitleError: false,
        isDateError: false,
        isPosterError: false,
      }));
      return true;
    }
  };

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function submitMovie() {
    const movie = {
      id: nanoid(),
      title: title,
      year: date,
      type: genre,
      poster: poster,
    };

    dispatch(addMovie(movie));

    navigation("/");
  }

  // Handle form ketika di submit
  function handleSubmit(e) {
    // Mencegah perilaku default : refresh
    e.preventDefault();

    validate() && submitMovie();
  }

  return (
    <div className={styles.container}>
      <section className={styles.addmovie}>
        <div className={styles.addmovie__left}> </div>
        <img
          className={styles.movie__image}
          src="https://picsum.photos/300/400"
          alt=""
        />

        <div>
          <form onSubmit={handleSubmit} className={styles.addmovie__submit}>
            <div className={styles.addmovie__right}></div>
            <Heading>Add Movie</Heading>

            <label className={styles.addmovie__label}>
              <p>Title</p>
            </label>
            <input
              onChange={handleChange}
              id="title"
              className={styles.addmovie__input}
              type="text"
              name="title"
              value={title}
            />
            {/*
            jika error title true: muncul eror
            jika tidak, munculkan string koeong
            */}
            {isTitleError && <Alert>Title Wajib Diisi</Alert>}

            <label>
              <p className={styles.addmovie__label}>Year</p>

              <input
                onChange={handleChange}
                id="year"
                className={styles.addmovie__input}
                type="number"
                name="date"
                value={date}
              />
              {isDateError && <Alert>Date Wajib Diisi</Alert>}
            </label>
            <div>
              <p className={styles.addmovie__label}>Link Poto</p>
              <input
                className={styles.addmovie__input}
                name="poster"
                type="text"
                value={poster}
                onChange={handleChange}
                id="poster"
              />
              {isPosterError && <Alert>Link Poster Wajib Diisi</Alert>}
            </div>
            <div>
              <p className={styles.addmovie__label}>Jenis Flim </p>
              <select
                className={styles.addmovie__input}
                name="type"
                id="type"
                value={genre}
                onChange={handleChange}
              >
                <option value="">Genre Movie</option>
                <option value="">Drama</option>
                <option value="">Horror</option>
                <option value="">Comedy</option>
                <option value="">Lainnya</option>
              </select>
                        
            </div>
            <h3>
              {/* <div>
              <input type="text" />
              <select name="" id="">
                
                <Option value="">Drama</Option>
                <Option value="">Horror</Option>
                <Option value="">Comedy</Option>
              </select>
            </div> */}
              <Button full size="sm">
                Submit
              </Button>
            </h3>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;
