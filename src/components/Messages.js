import { useSelector } from "react-redux";

const Messages = () => {
    const messages = useSelector(state => state.messages);

    return (
    <>
    <h1> Talk to doctors </h1>
    <table className="rainbow-text table table-striped table-bordered my-4">
        <tbody>
            {
                messages.map((message,  index) =>
                    <tr key={`msg-${index}`}>
                        <td>{message}</td>
                    </tr>)
            }
        </tbody>
    </table>
    </>
 )}

export default Messages;