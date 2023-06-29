import { FC, Children, ReactNode } from 'react';
import { Navbar } from "../ui/index";
import Head from "next/head"

interface Props {
  children : ReactNode,
  title?   :  string,
  pokemon? :  string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout : FC<Props>  = ( {children, title, pokemon} ) => {

  return (
    <>
    
      <Head>
        <title>{title}</title>
        <meta name="author" content="Diego" />
        <meta name="description" content={`Información sobre el Pokémon ${pokemon}`} />
        <meta name="ketwords" content={`${title},, pokemon, pokedex`} />

        <meta property="og:title" content={`inf Pokemon ${title}`}/>
        <meta property="og:description" content={`pokemon ${title}`} />
        <meta property="og:image" content={`${ origin }/img/banner.png`} />
      </Head>

      <Navbar/>

      <main
        // style={{
        //   padding: '0px 20px'
        // }}
      >
        {children}
      </main>

    </>
  )
}
