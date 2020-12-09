import React from 'react';
import Task from '../components/Task';

const TaskList = (props) => {
    const active = props.tasks.filter(task => task.active);
    const done = props.tasks.filter(task => !task.active);

    if (done.length >= 2) {
        done.sort((a, b) => b.finishDate - a.finishDate);
    }

    if (active.length >= 2) {
        active.sort((a, b) => {
            a = a.text.toLowerCase();
            b = b.text.toLowerCase();

            if (a < b) {
                return -1
            }
            if (a > b) {
                return 1
            }
            return 0
        });
    }

    const activeTasks = active.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>);
    const doneTasks = done.map(task => <Task key={task.id} task={task} delete={props.delete} change={props.change}/>);

    return (
        <>
            <h2>Zadania do zrobienia</h2>
            {activeTasks.length > 0 ? activeTasks : <p>Brak zadań do wykonania</p>}
            <hr/>
            <h3>Zadania zrobione <em>({done.length})</em></h3>
            {done.length > 3 && <span style={{fontSize: 10}}>Wyświetlane są 3 ostatnie zadania</span>}
            {doneTasks.slice(0, 3)}
        </>
    )
};

export default TaskList;