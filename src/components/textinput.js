import { useCallback, useState } from "react"
import { names } from "../config/config"
import { Sentencer } from "../functions/sentencer"
import Droperiser from "./droperiser"

const TextInput = () => {
  const [formData, setFormData] = useState(initaliseValues())
  const [formValidation, setFormValidation] = useState(initaliseValues())

  function initaliseValues() {
    return {
      regione: "",
      provincia: "",
      comune: "",
      unita_urbanistica: "",
      valore: ""
    }
  }

  const FormCreator = () => (
    names.map(name => InputDivider(name))
  )

  function InputDivider(name) {
    if (name.type === "drop") {
      return DropDownCreator(name)
    } else if (name.type === "text") {
      return TextBoxCreator(name)
    }
  }


  const DropDownCreator = (name) => (
    <div>
      <Droperiser
        key={name.id}
        handleChange={handleChange}
        name={name}
        value={formData[name.naid]}
        validation={formValidation[name.naid]}
        choices={DropDownFilter(name)}
      />
    </div>
  )

  const DropDownFilter = (name) => {
    const filteredItems = []
    const prevObj = names[name.id - 2]
    if (prevObj && name.refined && formData[prevObj.naid]) {
      name.info.map(element => {
        if (element.shortShow === formData[prevObj.naid] || element.shortShow === "") {
          filteredItems.push(element)
        }
      })
    } else {
      name.info.map(element => { filteredItems.push(element) })
    }
    return filteredItems
  }

  const TextBoxCreator = (name) => (
    <div>
      <input
        key={name.id}
        type="text"
        value={formData[name.naid]}
        onChange={handleChange}
        name={name.naid}
        placeholder={Sentencer(name.naid)}
      />
      {formValidation[name.naid] && <p className="invalid">{formValidation[name.naid]}</p>}
    </div>
  )

  const EmptyInputValidator = () => {
    for (const key in formData) {
      if (formData[key] === "" || formData[key] === "-- Choose --") {
        formValidation[key] = "*Enter this field"
      } else {
        formValidation[key] = ""
      }
    }
  }

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData, [name]: type === "checkbox" ? checked : value
      }
    })
  }

  const FinalValidation = () => {
    let isValid = []
    for (const key in formValidation) {
      if (formValidation[key] === "") {
        isValid.push(true)
      } else {
        isValid.push(false)
      }
    }
    if (isValid.every(element => element)) {
      return true
    } else {
      return false
    }
  }

  const handleSubmit = useCallback(
    () => (event) => {
      event.preventDefault()
      EmptyInputValidator()
      if (FinalValidation()) {
        const rowData = (JSON.parse(localStorage.getItem("data")) || [])
        rowData.push(formData)
        console.log(rowData)
        localStorage.setItem("data", JSON.stringify(rowData))
        setFormData(initaliseValues())
        setFormValidation(initaliseValues())
      } else {
        console.log("No")
      }
    });

  return (
    <div>
      <form onSubmit={handleSubmit()}>
        {FormCreator()}
      </form>
      <button onClick={() => console.log(formData)}>Clickme</button>
    </div>
  )
}

export default TextInput;