import React, { useState } from 'react'
import styled from 'styled-components'
import { PlusSquareFilled } from '@ant-design/icons'
import { Tarefa } from './Tarefa'

export const Input = (props) => {
    const [tasks, setTasks] = useState([])

    const Input = styled.input`
        border: 1px solid violet;
        border-radius: 3px;
        padding: 5px;
        height: 25px;
        max-width: 315px;
        min-width: 315px;
        font-size: 20px;
    `

    const Button = styled.span`
        color: violet;
        font-size: 35px;
        cursor: pointer;
        padding: 3px;
    `

    const Wrapper = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
    `
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            setTasks((task) => [...task, document.getElementById('inputField').value])
        }
    }
    return (
        <div>
            <Wrapper>
                <Input id='inputField' placeholder='Digite sua Task aqui' onKeyPress={handleKeyPress} />
                <Button
                    onClick={() => { setTasks((task) => [...task, document.getElementById('inputField').value]) }}
                ><PlusSquareFilled /></Button>
            </Wrapper>
            <Wrapper>
                <Tarefa
                    value={tasks}
                    onChange={(index, newValue) => {
                        const attTask = [...tasks]
                        attTask.splice(index, 1)
                        setTasks(attTask)
                    }}
                />
            </Wrapper>
        </div>
    )
}
