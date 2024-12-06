import { createSlice } from "@reduxjs/toolkit";
import { usersApi } from "../api/users.api"
import { UserDto } from "../../models/users.model";

type UserState = {
    user?: UserDto;
}

const userInitialState: UserState = {
    user: undefined,
};

const userSlice = createSlice({
    name: "user",
    initialState: userInitialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addMatcher(usersApi.endpoints.register.matchFulfilled, (state, action) => {
                state.user = action.payload
            })
    }
});

export default userSlice;