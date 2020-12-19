import styled from 'styled-components'
import { useState } from 'react'

import Button from './Button'
import Input from './Input'


const Form = styled.form`
    display: flex;
    flex: 1;
    max-width: 900px;
    padding: 20px;

    @media (max-width: 500px) {
        flex-direction: column;
    }

    > input, button {
        margin: 10px;
    }
`

function NameEmailForm ({buttonText, onSubmit}){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit = ({name,email})
        setName('')
        setEmail('')
    }

    return (
        <Form onSubmit={handleSubmit} >
            <Input placeholder="Seu Nome" required value={name} onChange={({target}) => setName(target.value)} />
            <Input type="email" placeholder="Seu Email" required value={email} onChange={({target}) => setName(target.value)} />
            <Button>{buttonText}</Button>
        </Form>
    )
}

NameEmailForm.defaultProps ={
    buttonText: "Criar",
    onSubmit: () => {}
}

export default NameEmailForm