import React, { useEffect } from 'react'
import ProductService from 'features/category/CategoryService'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'app/store'
import { denormalize } from 'normalizr'

export default () => {
    const dispatch = useDispatch()
    const categories = useSelector((state: RootState) => state.categories)
    useEffect(() => {
        async function effect() {
            await dispatch(ProductService.redux.findAll())
            // const products = await ProductService.api.findAll()
            // console.log(products)
        }
        effect()
    }, [])
    const doClick = () => {
        console.log("damn you clicked me")
    }

    return (
        <div>
            {/* Hello Product: {categories.result} */}
            {/* {categories.map(category => (
                <div>category : {category.name}</div>
            ))} */}
            <div><button onClick={doClick}>Click me</button></div>
        </div>
    )
}