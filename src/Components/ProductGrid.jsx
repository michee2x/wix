import React from "react"
import { useState } from "react"
import { ProdctsData2 } from "../Dummy/ProductsData"
import { Link } from "react-router-dom"

export const ProductGrid = ({section}) => {
    const [product, setProduct] = useState([
        {
            img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&q=75&fit=crop&w=600", name:"Timely Watch", before:"$30.00", price:"$15.00"
        }
    ])
    return (
        <>
        
        <div className="bg-white py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div className="mb-6 flex items-end justify-between gap-4">
      <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">{section}</h2>

      <a href="#" className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">Show more</a>
    </div>

    <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
      {ProdctsData2.map(e => {
        return (
            <>
            {/* <!-- product - start --> */}
      {e.beforePrice && <Link to={"/product/sahfpioah"}>
        <p className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
          <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Rachit Tank" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

          <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">sale</span>
        </p>

        <div>
          <p className="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg">Timely Watch</p>

          <div className="flex items-end gap-2">
            <span className="font-bold text-gray-800 lg:text-lg">$15.00</span>
            <span className="mb-0.5 text-red-500 line-through">$30.00</span>
          </div>
        </div>
      </Link>}
      {/* <!-- product - end --> */}

      {/* <!-- product - start --> */}
      {!e.beforePrice && <Link to={"/product/afoiad"}>
        <p className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
          <img src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Galina N" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
        </p>

        <div>
          <p className="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg">Fancy Plant</p>

          <div className="flex items-end gap-2">
            <span className="font-bold text-gray-800 lg:text-lg">$9.00</span>
          </div>
        </div>
      </Link>}
      {/* <!-- product - end --> */}

            </>
        )
      })}
    </div>
  </div>
</div>
        </>
    )
}