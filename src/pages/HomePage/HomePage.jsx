import { Button, Container } from 'react-bootstrap'

const HomePage = () => {
    return (

        <div className='HomePage'>

            <div className='firstBlock'>
                <div className='home-Page-Intro'>

                    <div className='home-h1'>
                        <h1>Welcome to HappyCod</h1>
                    </div>
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>

                </div>

                <article className='Home-Article'>
                    <Container>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolore eius explicabo ipsum molestiae suscipit voluptas
                        optiolibero! Veritatis fugiat sapiente vitae odit magni
                        eveniet, optio, eaque dolore placeat ut quod?

                    </Container>
                    <Button className='Home-Article-Button'>lorem ipsum</Button>
                </article>

            </div>

            <div>
                <div>proyect</div>
                <div>About us</div>
                <div>Service</div>
            </div>
        </div>
    )
}
export default HomePage