import { useDispatch } from "react-redux";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function UnderStandingFeedback (){
    const [understandInput, setUnderstandInput] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const addUnderstandFeedback = () => {
        console.log('in addFeeling dispatch', understandInput);
        if (understandInput == '') {
            return alert("Please add your understanding from 1-5")
        } else{
        dispatch({
            type: 'ADD_UNDERSTAND',
            payload: understandInput
        })}
        history.push('/supported')
    };

    return(
        <>
            <div>
                <h1>How well are you understanding the content?</h1>
                <h3>Understanding?</h3>
                <input
                    value={understandInput}
                    type='number'
                    onChange={(event) => { setUnderstandInput(event.target.value) }}
                    placeholder="Feeling 1-5"
                />
            </div>
            <div>
                <button onClick={addUnderstandFeedback}>NEXT</button>
            </div>
        </>
    )
};
export default UnderStandingFeedback;