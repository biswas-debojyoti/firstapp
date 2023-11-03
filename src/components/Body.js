import React, { useState } from 'react'
import './body.css';

const Body = () => {


    //  Number count Add , Sub  , Resate
    const [count, setCount] = useState(0)
    function addNumber() {
        setCount(count + 1)
    }
    function subNumber() {
        if (count === 0) {
            alert("you Cant count Minus")
        }
        else {
            setCount(count - 1)
        }
    }
    function resetNumber() {
        setCount(0)
    }

    return (
        <>
            <div className='mainbody'>
                <h1>Lets Click Count ={count} </h1>

                <span><button onClick={addNumber} className='add' >Add</button></span>
                <span><button onClick={subNumber} className='sub'>Sub</button></span>
                <br />
                <button onClick={resetNumber} className='reset'>Reset</button>
            </div>
        </>
    )
}

export default Body;