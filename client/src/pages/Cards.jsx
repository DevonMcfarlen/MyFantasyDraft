import { useState } from 'react';
import $ from "jquery";

function Cards(props) {
    var playerStats = {
        aPoints: 0,
        aAssists: 0,
        aTotReb: 0,
        aFGP: 0.0,
    };

    var playerStorage = [];

    function getPlayerStats(userPlayer) {
        if(playerStorage.find(obj => {return obj.id == teamPlayers[userPlayer].id}))
        {
            console.log("found duplicate player");
            return;
        }

        let toSendUrl = "/players/statistics?id=" + props.teamPlayers[userPlayer].id + "&season=2023";
        props.setNBASettings(toSendUrl);
        
        return $.ajax(props.nbaSettings).done(function (response) {
            var playerGames = response.response;
            console.log(playerGames);
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
            
            playerStorage.unshift({id: response.parameters.id, stats: playerStats});
            console.log(playerStorage)
        });
    }
    function setStats(index){
        //playerStats = playerStorage.find(obj => {return obj.id == props.teamPlayers[index].id}).stats;
    }

    return props.teamPlayers.map((player, i) => (
        <label key={i}>
            {console.log(i)}
            {console.log(player)}

            <input type="checkbox"/>
            <div className="flip-card" onClick={() => {getPlayerStats(i)}}>
                <div className="front">
                    <h2>{player.firstname} {player.lastname}</h2>
                    <p>Jersey # {player.leagues.standard.jersey}</p>
                </div>
                <div className="back">
                    
                    <p>Avg points: </p>
                    <p>Avg assists: </p>
                    <p>Avg Total Rebounds: </p>
                    <p>Avg FGP: </p>
                    <button className='backBtn'>Add Player</button>
                </div>
            </div>
        </label>
    ));
}
  
export default Cards;
  