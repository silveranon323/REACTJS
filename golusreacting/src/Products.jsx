import React, { useState } from 'react'

function Products({ age, data }) {
    const [a,b] = useState(false);
  return (
      <div>
          <h4>
              {a===false? "Hello" : "Hii"}
          </h4>
          <button onClick={() => {
                b(!a)
          }}>
              click
          </button>
    </div>
  )
}

export default Products