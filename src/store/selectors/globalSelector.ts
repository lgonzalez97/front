import { createSelector } from "reselect";
import { globalReducerName } from "../reducers/global.reducer";

const globalStore = (state:any) => state[globalReducerName]
export const albumsSelector = createSelector(globalStore,(data) =>{return data.albums})
export const loginSelector = createSelector(globalStore, (data) =>{return data.login})