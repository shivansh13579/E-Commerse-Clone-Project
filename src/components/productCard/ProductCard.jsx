import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'

function ProductCard() {
    const context = useContext(myContext)
    const { mode,product} = context
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 md:py-16 mx-auto">
                <div class="lg:w-1/2 w-full mb-6 lg:mb-10">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Our Latest Collection</h1>
                    <div class="h-1 w-20 bg-pink-600 rounded"></div>
                </div>

                <div className="flex flex-wrap -m-4">
                   {}
                </div>
            </div>
        </section >

    )
}

export default ProductCard