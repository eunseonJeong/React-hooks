import React, { useState } from 'react'

function Home() {
    const [item,setItem] = useState(0);

    const plusBtn = () => {
        setItem(item + 1);
    };
    const miusBtn = () => {
        setItem(item - 1);
    };
    
  return (
    <div>
        <p>{item}</p>
        <button onClick={plusBtn}>+</button>
        <button onClick={miusBtn}>-</button>
    </div>
  )
}

export default Home