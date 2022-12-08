import { configureStore, Action } from '@reduxjs/toolkit'
import { MenuAllergenicSlice } from '../reducer/menuAllergenic';
import { MenuSlice } from '../reducer/menuSlice';
import { ThunkAction } from 'redux-thunk'

const store = configureStore({
  reducer: {
    menu : MenuSlice.reducer,
    menuAllergenic : MenuAllergenicSlice.reducer
  }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, unknown, Action>

export default store;