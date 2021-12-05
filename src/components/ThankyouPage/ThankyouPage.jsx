import { useHistory } from 'react-router-dom';

function ThankyouPage (){
const history = useHistory();

const leaveNewFeedback = ()=>{
    history.push('/')
}

    return(
    <div>
        <h1>Thank You!</h1>
            <button onClick={leaveNewFeedback}>Leave New Feedback</button>
    </div>

    )
};
export default ThankyouPage;