import React, {useState} from "react"
import { Product } from "../Components/Product"
import { ProductsData } from "../Dummy/ProductsData"

export const ProductFeed = () => {
const [feed, setFeed] = useState([1,2,3,4,5,6,7,8])

    return (
        <>
        <div className="w-full gap-16 py-16 px-6 h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {ProductsData.map(({name, price, image}) => {
                return (
                    <Product name={name} price={price} image={image} />
                )
            })}
        </div>
        </>
    )
}