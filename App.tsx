import * as React from 'react';
import { useState } from 'react';
import './style.css';

export default function App() {
  const [formFields, setFormFields] = useState([
    { tag: '', value: '' },
  ])
  const [listItems, setListItems] = useState([
    { tag: 'h', value: 'dsc' },
  ])

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  }

  const submit = (e) => {
    e.preventDefault();
    console.log(formFields)
    // alert(formFields)
    // const data = formFields
    // setListItems(data)
    setFormFields([{ tag: '', value: '' },])
  }

  const addFields = () => {
    let object = {
      tag: '',
      value: ''
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
                  name='tag'
                  placeholder='tag'
                  onChange={event => handleFormChange(event, index)}
                  value={form.tag}
                />
                <input
                  name='value'
                  placeholder='value'
                  onChange={event => handleFormChange(event, index)}
                  value={form.value}
                />
                <button onClick={() => removeFields(index)}>Remove</button>
              </div>
            )
          })}
        </form>
        <button onClick={addFields}>Add More..</button>
        <br />
        <button onClick={submit}>Submit</button>
        <hr/>
        {/* <ul>
        {listItems && listItems.map(i => <li>{i.tag} - {i.value}</li>)}
        </ul> */}
      </div>
    );
}
