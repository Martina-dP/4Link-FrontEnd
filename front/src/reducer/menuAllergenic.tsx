import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { allMenuAllergenic, AllergenicModel } from '../interface/allergenicModel'
import axios from "axios"
import { RootState } from '../store/index'

const initialState: allMenuAllergenic = {
  listado: [],
}

const URL_API_MENU: string = 'http://ts.colet.es:51508/api/Allergenic/GetAllergenic/';
const ENTREPRISE_CODE: number = 52

export const getAllergenicApi = createAsyncThunk('allergenic/getItems',
  async (productId :number) => {
    var json = await axios.get(`${URL_API_MENU}${productId }/${ENTREPRISE_CODE}`)
        console.log(json.data,"info")
        const info = json.data
        return info
  }
)

export const MenuAllergenicSlice = createSlice({
  name: 'menuAllergenic',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllergenicApi.fulfilled, (state, action:PayloadAction<AllergenicModel[]>) => {
      state.listado = action.payload
    })
}
})

export const {  } = MenuAllergenicSlice.actions

export const aSelectors = {
  allergenicsListado: (state: RootState) => state.menuAllergenic.listado
}