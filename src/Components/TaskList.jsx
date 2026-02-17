import React from 'react'
import './task.css'
import { useSelector } from 'react-redux'
import TaskItem from './TaskItem'

const TaskList = () => {

    const { items, filters } = useSelector(state => state.tasks);

    const filtered = filters === 'completed' ? items.filter(task => task.completed) : items;

    return (
        <ul className='task-list'>
            {filtered.map(task => (
                <TaskItem key={task.id} task={task} />
            ))}
        </ul>
    )
}

export default TaskList
