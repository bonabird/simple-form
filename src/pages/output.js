import { names } from "../config/config";
import { SentenceCaseCreator } from "../functions/sentence";

const Output = (props) => {
    const rows = (JSON.parse(localStorage.getItem("data")))

    const titleElements = (names.map(name => (
        <th key={name.id}>{SentenceCaseCreator(name.naid)}</th>
    ))
    )

    const dataCool = (rows.map(row => (
        <tr>
            <td>{SentenceCaseCreator(row.regione)}</td>
            <td>{SentenceCaseCreator(row.provincia)}</td>
            <td>{SentenceCaseCreator(row.comune)}</td>
            <td>{SentenceCaseCreator(row.unita_urbanistica)}</td>
            <td>{SentenceCaseCreator(row.valore)}</td>
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