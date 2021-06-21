import React from 'react'
import styled from 'styled-components'
import { DeleteFilled } from '@ant-design/icons'
export const Tarefa = (props) => {
     let task = props.value


    const deleteTask = (index) =>{
        props.onChange(index)
    }

    const Task = styled.div `
        display: flex;
        width: 100%;
        font-size: 25px;
        color: #fff;
        padding: 10px;
    `
    
    const Wrapper = styled.div`
        display: flex;
        align-items: center;
        margin: 5px;
        padding: 5px;
        border-radius: 5px;
        text-align: justify;
        max-width: 360px;
        min-width: 360px;
        &:hover{
            background: #121212;
        }
    `

    const DeleteButton = styled.span`
        cursor: pointer;
        color: #fff;
        margin: 0 5px;
        font-size: 20px;
    `

    return (
        <div>
            {task.map((taskValue, index)=>{
                return (
                    <div>
                        <Wrapper>
                            <Task onChange={(newTask)=>{props.onChange(index, newTask)}}>
                                {taskValue}
                            </Task>
                            <DeleteButton
                                onClick={()=>{deleteTask(index)}}
                            >
                                <DeleteFilled />
                            </DeleteButton>
                        </Wrapper>
                    </div>
                )
            })}
        </div>
    )
}