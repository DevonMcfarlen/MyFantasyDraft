import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Import Components 
import Cards from './pages/Cards'
// Import Bootstrap 
import "bootstrap/dist/css/bootstrap.min.css"

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [count, setCount] = useState(0)

  return (
   <ApolloProvider client={client}>
      <Cards/>
    </ApolloProvider>
  )
}

export default App
