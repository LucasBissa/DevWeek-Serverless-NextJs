import styled from 'styled-components'
import { useRouter } from 'next/router'

import ImageContainer from '../containers/ImageContainer'
import Logo from '../Logo'
import NameEmailForm from '../NameEmailForm'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 80vh;
    color: ${({theme}) => theme.colors.light};
    padding-left: 40px;

`
const FormDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`

export default function HomePageHeader () {
    const router = useRouter()

    const handleSubmit = async ({name, email}) => {
        const { NEXT_PUBLIC_API_URL } = process.env
        const data = await fetch(`${NEXT_PUBLIC_API_URL}/secret`,{
            method: 'POST',
            body: JSON.stringify ({
                name: name,
                email: email
            })
        })
        handleResponse(await data.json())
    }

    const handleResponse = ({success,id,adminKey}) => {
        if(success){
            router.push(`/secret/${id}?adminKey=${adminKey}`)
        }
    }

    return (
        <ImageContainer>
            <Container >
                <Logo />
                <h2>A melhor brincadeira do natal.</h2>
            </Container>
            <FormDiv>
                <NameEmailForm onSubmit= {handleSubmit} />
            </FormDiv>
        </ImageContainer>
    )
}