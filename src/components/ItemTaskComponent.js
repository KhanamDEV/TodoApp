import React from 'react';

const ItemTaskComponent = props => {
    const className = !props.task.status ? 'item-task bg-grey' : 'item-task bg-grey success';

    const completeAction = () => {
        props.completeAction(props.task.id);
    }

    const destroyTask = () => {
        props.destroyTask(props.task.id);
    }

    return (
        <div className={className}>
            <div className="content-task">
                <h3>{props.task.name}</h3>
                <p>{props.task.description}</p>
            </div>
            <div className="action-task">
                {!props.task.status && <button className="btn" onClick={completeAction}>Complete</button>}
                <button className="btn" onClick={destroyTask}>Delete</button>
            </div>
        </div>
    )
}

export default ItemTaskComponent;