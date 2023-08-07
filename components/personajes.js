import React from 'react'
import Image from 'next/image'

const Personajes = ({personaje}) => {
    const {name, image} = personaje
  return (
    <article>
        <figure>
            <Image src={image} width={300} height={200} alt="Logo Rick adn Morty" />
        </figure>
        <p>{name}</p>
    </article>
  )
}

export default Personajes