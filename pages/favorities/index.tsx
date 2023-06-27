
import { Container, Text, Image, Grid, Card } from '@nextui-org/react'
import { Layout } from '@/components/layouts'
import React, { useEffect, useState } from 'react'
import NoFavorites from '@/components/ui/NoFavorites'
import FavoritesPokemon from '@/components/pokemon/FavoritesPokemon'
import { localFavorites } from '@/utils'


import { Pokemon } from '../../interfaces/pokemon-full';

const FavoritesPage = () => {

  const [favoritePokemons, setfavoritePokemons] = useState<number[]>([])


  useEffect(() => {
    setfavoritePokemons(localFavorites.pokemons)
  }, [])
  

  return (
    <>
      <Layout title='Pokemon - favoritos'>
        <>
          {
            favoritePokemons.length === 0 
            ? <NoFavorites/> 
            : <FavoritesPokemon pokemons={favoritePokemons}/>
          }
          
        </>
      </Layout>
    </>
  )
}

export default FavoritesPage