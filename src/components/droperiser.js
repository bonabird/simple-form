import { Sentencer } from "../functions/sentencer"

const Droperiser = (props) => (
  <div>
    <label htmlFor={props.name.naid}>{Sentencer(props.name.naid)}</label>
    <div>
      <select
        id={props.name.naid}
        value={props.value}
        onChange={props.handleChange}
        name={props.name.naid}
      >
        {props.choices.map(item => (
          <Info item={item} key={item.id} />
        ))}
      </select>
      {props.validation && <p className="invalid" >{props.validation}</p>}
    </div>
  </div>
)

export default Droperiser

const Info = ({ item }) => (
  <option value={item.value}>{Sentencer(item.value)}</option>
)