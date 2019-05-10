import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MessageList from './MessageList';
import Compose from './Compose';

function Chat(props){
  const ChatStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
  return (
    <div style ={ChatStyle}>
      <MessageList />
      <Compose />
    </div>
  );
}

Chat.propTypes = {
};

export default Chat;
