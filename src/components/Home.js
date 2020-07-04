import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Card, Icon, Button, Container, Header } from 'semantic-ui-react'
const Home = () => (
    <Fragment>
        <Helmet>
            <title>Home || Brand Quiz</title></Helmet>
        <Container fluid style={{textAlign:"center"}}>
            <Card centered fluid style={{padding:70}}>
                <Card.Content>
                <Header size='huge' style={{fontSize:40}}>Brand Quiz</Header>
                <Header.Subheader>
                    <h6>Test your brand knowledge!</h6>
                </Header.Subheader>
                </Card.Content>
                <Card.Content>
                <Link to="/play/instructions">
                <Button primary> <Icon name='book' />Read Quiz Instructions</Button>
                </Link>
                <Link to="/play/quiz">
                <Button primary> <Icon name='play circle outline' />Start Quiz</Button>
                </Link>
                </Card.Content>
            </Card>
            </Container>
    </Fragment>
);

export default Home;