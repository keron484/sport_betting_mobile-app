import { configureStore } from "@reduxjs/toolkit";
import betslipReducer from "../Slices/BetSlipslice";
import placebetReducer from "../Slices/Betslice";
import authReducer from "../Slices/Authslice";
const store = configureStore({
    reducer:{
        betslip:betslipReducer,
        placebet:placebetReducer,
        auth:authReducer
    }
})
export default store;