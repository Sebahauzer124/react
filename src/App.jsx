
import React from 'react'

import { ChakraProvider } from '@chakra-ui/react'
import { NavBar,ItemListContainer } from './components'


function App() {
 

  return (
    <ChakraProvider>
      <NavBar />
      <ItemListContainer greeting={'Bienvenidos a la tienda'} />
    </ChakraProvider>
  )
}

export default App
