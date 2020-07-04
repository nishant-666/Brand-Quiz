import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { List, Card, Container,Button,Icon, Header, Divider } from 'semantic-ui-react'
class QuizSummary extends Component {
    constructor (props) {
        super(props);
        this.state = {
            score: 0,
            numberOfQuestions: 0,
            numberOfAnsweredQuestions: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            hintsUsed: 0,
            fiftyFiftyUsed: 0
        };
    }

    componentDidMount () {
        const { state } = this.props.location;
        if (state) {
            this.setState({
                score: (state.score / state.numberOfQuestions) * 100,
                numberOfQuestions: state.numberOfQuestions,
                numberOfAnsweredQuestions: state.numberOfAnsweredQuestions,
                correctAnswers: state.correctAnswers,
                wrongAnswers: state.wrongAnswers,
                hintsUsed: state.hintsUsed,
                fiftyFiftyUsed: state.fiftyFiftyUsed
            });
        }
    }

    render () {
        const { state } = this.props.location;
        let stats, remark;
        const userScore = this.state.score;

        if (userScore <= 30 ) {
            remark = 'You need more practice!';
        } else if (userScore > 30 && userScore <= 50) {
            remark = 'Better luck next time!';
        } else if (userScore <= 70 && userScore > 50) {
            remark = 'You can do better!';
        } else if (userScore >= 71 && userScore <= 84) {
            remark = 'You did great!';
        } else {
            remark = 'You\'re an absolute genius!';
        }

        if (state !== undefined) {
            stats = (
                <Fragment>
                     <Header size='huge'>Your time is up!</Header>
                    
                    <div className="container stats">
                         <Header size='medium'>{remark}</Header>
                         <Header size='medium'>Your Score: {this.state.score.toFixed(0)}&#37;</Header>
                        <div>
                        <p>Total questions: {this.state.numberOfQuestions} </p>
                 

                        <p>Attempted questions: {this.state.numberOfAnsweredQuestions} </p>
                        

                        <p>Number of Correct Answers: {this.state.correctAnswers}</p>
                      

                        <p>Number of Wrong Answers:  {this.state.wrongAnswers}</p>
                        </div>


                    </div>
                    
                    <div style={{marginTop:20}}>
                    <Link to="/play/quiz">
                    <Button primary style={{marginTop:20}}> <Icon name='redo'/>Play Again</Button>
                    </Link>
                   
                    <Link to="/">
                    <Button primary style={{marginTop:20}}> <Icon name='backward'/>Back to Home</Button>
                    </Link>

                    
                    </div>
            
                </Fragment>
            );
        } else {
            stats = (
                <section>
                    <Header size='huge'>No Statistics Available!</Header>
                    <Link to="/play/quiz">
                    <Button primary style={{marginTop:20}}> <Icon name='play circle outline' />Take the Quiz!</Button>
                    </Link>
                    <Link to="/">
                    <Button primary style={{marginTop:20}}> <Icon name='backward' />Back to Home</Button>
                    </Link>
                    
                </section>
            );
        }
        return (
            <Fragment>
                <Helmet><title>Brand Quiz || Summary</title></Helmet>
                <Container fluid style={{textAlign:"center"}}>
                <Card fluid style={{padding:40}}>
               
                <Card.Content>
                <div>
                {stats}
                </div>
                </Card.Content>
                </Card>
                </Container>
            </Fragment>
        );
    }
}

export default QuizSummary;