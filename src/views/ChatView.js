import {useSelector} from "react-redux";
import Messages from "../components/Messages";
import Form from "../components/Form";
import JoinChat from "../components/JoinChat";

const ChatView = () => {
  const isConnected = useSelector(state => state.isConnected);

  /* The following is not needed after the extension activities. JoinChat now
    *  handles connecting to the chat.
    *  const dispatch = useDispatch();
    *  useEffect(() => dispatch(connectToChat()), [dispatch]);
  */

  return (
    <div className="container">
      {
        isConnected ?
          <>
            <Messages />
            <Form />
          </>
        :
        <JoinChat />
      }
    </div>
  )
}

export default ChatView;
