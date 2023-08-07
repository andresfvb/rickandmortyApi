import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
        <div className='contenedor'>
            <Link href="/">
                <Image src="/img/rickandmorty.png" width={300} height={200} alt="Logo Rick adn Morty" />
            </Link>
        </div>
    </header>
  )
}

export default Header