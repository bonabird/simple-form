import { SentenceCaseCreator } from "../functions/sentence"

const DropDownCreator = (props) => (
  <div>
    <label htmlFor={props.name.naid}>{SentenceCaseCreator(props.name.naid)}</label>
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

export default DropDownCreator

const Info = ({ item }) => (
  <option value={item.value}>{SentenceCaseCreator(item.value)}</option>
)