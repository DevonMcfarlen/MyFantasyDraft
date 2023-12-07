import { useState } from 'react';
import $ from "jquery";
import NavBar from '../components/NavBar';

function Cards(props) {
    const [playerStorage, setPlayerStorage] = useState([]);

    var nbaSettings = {};

    function setNBASettings(sentUrl) {
        var nbaUrl = "https://api-nba-v1.p.rapidapi.com" + sentUrl;
        nbaSettings = {
            "url": nbaUrl,
            "method": "GET",
            "timeout": 0,
            "headers": {
            "x-rapidapi-key": "09e77c0237msh7cf79c6d0985d69p119f9cjsnb5866ab39fe8",
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
            console.log("found duplicate player");
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
            playerStats.aFGP = Math.round((((tTotReb/pGLength)) + Number.EPSILON) * 100) / 100;
            
            setPlayerStorage([{id: response.parameters.id, stats: playerStats}, ...playerStorage]);
        });
    }

    return props.teamPlayers.map((player, i) => (
        <>
        <NavBar/>
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
                    <button className='backBtn'>Add Player</button>
                </div>
            </div>
        </label>
        </>
    ));
}
  
export default Cards;