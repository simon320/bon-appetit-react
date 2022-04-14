import React from 'react'
import './latestRecipes.css'
import BIZCOCHUELO from '../../assets/bizcochuelo.jpg'
import SOPA from '../../assets/sopa.jpeg'

const LatestRecipes = () => {
  return (
    <section id='latestRecipes' className="ultimas__recetas">

        <h2 className="titulo__ultimas-recetas">Ultimas recetas!</h2>
        <div className="contenedor__utlimas-recetas">

            <p className="descripcion__ultimas-recetas">
                Estas son algunas de las ultimas recetas que subimos al recetario de bon appetÃ­t. Subimos contenido
                diariamente espero lo disfruten.
            </p>
            
            <div className="contenedor__circulo-receta">
                <article>
                    <div className="contenedor__img">
                        <img className="receta receta__uno" src={BIZCOCHUELO} alt="Biscochuelo Casero"
                        title="Biscochuelo Casero" />
                        <div className="descripcion__receta">
                            <a href="/html/torta.html">
                                <p>
                                    Una torta casera econÃ³mica. Es el clÃ¡sico
                                    bizcocho de vainilla que a todos nos
                                    encanta. Sin duda, una de las recetas de
                                    tortas caseras fÃ¡ciles y rÃ¡pidas mÃ¡s
                                    demandadas.
                                </p>
                            </a>
                        </div>
                    </div>
                    <h3>Torta</h3>
                    
                </article>
                <article>
                    <div className="contenedor__img">
                        <img className="receta receta__dos" src={SOPA} alt="Sopa de zapallo"
                        title="Sopa de zapallo" />
                        <div className="descripcion__receta">
                            <a href="https://sopa.vercel.app/" target="_blank">
                                <p>
                                    Esta sopa de zapallo o calabaza es la sopa perfecta para el invierno o para un dÃ­a
                                    lluvioso, tambiÃ©n se le puede llamar sopa de zapallo y tomates, los tomates neutralizan
                                    un poco el sabor dulce del zapallo.
                                </p>
                            </a>
                        </div>
                    </div>
                    
                    <h3>Sopa</h3>
                </article>
            </div>

        </div>
    </section>
  )
}

export default LatestRecipes;
