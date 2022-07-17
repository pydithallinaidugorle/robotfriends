import React from 'react'

function Scroll(props) {
  return (
        <div style = {{overflowY:'scroll', border:'5px solid black', height:'200px', margin: '10px'}}>
            {props.children}
        </div>
  )
}

export default Scroll