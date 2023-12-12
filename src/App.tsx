/* eslint-disable react/no-children-prop */
import Cabecalho from './components/Cabecalho'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import FormVagas from './components/FormVagas'
import Hero from './components/Hero'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Vaga from './components/Vaga'
import ListaVagas from './containers/ListaVagas'

import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Cabecalho />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </>
  )
}

export default App
