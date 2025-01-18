import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import './List.css'

const List = () => {
    return (
        <div className='List'>
            <h2>Todo List 🌱</h2>
            <input className='search_box' type="text" placeholder='검색어를 입력하세요!'/>
            <div className='TodoItem_box'>
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        </div>
    )
}

export default List