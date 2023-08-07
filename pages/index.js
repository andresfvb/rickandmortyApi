import React from 'react'
import Layouts from '../components/layouts'
import Personajes from '../components/personajes'


const index = ({personajes}) => {
    //const personajesArray = Object.values(personajes)
    let personajesResult = []
    Object.entries(personajes).forEach(([key, value]) => {
        if(key !== 'info'){
            personajesResult = [...value]
        }
    })
  return (
    <>
      <Layouts
        title={'Inicio'}
        description={'Pagina de personajes de Rick and Morty'}
      >
        <main>
            <h2 className='heading'>Personajes</h2>
            <div>
                {personajesResult.map(personaje => (
                        <Personajes
                            personaje = {personaje}
                        />
                ))}
            </div>
        </main>
      </Layouts>
    </>
  )
}
export async function getStaticProps(){
    const url = 'https://rickandmortyapi.com/api/character'
    const respuesta = await fetch(url)
    const personajes = await respuesta.json()
    return {
        props: {
            personajes
        }
    }
}
export default index