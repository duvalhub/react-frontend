import { CaseReducerActions, SliceCaseReducers } from '@reduxjs/toolkit'
import { AppThunk } from 'app/store'
import HttpConnection from 'libs/HttpConnection'
import { normalize, NormalizedSchema, schema } from 'normalizr'
import GenericModel from './GenericModel'
//
// Shouldt be here
type Actions<T> = {
    setAll: Action,
    setOne: Action
}
export type NormalizedData = NormalizedSchema<any, any>
export type Reducers = SliceCaseReducers<NormalizedSchema<any, any>>
export type Action = CaseReducerActions<SliceCaseReducers<NormalizedSchema<any, any>>>
export const initialState = (): NormalizedData => {
    return {
        result: null,
        entities: null
    }
}
//

type genericServiceParam<T> = {
    endpoint: string,
    schema: schema.Entity<T>,
    actions: Actions<T>
}

type api = {
    findAll(): Promise<NormalizedData>,
    findById(): void
}

type redux = {
    findAll(): AppThunk,
    findById(): void
}

export default <T extends GenericModel>(param: genericServiceParam<T>) => {
    const api = ((): api => {
        return {
            findAll: async () => {
                const data = await HttpConnection.get({ url: param.endpoint })
                const normalizedData = normalize(data, param.schema);
                return normalizedData
            },
            findById: () => { }
        }
    })()

    const redux = ((): redux => {
        return {
            findAll: () => async dispatch => {
                const response = await api.findAll()
                dispatch(param.actions.setAll(response))
                return response
            },
            findById: () => { }
        }
    })()

    return {
        redux,
        api
    }
}