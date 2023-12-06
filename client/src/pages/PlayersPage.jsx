import { useState } from 'react';
import Cards from './Cards';

import '../../style/Cards.css'
import $ from "jquery";

function PlayersPage() {
    const [teamPlayers, setTeamPlayers] = useState([]);

    var bingSettings = {};

    function setBingSettings(sentUrl) {
        var bingUrl = "https://bing-image-search1.p.rapidapi.com/images/search?q=" + sentUrl;
        bingSettings = {
            async: true,
            crossDomain: true,
            url: bingUrl,
            method: 'GET',
            headers: {
            'X-RapidAPI-Key': '23621a63e4msha9fc92986a51b9fp1bfe54jsn18d7163659ca',
            'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
            },
        };
    }
    var userSeason = 2023;

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
        let toSendUrl = "/players/?team=8&season=" + userSeason;
        setNBASettings(toSendUrl);

        return $.ajax(nbaSettings).done(function (response) {
            setTeamPlayers(response.response);
        });
    }

    function getPlayerImage(player) {
        let toSendUrl = 'professional+headshot+of+' + player.firstname + '+' + player.lastname + '+from+espn.com+bio';
        setBingSettings(toSendUrl);

        return $.ajax(bingSettings).done(function (response) {});
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