import React from 'react';

const FormItem = (props) => {
  let handleChange = (event) => {
    let value = event.target.value;
    props.changeSubmission(value)
  }

  return (
    <label>
      <input
        name={props.name}
        type='text'
        value={props.content}
        onChange={handleChange}
      />
    </label>
  )
}

export default FormItem;
