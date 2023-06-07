import React, { FC } from 'react';
import { SmallPokemon } from '../../interfaces';
import { Button, Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from 'next/router';
// import React from 'react';

interface Props {
  Pokemon: SmallPokemon
}

export const PokemonCard: FC<Props> = ({Pokemon}) => {


  const router = useRouter()
  const onCLickFn = () => {
    router.push(`/pokemon/${ Pokemon.id }`)
  }

  return (
    <>
      <Grid xs={6} sm={3} md={2} xl={1} key={Pokemon.id}>
        <Card 
          isHoverable 
          isPressable 
          key={Pokemon.id}
          onClick={onCLickFn}
        >
          <Card.Body css={{p: 1}}>
            <Card.Image 
              src={Pokemon.img} 
              width="100%"
              height={140}
            />
          </Card.Body>
          <Card.Footer>
            <Row justify="space-between" >
              <Text transform="capitalize" >{Pokemon.name}</Text>
              <Text>#{Pokemon.id}</Text>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
    </>
  )
}
