import { UserAuth } from "../context/AuthContext";

const Message = ({ message }) => {
  //   console.log(message);

  const { currentUser } = UserAuth();
  return (
    <div>
      <div
        className={`chat ${
          message.User === currentUser.displayName ? "chat-start" : "chat-end"
        }`}
      >
        {/* {message.Photo && (
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt="User Avatar" src={message.Photo} />
            </div>
          </div>
        )} */}

        <div className="chat-header">{message.User}</div>
        <div className="chat-bubble">{message.message}</div>
      </div>
    </div>
  );
};
export default Message;
