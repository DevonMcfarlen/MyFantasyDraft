import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// Import Components 
// import Cards from './pages/Cards'
import Profile from './pages/Profile';

import Cards from './pages/Cards'
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
        <Profile/>
      <NavBar />
      <Cards/>
    </ApolloProvider>
  )
}

//TODO

export default App
