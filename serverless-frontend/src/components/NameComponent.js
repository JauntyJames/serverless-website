import React from "react"

const NameComponent = props => {

  return (
    <div onClick={props.handleDelete.bind(this, props.id)} >
      {props.name}
    </div>
  )
}

export default NameComponent
