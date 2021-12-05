import { useDispatch } from "react-redux";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


function CommentFeedback (){
    const [commentInput, setCommentInput] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const addCommentFeedback = () => {
        console.log('in addFeeling dispatch', commentInput);
        if (commentInput === ''){
            return alert("Please leave your comment")
        }else {
        dispatch({
            type: 'ADD_COMMENT',
            payload: commentInput
        })}
        history.push('/review')
    };

    return (
        <>
            <div>
                <h1>Any comments you want to leave?</h1>
                <h3>Comments</h3>
                <input
                    value={commentInput}
                    type='text'
                    onChange={(event) => { setCommentInput(event.target.value) }}
                    placeholder="Comments"
                />
            </div>
            <div>
                <button onClick={addCommentFeedback}>NEXT</button>
            </div>
        </>
    )
};

export default CommentFeedback;