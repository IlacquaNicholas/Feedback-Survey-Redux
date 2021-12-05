import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React from 'react';
import axios from 'axios';


function ReviewFeedback(){

    const addFeeling = useSelector((store)=> store.feelingReducer)
    const addUnderstand = useSelector((store) => store.understandReducer)
    const addSupport = useSelector((store) => store.supportReducer)
    const addComment = useSelector((store) => store.commentReducer)

    const history = useHistory();

    const reviewFeedback = {
        feeling: `${addFeeling}`,
        understanding: `${addUnderstand}`,
        support: `${addSupport}`,
        comments: `${addComment}`
    }

    const submitFeedback = ()=> {
        console.log('In POST 1', reviewFeedback );
        axios({
            method:'POST',
            url:'/postReview',
            data: reviewFeedback
        }).then((response)=>{
            console.log('in POST response', response);
            
        }).catch((error)=>{
            console.log('In error on sending to DB',error);
        })
        history.push('/thankyou')
    }


    return(
        <div>
            <h1>Review Your Feedback</h1>
            <h4>Feeling Feedback: {addFeeling}</h4>
            <h4>Understanding Feedback: {addUnderstand}</h4>
            <h4>Support Feedback: {addSupport}</h4>
            <h4>Comments Feedback: {addComment}</h4>
            <button onClick={submitFeedback}>Submit</button>
        </div>

    )
}

export default ReviewFeedback