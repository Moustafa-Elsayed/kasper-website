import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";




export const fetchData= createAsyncThunk("counterSlice/fetchData",async()=>{
const res=await fetch("https://fakestoreapi.com/products")
const data=res.json()
return data
})



const initialState = {
  data: [],
};

export const counterSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    storeData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers:(builder)=>{
builder.addCase(fetchData.fulfilled,(state,action)=>{
  return action.payload
})
  }
});

export const { storeData } = counterSlice.actions;

export default counterSlice.reducer;
