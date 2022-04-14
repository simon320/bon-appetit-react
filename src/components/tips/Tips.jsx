import React from 'react'
import './tips.css'

const Tips = () => {
  return (
    <section id="id_tips" className="tips">
        <h2>Tabla de equivalencias</h2>
        <div className="contenedor__tips">
            <table>
                <tr>
                    <th colspan="2">Una taza de té contiene:</th>
                </tr>
                <tr>
                    <td>Arroz</td>
                    <td>180gr</td>
                </tr>
                <tr>
                    <td>Azúcar</td>
                    <td>240gr</td>
                </tr>
                <tr>
                    <td>Azúcar rubio</td>
                    <td>180gr</td>
                </tr>
                <tr>
                    <td>Cacao en polvo</td>
                    <td>130gr</td>
                </tr>
                <tr>
                    <td>Coco rallado</td>
                    <td>100g</td>
                </tr>
                <tr>
                    <td>Fécula de maÃ­z</td>
                    <td>100gr</td>
                </tr>
                <tr>
                    <td>Harina blanca</td>
                    <td>120gr</td>
                </tr>
                <tr>
                    <td>Harina integral</td>
                    <td>100gr</td>
                </tr>
                <tr>
                    <td>Harina de soja</td>
                    <td>100gr</td>
                </tr>
                <tr>
                    <td>Manteca</td>
                    <td>240g</td>
                </tr>
                <tr>
                    <td>Margarina</td>
                    <td>200gr</td>
                </tr>
                <tr>
                    <td>Miel</td>
                    <td>200gr</td>
                </tr>
                <tr>
                    <td>Pan fresco en migas</td>
                    <td>60gr</td>
                </tr>
                <tr>
                    <td>Pan rallado</td>
                    <td>90gr</td>
                </tr>
                <tr>
                    <td>Pasas de uva</td>
                    <td>180gr</td>
                </tr>
                <tr>
                    <td>Queso rallado</td>
                    <td>120gr</td>
                </tr>
            </table>
            <table className="table__cucharas">
                <tr>
                    <th colspan="2">Una cucharada sopera al ras contiene:</th>
                </tr>
                <tr>
                    <td>Azúcar</td>
                    <td>20gr</td>
                </tr>
                <tr>
                    <td>Fécula de maíz</td>
                    <td>10gr</td>
                </tr>
                <tr>
                    <td>Harina</td>
                    <td>20gr</td>
                </tr>
                <tr>
                    <td>Manteca</td>
                    <td>15gr</td>
                </tr>
                <tr>
                    <td>Sal gruesa</td>
                    <td>20gr</td>
                </tr>
                <tr>
                    <th colspan="2">Una cucharadita de té al ras contiene:</th>
                </tr>
                <tr>
                    <td>Polvo para hornear</td>
                    <td>4gr</td>
                </tr>
                <tr>
                    <td>Sal</td>
                    <td>5gr</td>
                </tr>
            </table>
        </div>
    </section>
  )
}

export default Tips