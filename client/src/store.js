import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    reviews: reviewsReducer,
  },
});

export default store;