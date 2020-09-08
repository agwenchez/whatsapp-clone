import React from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import { MoreVert, SearchOutlined, AttachFile, InsertEmoticon, Mic}from '@material-ui/icons';

function Chat() {
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />

        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile/>
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
          <p className="chat__message">
                <span className="chat__name">agwenchez

                </span>
              
              this is a message   
                <span className="chat__timestamp">
                    {new Date().toUTCString()}
                </span>
          </p>
          <p className="chat__message chat__receiver">
                <span className="chat__name">Omenyi

                </span>
              
                YOOO     
                <span className="chat__timestamp">
                    {new Date().toUTCString()}
                </span>
          </p>
          <p className="chat__message">
                <span className="chat__name">agwenchez

                </span>
              
           
                <span className="chat__timestamp">
                    {new Date().toUTCString()}
                </span>
          </p>
      </div>

      <div className="chat__footer">
            <InsertEmoticon/>
            <form>
                <input type="text" placeholder="type a message"/>
                <button type="submit">
                    Send message
                </button>
              
            </form>
            <Mic/>
      </div>
    </div>
  );
}

export default Chat;
