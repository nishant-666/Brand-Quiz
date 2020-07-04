import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { List, Card, Container,Button,Icon, Header, Divider } from 'semantic-ui-react'
import isEmpty from '../../utils/is-empty';
import Message from './message'

const QuizInstructions = () => (
    <Fragment>
        <Helmet><title>Quiz Instructions || Brand Quiz</title></Helmet>
        <Container fluid style={{textAlign:"center"}}>
        <Card fluid style={{padding:40}}>
        <Header size='large'>Quiz Instructions</Header>
        <Card.Content>
        <List bulleted style={{fontSize:16}}>
            <List.Item>The game has a duration of 6 minutes and ends as soon as your time elapses.</List.Item>
            <List.Item>Each game consists of 20 questions.</List.Item>
            <List.Item>Each question has four options.</List.Item>
            <List.Item>Select the option which you think is right by clicking it.</List.Item>
            <List.Item>Feel free to quit the game at any time.</List.Item>
            <List.Item>The timer starts as soon as the game loads.</List.Item>
            <List.Item>Do you have what it takes? Let's find out, just click the play button!</List.Item>

        </List>
        </Card.Content>
        <Message/>
        <Card.Content>
        
        <Link to="/">
        <Button primary> <Icon name='backward' />Go back</Button>
        </Link>
        <Link to="/play/quiz">
        <Button primary> <Icon name='play circle outline' />Start Quiz</Button>
        </Link>
        </Card.Content>
       
        </Card>
        </Container>
         </Fragment>
);

export default QuizInstructions;