import { urlFor } from '../lib/client'
import Link from 'next/link'
import React from 'react'

export const HeroBanner = ({HeroBanner}) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>
          {HeroBanner.smallText}
        </p>
        <h3>
        {HeroBanner.midText}
        </h3>
        <h1> {HeroBanner.largeText1}</h1>
        <img src={urlFor(HeroBanner.image)} alt='headphones'
          className='hero-banner-image'
        >
        </img>
        <div>
          <Link href={`/product/${HeroBanner.product}`}>
            <button type='button' > {HeroBanner.buttonText}</button>

          </Link>
          <div className='desc'>
            <h5>Description</h5>
            <p>{HeroBanner.desc}</p>

          </div>

        </div>

      </div>
    </div>
  )
}

