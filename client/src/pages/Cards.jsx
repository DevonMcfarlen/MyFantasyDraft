import '../../style/Cards.css'

const Cards = () =>{
    return(
        <>
        <header>
            <h1 className='card-header'>Dallas Maverick's Player Statistics</h1>
        </header>
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