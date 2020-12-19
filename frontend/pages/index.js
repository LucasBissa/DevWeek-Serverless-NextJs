import HomePageHeader from '../src/components/headers/HomePageHeader'
import GiftContainer from '../src/components/containers/GiftContainer'
import Steps from '../src/components/Steps'

export default function HomePage () {
    return (
        <>
            <HomePageHeader />
            <GiftContainer>
                <Steps />
            </GiftContainer>
        </>
    )
}