import { createSlice } from "@reduxjs/toolkit";
import Kitchen from "../assets/Kitchen.png";
import royal from "../assets/royal.png";
import mutton from "../assets/mutton.png";
import garam from "../assets/garam.png";
import sabji from "../assets/sabji.png";
import mix from "../assets/chicken.png";


const initialState = {
  products: [
    { id: 1, img: Kitchen, name: "Kitchen King Masala", price: 199 },
    { id: 2, img: royal, name: "Royal Garam Masala", price: 249 },
    { id: 3, img: mutton, name: "Mutton Masala", price: 299 },
    { id: 4, img: garam, name: "Garam Masala", price: 149 },
    { id: 5, img: sabji, name: "Sabji Masala", price: 99 },
    { id: 6, img: mix, name: "Chicken Masala", price: 179 },
  ],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
