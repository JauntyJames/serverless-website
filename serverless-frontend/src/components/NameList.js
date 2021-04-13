import React from 'react'
import NameComponent from './NameComponent'

const NameList = props => {
  const handleDelete = (id) => {
    let formPayload = {
      fld_id: id
    }
    props.deleteItem(formPayload)

  }

  let nameArray = props.names.map(item => {
    return (
      <NameComponent
        key={item.fld_id}
        id={item.fld_id}
        name={item.fld_str}
        handleDelete={handleDelete}
      />
    )
  })

  return (
    <ul>
      {nameArray}
    </ul>
  )
}

export default NameList;
