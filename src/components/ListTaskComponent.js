import React from 'react';
import ItemTaskComponent from "./ItemTaskComponent";

const ListTaskComponent = props => {

    const list = props.listTask.map(value =>
        <ItemTaskComponent completeAction={props.completeAction} destroyTask={props.destroyTask}
                           key={value.id.toString()} task={value}/>
    );
    return (
        <section id="wrap-task" className="mt-3">
            {list}
        </section>
    )
}

export default ListTaskComponent;