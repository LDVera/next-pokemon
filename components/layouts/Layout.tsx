import { FC, Children, ReactNode } from 'react';
import { Navbar } from "../ui/index";
import Head from "next/head"

interface Props {
  children : ReactNode,
  title?   :  string,
  pokemon? :  string
}

export const Layout : FC<Props>  = ( {children, title, pokemon} ) => {
  return (
    <>
    
      <Head>
        <title>{title}</title>
        <meta name="author" content="Diego" />
        <meta name="description" content={`Información sobre el Pokémon ${pokemon}`} />
        <meta name="ketwords" content="XXXX, pokemon, pokedex" />
      </Head>

      <Navbar/>

      <main
        style={{
          padding: '0px 20px'
        }}
      >
        {children}
      </main>

    </>
  )
}
