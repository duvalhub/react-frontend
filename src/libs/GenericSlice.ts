import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import GenericModel from "./GenericModel"
import { NormalizedData, Reducers } from "./GenericService"

type Actions<T> = {
    setAll(ts: T[]): any,
    setOne(): any
}
type param<T> = {
    name: string,
    initialState: NormalizedData
}

export default <T extends GenericModel>({ name, initialState }: param<T>) => {
    const reducers = ((): Reducers => {
        return {
            setAll: (state: any, action: PayloadAction<T[]>): NormalizedData => {
                return initialState
            },
            setOne: (state: any, action: PayloadAction<T>) => {
                state.one = action.payload
            },
        }
    })()

    const slice = createSlice(
        {
            name,
            initialState,
            reducers
        }
    )
    return slice
}