import {useState} from "react";
import {useDispatch} from "react-redux";
import { sendToChat } from "../redux/actions";

const Form = () => {
    const [messageTxt, setMessageTxt] = useState("");

    const dispatch = useDispatch();

    const onKeyUp = event => {
        if (event.keyCode === 13)
            dispatch(sendToChat(messageTxt));
    }
    return (
        <form onSubmit={e => e.preventDefault()}>
            <div className="row">
                <div className="col">
                    <input aria-label="Your message" type="text" className="form-control" id="messageTxt"
                        placeholder="Enter your message" value={messageTxt}
                        onChange={e => setMessageTxt(e.target.value)}
                        onKeyUp={onKeyUp} />
                </div>
                <div className="col-auto">
                    <button type="button" className="btn btn-primary float-right"
                            onClick={() => dispatch(sendToChat(messageTxt))}
                            >
                        Send
                    </button>
                </div>
            </div>
            <div className="row my-2">
                
            </div>
        </form>
    )
}

export default Form;