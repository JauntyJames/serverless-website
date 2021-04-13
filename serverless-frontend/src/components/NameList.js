import React from 'react'
import NameComponent from './NameComponent'

const NameList = props => {
  let nameArray = props.names.map(item => {
    return (
      <NameComponent
        key={item.fld_id}
        name={item.fld_str}
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
