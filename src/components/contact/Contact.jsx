import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <section id="id_contacto" className="contacto">
        <h2>Contactanos</h2>
        <div className="contenedor__contacto">
            <p>Podes escribirnos para contarnos como te salio alguna de las recetas, que despejemos alguna duda o
                sugerirnos alguna receta que te gustaria que subamos.</p>
            <form className="formulario">
                <label>
                    <input type="email" id="email" placeholder="Ingrese aqui su email" />
                </label>
                <label>
                    <textarea name="campo__texto" id="campo_texto" cols="30" rows="10"
                        placeholder="Escriba aqui su consulta o sugerencia..."></textarea>
                </label>
                <div className="contenedor__checkbox">
                    <input type="checkbox" name="checkbox" id="sub" checked />
                    <label for="checkbox" className="label__checkbox">
                        Deseo que me informen cuando suban recetas nuevas.
                    </label>
                </div>
                <button>
                    Enviar
                </button>
            </form>
        </div>
    </section>
  )
}

export default Contact