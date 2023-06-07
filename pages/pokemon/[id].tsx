import React from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next';

import { Button, Card, Grid, Row, Text } from "@nextui-org/react";
import { Layout } from '../../components/layouts/Layout';
import { useRouter } from 'next/router';
import pokeApi from '../../api/pokeApi';
import { Pokemon } from '../../interfaces/pokemon-full';

interface Props {
  pokemon: any
}

const PokemonPage: NextPage<Props> = ( {pokemon} ) => {

  

  return (
    <Layout title='some pokemon'>
      
      <Grid.Container 
        css={{
          marginTop: '5px'
        }}
        gap={2}
      >
        <Grid
          xs={6} sm={3} md={2} xl={1}
        >

        </Grid>
      </Grid.Container>

    </Layout>
  )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  
  const pokemons151 = [...Array(151)].map( (value, index) => `${index + 1}`)

  return {
    paths: pokemons151.map( id => ({
      params: { id }
    })),
    fallback: false
  }
}

//* NOTA: se desestructura params del ctx (context)
export const getStaticProps: GetStaticProps = async ({params}) => {
  
  const {
    id
  } = params as {
    id: string
  }
  
  const {data} = await pokeApi.get<Pokemon>(`/pokemon/${id}`)
  
  return {
    props: {
      pokemon: data
    }
  }
}

export default PokemonPage