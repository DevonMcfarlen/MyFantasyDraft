import '../../style/Cards.css'
import $ from "jquery";

const Cards = () =>{
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

    var teamPlayers = [];
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
            teamPlayers = response.response;
            console.log(teamPlayers);
        });
    }

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
    
        let toSendUrl = "/players/statistics?id=" + teamPlayers[userPlayer].id + "&season=" + userSeason;
        setNBASettings(toSendUrl);
        
        return $.ajax(nbaSettings).done(function (response) {
            var playerGames = response.response;
            var pGLength = playerGames.length;
            var tPoints = 0;
            var tAssists = 0;
            var tTotReb = 0;
            var tFGP = 0.0;

            for(var i = 0; i < pGLength; i++){
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
        });
    }

    var cardItems = document.querySelector(".card-items");
    var showCardBtn = document.querySelector(".showBtn");

    function getPlayerImage(player) {
        let toSendUrl = 'professional+headshot+of+' + player.firstname + '+' + player.lastname + '+from+espn.com+bio';
        setBingSettings(toSendUrl);

        return $.ajax(bingSettings).done(function (response) {});
    }


    return(
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
            <label>
                <input type="checkbox"/>
                <div className="flip-card">
                    <div className="front">
                        <h2>Player Name</h2>
                        <p>Jersey #</p>
                    </div>
                    <div className="back">
                        <p>Avg points</p>
                        <p>Avg assit</p>
                        <p>Avg Total Rebounds</p>
                        <p>Avg FGP</p>
                        <button className='backBtn'>Add Player</button>
                    </div>
                </div>
            </label>
        </>
    )
}
export default Cards 