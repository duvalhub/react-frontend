import GenericModel from 'libs/GenericModel'
import GenericService, { initialState } from 'libs/GenericService'
import GenericSlice from 'libs/GenericSlice'
import { schema as Schema } from 'normalizr'

type Category = {
    name: string
} & GenericModel

const name = "categories";

const Slice = GenericSlice<Category>({
    name,
    initialState: initialState()
})

export const schema = new Schema.Entity<Category>(name)
export const reducer = Slice.reducer
export default GenericService<Category>({ endpoint: "/api/v1/categories", schema, actions: Slice.actions })