import React, { useState } from 'react';
import Cards from './Cards';
import '../../style/Cards.css';
import $ from "jquery";
import NavBar from '../components/NavBar';

function PlayersPage() {
    const [teamPlayers, setTeamPlayers] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState("");
    const [teams, setTeams] = useState([
        { id: 1, name: 'Atlanta Hawks'},
        { id: 2, name: 'Boston Celtics'},
        { id: 4, name: 'Brooklyn Nets'},
        { id: 5, name: 'Charlotte Hornets'},
        { id: 6, name: 'Chicago Bulls'},
        { id: 7, name: 'Cleveland Cavaliers'},
        { id: 8, name: 'Dallas Mavericks'},
        { id: 9, name: 'Denver Nuggets'},
        { id: 10, name: 'Detroit Pistons'},
        { id: 11, name: 'Golden State Warriors'},
        { id: 14, name: 'Houston Rockets'},
        { id: 15, name: 'Indiana Pacers'},
        { id: 16, name: 'LA Clippers'},
        { id: 17, name: 'Los Angeles Lakers'},
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
        { id: 38, name: 'Toronto Raptors'},
        { id: 40, name: 'Utah Jazz'},
        { id: 41, name: 'Washington Wizards'}
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
        <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom right, #0a0f0d, #003973)' }}>
            <NavBar />
            <header>
                <h1>{selectedTeam ? `${teams.find((team) => team.id === Number(selectedTeam)).name}'s Player Statistics` : 'NBA Player Statistics'}</h1>
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
        </div>
    )
}
        
export default PlayersPage;