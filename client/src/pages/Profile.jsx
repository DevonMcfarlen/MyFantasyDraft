import React, {useEffect} from 'react';
import '../../style/Profile.css'
import { FaRegTrashAlt } from "react-icons/fa";
import NavBar from '../components/NavBar';
import { useQuery, gql } from '@apollo/client'
import { useMutation } from '@apollo/client';
import { REMOVE_PLAYER } from '../utils/mutations';
import { GET_PLAYERS } from '../utils/queries'
// import { useState } from 'react';

const Profile = () =>{ 
  // const [players, setPlayers] = useState([]);

  const { loading, error, data, refetch } = useQuery(GET_PLAYERS, {
    variables: { username: localStorage.getItem('username') },
  });
  useEffect(() => {
    refetch();
    localStorage.removeItem('playerChange')
  }, [localStorage.getItem('playerChange')]);
  

  const [removePlayer] = useMutation(REMOVE_PLAYER);

  const handleRemovePlayer = async (removePlayerId) => {
    console.log(removePlayerId)
    console.log(localStorage.getItem('username'))
    try {
      const { data } = await removePlayer({
        variables: { username: localStorage.getItem('username'), removePlayerId },
      });
      console.log(data);
      localStorage.setItem('playerChange', true);
    } catch (err) {
      console.error(err);
    }
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>;

  // setPlayers(data.user.players)
  console.log('this is the data object');
  console.log(data.user.players);

    return(
        <div className='profile-background' style={{minHeight :'100vh', background:'linear-gradient(to bottom right, #0a0f0d, #003973'}}>
        <NavBar/>
        <h1 className='profile-header'>Saved Players</h1>
        <table className="table">
            <thead>
            <tr>
                <th scope="col" className='bg-transparent' style={{color:'white', fontFamily:'Montserrat'}}>Jersey #</th>
                <th scope="col" className='bg-transparent' style={{color:'white', fontFamily:'Montserrat' }}>Name</th>
                <th scope="col" className='bg-transparent' style={{color:'white', fontFamily:'Montserrat' }}>Player Stats</th>
                <th scope='col' className='bg-transparent' style={{color:'white', fontFamily:'Montserrat'}}>Remove</th>
            </tr>
            </thead>
            <tbody>
              {!data.user.players.length ? ('') : (data.user.players.map((player) => (
                 <tr key={player._id}>
                 <th scope="row" className='bg-transparent jerseyNum' style={{color:'white',fontFamily:'Montserrat' }}>{player.jersey}</th>
                 <td className='bg-transparent name'style={{color:'white',fontFamily:'Montserrat'}}>{player.playerName}</td>
                 <td className='bg-transparent stats'style={{color:'white',fontFamily:'Montserrat'}}>{player.stats}</td>
                 <td className='bg-transparent'>
                   <button className='trashBtn' style={{ color: 'white' }} onClick={() => handleRemovePlayer(player._id)}>
                     <FaRegTrashAlt />
                   </button>
                 </td>
               </tr>
             )))}
           </tbody>
         </table>
       </div>
     )
   }
export default Profile 
