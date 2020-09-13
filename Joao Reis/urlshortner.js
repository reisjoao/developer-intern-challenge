import React from "react"
class Urlshortner extends React.Component{
    render () {
        return (
            <React.Fragment>
            <div class="image">
            <img src="img/background-home.jpg" alt="width 150px" height="500px" />
            <div class="text">
            <h2>Encurte seus links </h2> 
                    <h3>Links são longos.Encurte os links que você deseja compartilhar, e
                        acompanhe enquanto viajam através da internet.</h3>
                        <input id='text-link' type='text' placeholder="Cole seu link aqui" />
                        <div id="encurtar_container"></div>
            </div>

            </div>
            </React.Fragment>
        )
    }
}

export default Urlshortner;                                                                                            