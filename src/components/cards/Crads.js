import './Cards.css' 


const CardHeader=  () =>
{
    return (
    
        <div className="row">
            <div className="leftPhoto">
                <img src="pnada.jpg" alt="not found"></img>
            </div>
            <div className="rightPargraph">
                <div className="content">
                    <h3>Promote children's films and TV shows with cartoony assets</h3>
                    <p> Products aimed at younger audiences require designs that are especifically thought for them.
                         It's no surprise that toys, posters for children's films or TV series
                        , and other producs like these resort to a more cartoony style
                        , since it resonates very well with such an audience. Grab their attention and you'll also pique their parents' interest. </p>
                </div>
            </div>
        </div>
    )
}
export default CardHeader