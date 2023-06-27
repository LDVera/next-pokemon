
const toggleFavorite = (Id: number) => {
  
  let favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]')
  
  if (favorites.includes(Id)) {
    favorites = favorites.filter( pokeId => pokeId !== Id)
  }else{
    favorites.push(Id)
  }

  
  localStorage.setItem('favorites', JSON.stringify(favorites));


}

const existsInFavorite = (id: number): boolean => {
  
  if (typeof window === 'undefined') return false 

  const favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]')
  return favorites.includes( id );
}

const pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]')
}

export default{
  existsInFavorite
  ,pokemons
  ,toggleFavorite
}