import { Card, Grid, Text } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

interface Props {
  pokemonId: number
}

const FavoriteCardPokemon:FC<Props> = ({pokemonId}) => {

  const router = useRouter()
  const onFavoriteClicked = () => {
    router.push(`/pokemon/${ pokemonId }`)
  }

  return (
    <Grid xs={6} sm={3} md={2} xl={1} key={pokemonId} onClick={onFavoriteClicked}>
      <Card isHoverable css={{padding: 10}}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          width={'100%'}
          height={140}
        />
        <Text>

        </Text>
      </Card>
    </Grid>

  )
}

export default FavoriteCardPokemon