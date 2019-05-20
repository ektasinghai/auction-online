import React from 'react';
// import PropTypes from 'prop-types';
import Message from './Message';
import Moment from 'moment';

function MessageList(){

  let masterMessageList = [
    {
      name: 'example1',
      timestamp: new Moment(),
      formattedTimeStamp: (new Moment()).fromNow(true),
      message: 'hello'
    },
    {
      name: 'example2',
      timestamp: new Moment(),
      formattedTimeStamp: (new Moment()).fromNow(true),
      message: 'test 2'
    },
    {
      name: 'example3',
      timestamp: new Moment(),
      formattedTimeStamp: (new Moment()).fromNow(true),
      message: 'third post'
    },
  ];

  const MessageListStyle = {
    padding: '2px',
    backgroundColor: 'grey',
    width: '100%'
  };

  return (
    <div style={MessageListStyle}>
      {masterMessageList.map((message, index) =>
        <Message name={message.name} time={message.formattedTimeStamp} content={message.message} key={index}/>
      )}
    </div>
  );
}

// MessageList.propTypes = {
// };

export default MessageList;
