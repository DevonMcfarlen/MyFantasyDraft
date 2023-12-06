import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// import Cards from './pages/Cards'
import NavBar from './components/NavBar'

// Import Bootstrap 
import "bootstrap/dist/css/bootstrap.min.css"

const client = new ApolloClient({
  link: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  const [count, setCount] = useState(0)

  return (
   <ApolloProvider client={client}>
      <NavBar />
      <Outlet/>
    </ApolloProvider>
  )
}

export default App
