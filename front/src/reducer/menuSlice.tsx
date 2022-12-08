import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { allMenuType, MenuType } from '../interface/menuModel'
import axios from "axios"
import { RootState } from '../store'

const initialState: allMenuType = {
  listado: [],
}

const URL_API_MENU: string = 'http://ts.colet.es:51508/api/MenuType/GetMenuList/';
const ENTREPRISE_CODE: number = 52

export const getItemsApi = createAsyncThunk('menu/getItems',
  async (language:string) => {
    var json = await axios.get(`${URL_API_MENU}${language}/${ENTREPRISE_CODE}`)
        console.log(json.data,"info")
        const info = json.data
        return info
  }
)

export const MenuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
      builder.addCase(getItemsApi.fulfilled, (state, action:PayloadAction<MenuType[]>) => {
        state.listado = action.payload
      })
  }
})


export const selectors = {
  selectListado: (state: RootState) => state.menu.listado
}
