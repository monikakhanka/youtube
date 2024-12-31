import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        alt="user icon"
        className="w-9 my-1 rounded-full mr-2"
      />
      <span className="font-bold">{name}</span>
      <span className="ml-2">{message}</span>
    </div>
  );
};

export default ChatMessage;
