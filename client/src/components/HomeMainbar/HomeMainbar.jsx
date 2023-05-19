import React from "react";
import {  useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import './HomeMainbar.css';
import QuestionsList from "./QuestionsList";

const HomeMainbar = () => {

    const location = useLocation();
    const user = useSelector((state) => (state.currentUserReducer)) ;
    const navigate = useNavigate();

    const questionsList = useSelector(state => state.questionsReducer)
    console.log(questionsList)
    
    // var questionsList = [{
    //     _id: 1,
    //     upVotes: 3,
    //     downVotes:2,
    //     noOfAnswers: 2,
    //     questionsTitle: "What is a function",
    //     questionsBody: "It mean to be",
    //     questionsTags: [ 'CSS', 'Python', 'HTML', 'Javascript', ],
    //     userPosted: "mano",
    //     userId:1,
    //     askedOn: "jan 1",
    //     answer: [{
    //         answerBody: "Answer",
    //         userAnswered: "Kumar",
    //         answeredOn: "jan 2",
    //         userId: 2,
    //     }]
    // },{
    //     _id: 2,
    //     upVotes: 0,
    //     downVotes:2,
    //     noOfAnswers: 0,
    //     questionsTitle: "What is a function>",
    //     questionsBody: "It mean to be",
    //     questionsTags: ['Java', 'Python', 'HTML', 'Javascript' ],
    //     userPosted: "mano",
    //     userId: 1,
    //     askedOn: "jan 1",
    //     answer: [{
    //         answerBody: "Answer",
    //         userAnswered: "kumar",
    //         answeredOn: "jan 2",
    //         userId: 2,
    //     }]
    // },{
    //     _id: 3,
    //     upVotes: 1,
    //     downVotes: 0,
    //     noOfAnswers: 0,
    //     questionsTitle: "What is a function>",
    //     questionsBody: "It mean to be",
    //     questionsTags: ['CSS', 'Java', 'Python'],
    //     userPosted: "mano",
    //     askedOn: "jan 1",
    //     userId: 3,
    //     answer: [{
    //         answerBody: "Answer",
    //         userAnswered: "kumar",
    //         answeredOn: "jan 2",
    //         userId: 2,
    //     }]
    // }]


    const checkAuth = () => {
        if(user === null){
        alert("Login or signup to ask question");
        navigate('/Auth')
        }else{
            navigate('/AskQuestion')
        }
    }
    
    return(
        <div className="main-bar">
            <div className="main-bar-header">
                {
                    location.pathname === '/' ? <h1> Top Questions </h1> : <h1> All Questions </h1>
                }
                <button to= '/ASkQuestion' onClick={checkAuth} className="ask-btn">Ask Question</button>
            </div>
            <div>
                {
                    questionsList.data === null ?
                    <h1>Loading......</h1>:
                    <>
                    <p>{ questionsList.data.length } questions</p>
                    <QuestionsList questionsList={questionsList.data} />
                    </>
                }
            </div>
        </div>
    )
}

export default HomeMainbar