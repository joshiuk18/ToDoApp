import React, { useState } from 'react'
import './task.css'
import { useDispatch } from 'react-redux';
import { addTask } from '../features/task/taskSlice'

function AddTask() {

    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addTask(text));
        setText('');
    };

    return (
        <form onSubmit={handleSubmit} className='form'>
            <input
                placeholder='Add a Task'
                value={text}
                onChange={handleChange}
                className='input'
            />
            <button type='submit' className='button'>Add</button>
        </form>
    )
}

export default AddTask
