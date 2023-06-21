import { createSlice } from "@reduxjs/toolkit";
import data from "../../utisl/constants/data";

const moviesSlice = createSlice({
  name: "Movies Slice",
  initialState: {
    movies: data,
  },
  reducers: {
    addMovie(state, action) {
      // add movie to movie
      state.movies.push(action.payload);
    },
    deleteMovie() {},
  },
});

///
const moviesReducer = moviesSlice.reducer;
const { addMovie, deleteMovie } = moviesSlice.actions;

export { addMovie, deleteMovie };
export default moviesReducer;
