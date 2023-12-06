import React, { useState } from 'react';
import Cards from './Cards';
import '../../style/Cards.css';
import $ from "jquery";

function PlayersPage() {
    const [teamPlayers, setTeamPlayers] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState("");
    const [teams, setTeams] = useState([
        { id: 1, name: 'Atlanta Hawks'},
        { id: 2, name: 'Boston Celtics'},
        { id: 3, name: 'Brisbane Bullets'},
        { id: 4, name: 'Brooklyn Nets'},
        { id: 5, name: 'Charlotte Hornets'},
        { id: 6, name: 'Chicago Bulls'},
        { id: 7, name: 'Cleveland Cavaliers'},
        { id: 8, name: 'Dallas Mavericks'},
        { id: 9, name: 'Denver Nuggets'},
        { id: 10, name: 'Detroit Pistons'},
        { id: 11, name: 'Golden State Warriors'},
        { id: 12, name: 'Guangzhou Long-Lions'},
        { id: 13, name: 'Haifa Maccabi Haifa'},
        { id: 14, name: 'Houston Rockets'},
        { id: 15, name: 'Indiana Pacers'},
        { id: 16, name: 'LA Clippers'},
        { id: 17, name: 'Los Angeles Lakers'},
        { id: 18, name: 'Melbourne United'},
        { id: 19, name: 'Memphis Grizzlies'},
        { id: 20, name: 'Miami Heat'},
        { id: 21, name: 'Milwaukee Bucks'},
        { id: 22, name: 'Minnesota Timberwolves'},
        { id: 23, name: 'New Orleans Pelicans'},
        { id: 24, name: 'New York Knicks'},
        { id: 25, name: 'Oklahoma City Thunder'},
        { id: 26, name: 'Orlando Magic'},
        { id: 27, name: 'Philadelphia 76ers'},
        { id: 28, name: 'Phoenix Suns'},
        { id: 29, name: 'Portland Trail Blazers'},
        { id: 30, name: 'Sacramento Kings'},
        { id: 31, name: 'San Antonio Spurs'},
        { id: 32, name: 'Shanghai Sharks'},
        { id: 33, name: 'Sydney Kings'},
        { id: 34, name: 'Team Team Durant'},
        { id: 35, name: 'Team LeBron'},
        { id: 36, name: 'Away Team Wilbon'},
        { id: 37, name: 'Home Team Stephen A'},
        { id: 38, name: 'Toronto Raptors'},
    ])
    const bingSettings = {
        async: true,
        crossDomain: true,
        url: "https://bing-image-search1.p.rapidapi.com/images/search?q=",
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '23621a63e4msha9fc92986a51b9fp1bfe54jsn18d7163659ca',
            'X-RapidAPI-Host': 'bing-image-search1.p.rapidapi.com'
        },
    };

    const nbaSettings = {
        url: "https://api-nba-v1.p.rapidapi.com",
        method: "GET",
        timeout: 0,
        headers: {
            "x-rapidapi-key": "09e77c0237msh7cf79c6d0985d69p119f9cjsnb5866ab39fe8",
            "x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
        },
    };

    const userSeason = 2023;

    const setBingSettings = (sentUrl) => {
        bingSettings.url = "https://bing-image-search1.p.rapidapi.com/images/search?q=" + sentUrl;
    };

    const setNBASettings = (sentUrl) => {
        nbaSettings.url = "https://api-nba-v1.p.rapidapi.com" + sentUrl;
    };

    const getTeam = () => {
        const toSendUrl = "/players/?team=" + selectedTeam + "&season=" + userSeason;
        setNBASettings(toSendUrl);

        $.ajax(nbaSettings).done(function (response) {
            setTeamPlayers(response.response);
        });
    };

    const getPlayerImage = (player) => {
        const toSendUrl = 'professional+headshot+of+' + player.firstname + '+' + player.lastname + '+from+espn.com+bio';
        setBingSettings(toSendUrl);

        $.ajax(bingSettings).done(function (response) {});
    };


    return (
        <>
            <header>
                <h1>{selectedTeam ? `${selectedTeam}'s Player Statistics` : 'NBA Player Statistics'}</h1>
            </header>
            <div>
                <select value={selectedTeam} onChange={(e) => setSelectedTeam(e.target.value)}>
                    <option value="">Select a team</option>
                    {teams.map((team) => (
                        <option key={team.id} value={team.id}>
                            {team.name}
                        </option>
                    ))}
                </select>
                <button type="button" onClick={getTeam}>
                    Search
                </button>
            </div>
            {teamPlayers.length > 0 && <Cards teamPlayers={teamPlayers} />}
        </>
    )
}

export default PlayersPage;

/*
    return (
        <>
            <header>
                <h1>{selectedTeam ? `${selectedTeam}'s Player Statistics` : "NBA Player Statistics"}</h1>
            </header>
            <div>
                <select
                    value={selectedTeam}
                    onChange={(e) => setSelectedTeam(e.target.value)}
                >
                    <option value="">Select a team</option>
                    <option value="8">Dallas Mavericks</option>
                    <option value="5">Charlotte Hornets</option>
                </select>
                <button
                    type="button"
                    onClick={getTeam}
                >
                    Search
                </button>
            </div>
            {teamPlayers.length > 0 && (
                <Cards 
                    teamPlayers={teamPlayers}
                />
            )}
        </>
    );
};

export default PlayersPage;



/*
import { useState } from 'react';
import Cards from './Cards';

import '../../style/Cards.css'
import $ from "jquery";

function PlayersPage() {
    const [teamPlayers, setTeamPlayers] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState('');

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
                <h1>NBA Player Statistics</h1>
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
*/