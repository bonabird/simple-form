import { names } from "../config/config";
import { Sentencer } from "../functions/sentencer";

const Output = (props) => {
    const rows = (JSON.parse(localStorage.getItem("data")))

    const titleElements = (names.map(name => (
        <th key={name.id}>{Sentencer(name.naid)}</th>
    ))
    )

    const dataCool = (rows.map(row => (
        <tr>
            <td>{Sentencer(row.regione)}</td>
            <td>{Sentencer(row.provincia)}</td>
            <td>{Sentencer(row.comune)}</td>
            <td>{Sentencer(row.unita_urbanistica)}</td>
            <td>{Sentencer(row.valore)}</td>
        </tr>
    )))
    return (
        <div>
            <table>
                <tr>
                    {titleElements}
                </tr>
                {dataCool}
            </table>
        </div>
    )
}

export default Output