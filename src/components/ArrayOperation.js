import React, { useState } from 'react'
import './arrayoperation.css'


const ArrayOperation = () => {

    // delete from array of object
    const [task, setTask] = useState([
        { id: 1, name: "Debu Biswas", age: 10, },
        { id: 2, name: "shiv kumar", age: 11, },
        { id: 3, name: "subha pratihar", age: 12, },
        { id: 4, name: "samrat sinha", age: 13, },
        { id: 5, name: "santu patra", age: 14, },
        { id: 6, name: "bittu shit", age: 15, }])
        
    function handleDelete(id) {
        setTask(task.filter(task => id !== task.id))
    }

       //  input fill  display in anoothet tag
    const [string, setString] = useState()
    function handelchange(e) {
        setString(e.target.value)
    }

    return (
        <>
            <hr />
            <input onChange={(e) => handelchange(e)} ></input>
            <h1 className='arrayoperation'>{string}</h1>
            <h2>  </h2>
            <ul className='boxdesign'>
                {task.map((arrayDetail, index) => (
                    <li key={index} className='freandList' >
                        <span className=''>{arrayDetail.id} - {arrayDetail.name} -{arrayDetail.age} </span>
                        <button onClick={() => handleDelete(arrayDetail.id)} className='delete'>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ArrayOperation