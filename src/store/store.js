import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import forgotResetPasswordReducer from "./slice/forgotResetPasswordSlice";
import messagesReducer from "./slice/messagesSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    forgotPassword: forgotResetPasswordReducer,
    messages: messagesReducer,
  },
});
