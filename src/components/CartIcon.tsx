import React from 'react'
import Link from 'next/link'
// import Image from 'next/Image';

const CartIcon = () => {
    return (
        <Link href="/cart">
            <div className='relative w-8 h-8 md:w-5 md:h-5'>
                {/* Image of cart */}
            </div>
            <span>Cart (3)</span>
        </Link>
    )
}

export default CartIcon