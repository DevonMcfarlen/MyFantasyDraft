import { useState } from 'react';
import Cards from './Cards';

import '../../style/Cards.css'
import $ from "jquery";

function PlayersPage() {
    const [teamPlayers, setTeamPlayers] = useState([]);

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

    function getTeam() {
        let toSendUrl = "/players/?team=8&season=2023";
        setNBASettings(toSendUrl);

        return $.ajax(nbaSettings).done(function (response) {
            setTeamPlayers(response.response);
        });
    }
    
    return teamPlayers.length == 0 ? (
        <>
            <header>
                <h1>Dallas Maverick's Player Statistics</h1>
            </header>
            <button
                type="button"
                onClick={() => {
                    getTeam();
                }}
                >
                Search
            </button>
        </>
    ) : (
        <>
            <header>
                <h1>Dallas Maverick's Player Statistics</h1>
            </header>
            <button
                type="button"
                onClick={() => {
                    getTeam();
                }}
                >
                Search
            </button>
            <Cards 
                teamPlayers={teamPlayers}
            />
        </>
    );
};

export default PlayersPage 