import React from 'react'
import CheckBox from './CheckBox'

class ListItem extends React.Component {
    render() {
        const { item } = this.props

        return <div style={{ marginTop: '10px' }}>
            <CheckBox onChange={this.completedChangeHandler}/>
            <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
                {item.title}
            </span>
            
            <button onClick={this.editHandler}>edit</button>
            <button onClick={this.deleteHandler}>deleted</button>
        </div>
    }
    completedChangeHandler = (checked) => {
        console.log('checked', checked)
        const { item, toggleCompleted } = this.props
        toggleCompleted(item.id)
    }
    deleteHandler = () => {
        const { item, deleteItem } = this.props
        deleteItem(item.id)
    }
    editHandler = () => {
        const { item, editItem } = this.props
        editItem(item.id)
    }
}

export default ListItem
