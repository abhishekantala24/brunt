import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../redux/store"

import { defaultState } from "./types"

const INITIAL_STATE: defaultState = {
    sessionModal: false,
    wipModal: false,
    sidebarState: false
}

const stateSlice = createSlice({
    name: "state",
    initialState: INITIAL_STATE,
    reducers: {
        sessionModal: (state: defaultState, { payload }: PayloadAction<defaultState>) => ({
            ...state,
            sessionModal: payload.sessionModal,
        }),
        sidebarOpen: (state: defaultState, { payload }: PayloadAction<defaultState>) => ({
            ...state,
            sidebarState: payload.sidebarState,
        }),
        wipModal: (state: defaultState, { payload }: PayloadAction<defaultState>) => ({
            ...state,
            wipModal: payload.wipModal,
        }),
    },
})

export const { sessionModal, sidebarOpen, wipModal } = stateSlice.actions

export const stateSelector = (state: RootState) => state?.State

export default stateSlice.reducer