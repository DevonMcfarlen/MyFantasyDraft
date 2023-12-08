import React from 'react';
import '../../style/Profile.css'
import { FaRegTrashAlt } from "react-icons/fa";
import NavBar from '../components/NavBar';
import { useQuery, gql } from '@apollo/client'
const GET_PLAYERS = gql`
query User($username: String!) {
    user(username: $username) {
      players {
        _id
        name
        jersey
        stats
      }
    }
  }
`
const Profile = () =>{ 
    // const {loading, error, data} = useQuery(GET_PLAYERS, username:'user_id')
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error.message}</p>;

    // const players = data.players
    // console.log(JSON.stringify(players,null,2))

    return(
        <div className='profile-background' style={{minHeight :'100vh', background:'linear-gradient(to bottom right, #0a0f0d, #003973'}}>
        <NavBar/>
        <h1 className='profile-header'>Saved Players</h1>
        <table className="table">
            <thead>
            <tr>
                <th scope="col" className='bg-transparent' style={{color:'white', fontFamily:'Montserrat'}}>Jersey #</th>
                <th scope="col" className='bg-transparent' style={{color:'white', fontFamily:'Montserrat' }}>First</th>
                <th scope="col" className='bg-transparent' style={{color:'white', fontFamily:'Montserrat' }}>Last</th>
                <th scope="col" className='bg-transparent' style={{color:'white', fontFamily:'Montserrat' }}>Avg Points</th>
                <th scope="col" className='bg-transparent' style={{color:'white', fontFamily:'Montserrat' }}>Avg Assists</th>
                <th scope="col" className='bg-transparent' style={{color:'white', fontFamily:'Montserrat' }}>Avg Total Rebounds</th>
                <th scope="col" className='bg-transparent' style={{color:'white', fontFamily:'Montserrat' }}>Avg FGP</th>
                <th scope='col' className='bg-transparent' style={{color:'white', fontFamily:'Montserrat'}}>Remove</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row" className='bg-transparent jerseyNum' style={{color:'white',fontFamily:'Montserrat' }}>1</th>
                <td className='bg-transparent firstName' style={{color:'white',fontFamily:'Montserrat'}}>Mark</td>
                <td className='bg-transparent lastName' style={{color:'white', fontFamily:'Montserrat'}}>Otto</td>
                <td className='bg-transparent points' style={{color:'white',fontFamily:'Montserrat'}}>0</td>
                <td className='bg-transparent assists' style={{color:'white', fontFamily:'Montserrat'}}>0</td>
                <td className='bg-transparent rebounds' style={{color:'white',fontFamily:'Montserrat'}}>0</td>
                <td className='bg-transparent FGP' style={{color:'white', fontFamily:'Montserrat'}}>0</td>
                <td className='bg-transparent'><button className='trashBtn' style={{color:'white'}} ><FaRegTrashAlt/></button></td>
            </tr>
            </tbody> 
        </table>
        </div>
    )
}
export default Profile 
