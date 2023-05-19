import React, {useState} from "react";
import { Link, useParams,useNavigate, useLocation } from "react-router-dom";
import upvotes from '../../assets/upvotes.png';
import downvotes from '../../assets/downvotes.png';
import './Questions.css'
import moment from 'moment'
import copy from 'copy-to-clipboard'


import Avtar from '../../components/Avtar/Avtar'
import DisplayAnswer from "./DisplayAnswer";
import { useSelector,useDispatch } from "react-redux";
import { postAnswer, deleteQuestion,voteQuestion } from '../../actions/question'



const QuestionsDetails = () => {

    const { id } = useParams()
    const questionsList = useSelector(state => state.questionsReducer)
    
    // var questionsList = [{

    //     _id: '1',
    //     upVotes: 3,
    //     downVotes:2,
    //     noOfAnswers: 2,
    //     questionsTitle: "What is a function",
    //     questionsBody: "It mean to be",
    //     questionsTags: ['C', 'CSS', 'Java', 'Python', 'HTML', 'Javascript', ],
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
    //     _id: '2',
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
    //     _id: '3',
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
    //         answeredOn: "jan 2",m
    //         userId: 2,
    //     }]
    // }]

   const [Answer, setAnswer]= useState('')
   const Navigate = useNavigate()
   const dispatch = useDispatch()
   const User = useSelector((state) => (state.currentUserReducer)) 
   const navigate = useNavigate()
   const location = useLocation()
   const url = 'http://localhost:3000'
    const handlePostAns = (e, answerLength) => {
        e.preventDefault()
    if(User === null){
        alert('Login or Signup answer a question')
        Navigate('/Auth')
    }else{
        if(Answer === ''){
        alert('Enter an answer before submitting')
        }else
        dispatch(postAnswer({ id, noOfAnswers: answerLength +1, answerBody: Answer, userAnswered: User.result.name, userId: User.result._id }))
    }
    }

    const handleShare = () => {
    copy(url+location.pathname)
    alert('Copied url : '+url+location.pathname)
    }
    
    const handleDelete = () =>{
        dispatch(deleteQuestion(id, Navigate))
    }

    const handleUpVote = () => {
        dispatch(voteQuestion(id, 'upVote', User.result._id))
    }

    const handleDownVote = () => {
        dispatch(voteQuestion(id, 'downVote', User.result._id))
    }

    return(
        <div className="question-details-page">
            {
           questionsList.data === null ?
           <h1>Loading....</h1> :
           <>
            {
              questionsList.data.filter(question => question._id === id).map(question => (
                <div key={question._id}>
                    {console.log(question)}
                    <section className="question-details-container">
                        <h1>{ question.questionTitle }</h1>
                        <div className="question-details-container-2">
                            <div className="question-votes">
                                <img src={upvotes} alt="" width='18' className="votes-icon" onClick={handleUpVote}/>
                                <p>{ question.upVote.length - question.downVote.length }</p>
                                <img src={downvotes} alt="" width='18' className="votes-icon" onClick={handleDownVote}/>
                            </div>
                            <div style={{width:"100%"}}>
                            <p className="question-body">{question.questionBody}</p>
                            <div className="question-details-tags">
                            {
                                
                                    question.questionTags.map((tag) =>(
                                    <p key={tag}>{tag}</p>
                                ))
                            }
                            </div>
                            <div className="question-actions-user">
                                <div>
                                    <button type="button" onClick={handleShare}>Share</button>
                                    {
                                        User?.result?._id === question?.userId && (
                                            <button type="button" onClick={handleDelete}>Delete</button>
                                        )
                                        
                                    }
                                 </div>
                                 <div>
                                    <p>asked {moment(question.askedOn).fromNow()}</p>
                                    <Link to={`/Users/${question.userId}`} className="user-link" style={{color:'#0086d'}}>
                                        <Avtar backgroundColor="orange" px='8px' py="5px">{question.userPosted.charAt(0).toUpperCase()}</Avtar>
                                        <div>
                                            {question.userPosted}
                                        </div>
                                    </Link>
                                 </div>
                            </div>
                        </div>
                    </div>
                </section>
                {
                    question.noOfAnswers !== 0 && (
                        <section>
                            <h3>{ question.noOfAnswers}Answers</h3>
                            <DisplayAnswer key={question._id} question={question} handleShare={handleShare}/>
                        </section>
                    )
                }
                <section className="post-ans-container">
                    <h3>Your Answer</h3>
                    <form onSubmit={ (e) => {handlePostAns(e, question.answer.length) }}>
                        <textarea name="" id="" cols="30" rows="10" onChange={e => setAnswer(e.target.value)}></textarea><br />
                        <input type="Submit" className="post-ans-btn" placeholder="Post your answer" />
                    </form>
                    <p>
                        Browse other Question tagged
                        {
                           
                                <Link to='/Tags'  className="ans-tags">New</Link>
                          
                        } or {
                            <Link to='/AskQuestion' style={{textDecoration: "none", color:"#009dff"}}> ask your own question </Link>
                        }
                    </p>
                </section>
            </div>
              ))
            }
           </>
            }           
        </div>
    )
}

export default QuestionsDetails