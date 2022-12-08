import * as React from 'react';
import { useState } from 'react';
import './style.css';

export default function App() {
  const [formFields, setFormFields] = useState([
    { tag: 'kjndc', value: 'dc' },
    { tag: 'kjndc', value: 'dc' },
  ])

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(formFields)
    alert(formFields)
  }

  const addFields = () => {
    let object = {
      name: '',
      age: ''
    }

    setFormFields([...formFields, object])
  }

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1)
    setFormFields(data)
  }
    return (
      <div className="App">
        <form onSubmit={submit}>
          {formFields.map((form, index) => {
            return (
              <div key={index}>
                <input
                  name='name'
                  placeholder='Name'
                  onChange={event => handleFormChange(event, index)}
                  value={form.name}
                />
                <input
                  name='age'
                  placeholder='Age'
                  onChange={event => handleFormChange(event, index)}
                  value={form.age}
                />
                <button onClick={() => removeFields(index)}>Remove</button>
              </div>
            )
          })}
        </form>
        <button onClick={addFields}>Add More..</button>
        <br />
        <button onClick={submit}>Submit</button>
      </div>
    );
}
