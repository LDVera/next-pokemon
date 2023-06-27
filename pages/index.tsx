import { NextPage, GetStaticProps } from "next";
import { Button, Card, Grid, Row, Text } from "@nextui-org/react";

import { pokeApi } from "@/api";
import { Layout } from "@/components/layouts";
import {PokemonCard} from "@/components/pokemon"
import { PokemonListResponse, SmallPokemon } from "@/interfaces";


interface Props {
  pokemons: SmallPokemon[]
}

const Home: NextPage<Props> = ({pokemons}) => {

  
  // console.log(pokemons[9].url.substring(34).replace('/', ''));
  // pokemons.
  

  return (
    <>
    <Layout title='Listado de Pokémons'>
      <Grid.Container gap={2} justify="flex-start">
        {
          pokemons.map(poke => (
            <PokemonCard Pokemon={poke} key={poke.id}/>
          )) 
        }
      </Grid.Container>
    </Layout>
    </>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  
  //* "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
  //* https://pokeapi.co/api/v2/pokemon/
  
  const pokemons: SmallPokemon[] = data.results.map( (poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }) )
  
  

  return {
    props: {
      pokemons: pokemons
    }
  }
}

export default Home