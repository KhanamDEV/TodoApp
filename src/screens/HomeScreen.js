import React, {useState, useEffect} from 'react';
import FormTodoComponent from "../components/FormTodoComponent";
import ListTaskComponent from "../components/ListTaskComponent";

const HomeScreen = () => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('todos') != null) {
            setTasks(JSON.parse(localStorage.getItem('todos')));
        }
    }, [])

    const receiveData = data => {
        tasks.push(data);
        setTasks([...tasks]);
        localStorage.setItem('todos', JSON.stringify(tasks));
    }

    const completeAction = id => {
        let index = tasks.findIndex(value => value.id === id);
        if (index > -1) {
            tasks[index].status = true;
            setTasks([...tasks]);
            localStorage.setItem('todos', JSON.stringify(tasks));
        }
    }

    const destroyTask = id => {
        let index = tasks.findIndex(value => value.id === id);
        if (index > -1) {
            tasks.splice(index, 1);
            setTasks([...tasks]);
            localStorage.setItem('todos', JSON.stringify(tasks));
        }
    }

    return (
        <main id="main-container">
            <section id="wrap-todo">
                <div className="container">
                    <h1>My Todos</h1>
                    <FormTodoComponent passData={receiveData}/>
                    <ListTaskComponent completeAction={completeAction} destroyTask={destroyTask} listTask={tasks}/>
                </div>
            </section>
        </main>
    )
}

export default HomeScreen;