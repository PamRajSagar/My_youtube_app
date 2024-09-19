import React from "react";

const ChatMessage = ({name,message}) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img
        className="h-9"
        alt="user"
        src="https://static.vecteezy.com/system/resources/previews/015/130/586/original/chat-user-icon-png.png"
        />
        <span className="font-bold px-2">{name}</span>

        <span>{message}</span>
        


        
        </div>
  );
};

export default ChatMessage;
