import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useState } from 'react'

import Button from './Button'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function Sort ({ hasDraw }) {
    const router = useRouter()
    const { id, adminKey } = router.query

    const [draw, setDraw] = useState(false)

    const DRAW_STATUS = hasDraw || draw

    const handleSort = async () => {
        const { NEXT_PUBLIC_API_URL } = process.env
        const { status } = await fetch(`${NEXT_PUBLIC_API_URL}/secret/${id}/draw`,{
            method: 'PUT',
            headers: new Headers({
                'admin-key': adminKey
            })
        })

        if(status === 200){
            setDraw(true)
        }
    }

    return (
        <Container >
            {
                DRAW_STATUS && <p>O sorteio já foi realizado.</p>
            }
            {
                !DRAW_STATUS && <Button onClick={handleSort} >Sortear</Button>
            }
        </Container>
    )
}