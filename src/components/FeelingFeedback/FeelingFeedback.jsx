import { useDispatch } from "react-redux";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function FeelingFeedback (){
    const [feelingInput, setFeelingInput] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const addFeelingFeedback = () =>{
        console.log('in addFeeling dispatch', feelingInput );

        if (feelingInput === ''){
            return alert("Please add how your support from 1-5")
        }else{
        dispatch({
            type: 'ADD_FEELING',
            payload: feelingInput
        })}
        history.push('/understanding')
    };



    return(
        <>
        <div>
            <h1>How are you feeling today?</h1>
            <h3>Feeling?</h3>
            <input 
            value={feelingInput}
            type = 'number'
            onChange={(event) => { setFeelingInput(event.target.value) }}
            placeholder = "Feeling 1-5"
            />
        </div>
        <div>
            <button onClick={addFeelingFeedback}>NEXT</button>
        </div>
        </>

    )
};

export default FeelingFeedback;