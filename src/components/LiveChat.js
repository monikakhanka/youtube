import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomNames, generateRandomString } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  // for api polling after every 2000ms
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: generateRandomString(25),
        })
      );
    }, 500);

    return () => clearInterval(i);
  }, []);
  return (
    <>
      <div className="ml-2 mr-5 bg-gray-100 rounded-lg p-2 border border-black h-[400px] overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatMessages.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form
        className="w-[94%]  m-2 rounded-l-md border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Monika",
              message: liveMessage,
            })
          );

          setLiveMessage("");
        }}>
        <input
          type="text"
          className="px-2 w-[80%] rounded-l-md "
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="ml-2 rounded-sm w-[18%] bg-green-300">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
