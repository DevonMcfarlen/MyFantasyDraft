import { useState } from 'react';
import $ from "jquery";
import { useMutation } from '@apollo/client';
import { ADD_PLAYER } from '../utils/mutations';

function Cards(props) {
    const [playerStorage, setPlayerStorage] = useState([]);
    const [imageStorage, setImageStorage] = useState([]);
    const [addPlayer] = useMutation(ADD_PLAYER);
    var nbaSettings = {};

    function setNBASettings(sentUrl) {
        var nbaUrl = "https://api-nba-v1.p.rapidapi.com" + sentUrl;
        nbaSettings = {
            "url": nbaUrl,
            "method": "GET",
            "timeout": 0,
            "headers": {
            "x-rapidapi-key": '09e77c0237msh7cf79c6d0985d69p119f9cjsnb5866ab39fe8',
            "x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
            },
        };
    }

    var playerStats = {
        aPoints: 0,
        aAssists: 0,
        aTotReb: 0,
        aFGP: 0.0,
    };

    function getPlayerStats(userPlayer) {
        if(playerStorage.find(obj => {return obj.id == props.teamPlayers[userPlayer].id}))
        {
            return;
        }

        let toSendUrl = "/players/statistics?id=" + props.teamPlayers[userPlayer].id + "&season=2023";
        setNBASettings(toSendUrl);
        
        return $.ajax(nbaSettings).done(function (response) {
            var playerGames = response.response;
            var pGLength = playerGames.length;
            var tPoints = 0;
            var tAssists = 0;
            var tTotReb = 0;
            var tFGP = 0.0;

            for(var i = 0; i < pGLength; i++) {
                tPoints += playerGames[i].points;
                tAssists += playerGames[i].assists;
                tTotReb += playerGames[i].totReb
                tFGP += parseFloat(playerGames[i].fgp);
            }
            
            playerStats.aPoints = Math.round((((tPoints/pGLength)) + Number.EPSILON) * 100) / 100;
            playerStats.aAssists = Math.round((((tAssists/pGLength)) + Number.EPSILON) * 100) / 100;
            playerStats.aTotReb = Math.round((((tTotReb/pGLength)) + Number.EPSILON) * 100) / 100;
            playerStats.aFGP = Math.round((((tFGP/pGLength)) + Number.EPSILON) * 100) / 100;
            
            setPlayerStorage([{id: response.parameters.id, stats: playerStats}, ...playerStorage]);
        });
    }

    var bingSettings = {};

    function setBingSettings(sentUrl) {
        var bingUrl = "https://bing-image-search1.p.rapidapi.com/images/search?q=" + sentUrl;
        bingSettings = {
            async: true,
            crossDomain: true,
            url: bingUrl,
            method: 'GET',
            headers: {
            'X-RapidAPI-Key': '09e77c0237msh7cf79c6d0985d69p119f9cjsnb5866ab39fe8',
            'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
            },
        };
    }

    function getPlayerImage(player) {
        let toSendUrl = 'professional+headshot+of+' + player.firstname + '+' + player.lastname + '+from+espn.com+bio';
        setBingSettings(toSendUrl);

        return $.ajax(bingSettings).done(function (response) {
            setImageStorage([{id: player.id, src: response.value[0].contentUrl}, ...imageStorage]);
        });
    }
    //{setTimeout(() => {getPlayerImage(player)}, 400*i)}
    // <img src={!imageStorage.find(obj => {return obj.id == props.teamPlayers[i].id}) ? ('') : (imageStorage.find(obj => {return obj.id == props.teamPlayers[i].id}).src)}/>

    const savePlayer = async (player, i) => {
        try {
            const {data} = await addPlayer({
                variables: {
                    username: localStorage.getItem('username'),
                    playerName: `${player.firstname} ${player.lastname}`,
                    jersey: `${player.leagues.standard.jersey}`,
                    stats: `points: ${playerStorage.find(obj => {return obj.id == props.teamPlayers[i].id}).stats.aPoints} \n assists: ${playerStorage.find(obj => {return obj.id == props.teamPlayers[i].id}).stats.aAssists} \n totReb: ${playerStorage.find(obj => {return obj.id == props.teamPlayers[i].id}).stats.aTotReb} \n fgp: ${playerStorage.find(obj => {return obj.id == props.teamPlayers[i].id}).stats.aFGP}`
                }
            });
            localStorage.setItem('playerChange', true);
        } catch(error) {
            console.error('Error adding player', error);
            console.error('GraphQL errors:', error.graphQLErrors);
            console.error('Network error:', error.networkError);
        };
    }   
            

    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap'}}>
            {props.teamPlayers.map((player, i) =>
                <label key={i}>
                    <input type="checkbox"/>
                    <div className="flip-card" onClick={() => {getPlayerStats(i)}}>
                        <div className="front">
                            <h2>{player.firstname} {player.lastname}</h2>
                            <p>Jersey # {player.leagues.standard.jersey}</p>
                        </div>
                        <div className="back">
                            <p>Avg points: { !playerStorage.find(obj => {return obj.id == props.teamPlayers[i].id}) ? ('') : (playerStorage.find(obj => {return obj.id == props.teamPlayers[i].id}).stats.aPoints) }</p>
                            <p>Avg assists: { !playerStorage.find(obj => {return obj.id == props.teamPlayers[i].id}) ? ('') : (playerStorage.find(obj => {return obj.id == props.teamPlayers[i].id}).stats.aAssists)}</p>
                            <p>Avg Total Rebounds: { !playerStorage.find(obj => {return obj.id == props.teamPlayers[i].id}) ? ('') : (playerStorage.find(obj => {return obj.id == props.teamPlayers[i].id}).stats.aTotReb)}</p>
                            <p>Avg FGP: { !playerStorage.find(obj => {return obj.id == props.teamPlayers[i].id}) ? ('') : (playerStorage.find(obj => {return obj.id == props.teamPlayers[i].id}).stats.aFGP)}</p>
                            <button className='backBtn btn btn-primary' onClick={() => {savePlayer(player, i)}}>Add Player</button>
                        </div>
                    </div>
                </label>
            )}
        </div>
    );
}
  
export default Cards;