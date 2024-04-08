function Card() {

    return (
        <>
            <div className="card">
                <div className="title">
                    <img src="https://image-service.onefootball.com/transform?w=128&dpr=2&image=https://images.onefootball.com/icons/teams/164/8585.png" alt="OL" />
                    <div>
                        <h1><span className="ol">Olympique</span> <span className="ly">Lyonnais</span></h1>
                        <p>Un seul Oympique</p>
                    </div>
                </div>
                <div className="stars">
                    <p>Note ce Club</p>
                    <img src="https://www.avoir-alire.com/IMG/logo/arton40866.png" alt="stars" />
                </div>
            </div>


        </>
    )
}

export default Card