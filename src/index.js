import { render } from "react-dom";
import * as React from "react"

import { ChakraProvider } from "@chakra-ui/react"
import {SearchPage} from './components'

import './styles.css';

function App() {
  return (
    <ChakraProvider>
      <SearchPage />
    </ChakraProvider>
  )
}

render(<App />, document.getElementById("App"));
