import React, {Component} from 'react';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';
import './App.css';

class App extends Component {
    counter = 6;

    state = {
        tasks: [
            {
                id: 0,
                text: "Pojechać na myjnie",
                date: "2020-01-01",
                important: true,
                active: true,
                finishDate: null
            },
            {
                id: 1,
                text: "Kupić piwo",
                date: "2020-10-12",
                important: false,
                active: true,
                finishDate: null
            },
            {
                id: 2,
                text: "Wykupić serwer",
                date: "2020-06-01",
                important: true,
                active: true,
                finishDate: null
            },
            {
                id: 3,
                text: "Kupić laptopa",
                date: "2021-01-01",
                important: false,
                active: true,
                finishDate: null
            },
            {
                id: 4,
                text: "Iść na urodziny",
                date: "2020-09-01",
                important: false,
                active: true,
                finishDate: null
            },
            {
                id: 5,
                text: "Sprzedać samochód",
                date: "2021-10-10",
                important: true,
                active: true,
                finishDate: null
            }]
    };

    deleteTask = (id) => {
        let tasks = [...this.state.tasks];
        tasks = tasks.filter(task => task.id !== id);
        this.setState({
            tasks: tasks,
        });
    };

    changeTaskStatus = (id) => {
        const tasks = Array.from(this.state.tasks);
        tasks.forEach(task => {
            if (task.id === id) {
                task.active = false;
                task.finishDate = new Date().getTime();
            }
        });
        this.setState({
            tasks: tasks
        })
    };

    addTask = (text, date, important) => {
        const task = {
            id: this.counter,
            text: text,
            date: date,
            important: important,
            active: true,
            finishDate: null
        };
        this.counter++;

        this.setState(prevState => ({
                tasks: [...prevState.tasks, task]
            })
        );

        return true;
    };

    render() {
        return (

            <div className="App">
                <h1>To Do App</h1>
                <AddTask add={this.addTask}/>
                <TaskList tasks={this.state.tasks} delete={this.deleteTask} change={this.changeTaskStatus}/>
            </div>
        )
    }
}

export default App;
