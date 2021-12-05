import { useDispatch } from "react-redux";
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


function SupportFeedback (){
    const [supportInput, setSupportInput] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const addSupportFeedback = () => {
        console.log('in addFeeling dispatch', supportInput);
        if (supportInput == ''){
            return alert("Please add your support from 1-5")
        }else {
        dispatch({
            type: 'ADD_SUPPORT',
            payload: supportInput
        })}
        history.push('/comments')
    };

    return(
        <>
            <div>
                <h1>How well are you being supported?</h1>
                <h3>Support?</h3>
                <input
                    value={supportInput}
                    type='number'
                    onChange={(event) => { setSupportInput(event.target.value) }}
                    placeholder="Feeling 1-5"
                />
            </div>
            <div>
                <button onClick={addSupportFeedback}>NEXT</button>
            </div>
        </>
        

    )
};

export default SupportFeedback;