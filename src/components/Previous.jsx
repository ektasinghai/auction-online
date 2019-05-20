import React from 'react';
import PropTypes from 'prop-types';

function Previous(props){
  let previous = null;
  let clicked = false;
  function buttonClick() {
    clicked = true;
  }
  const ButtonStyle = {
    backgroundColor: 'red',
    border: 'none',
    padding: '5px',
    color: 'white',
  };
  const PreviousStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  };
  const PreviousListStyle = {
    backgroundColor: 'lightgrey',
    margin: '3px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  };
  if (!clicked) {
    previous = <button style={ButtonStyle} onClick={() => buttonClick()}>Previous Items</button>;
  } else {
    previous = <div>{props.itemList.map((item, index) =>
      <div style={PreviousListStyle} key={index}>
        <div>
          <h3>{item.item}</h3>
          <h3>${item.bid}</h3>
        </div>
        <h3>{item.bidder}</h3>
      </div>
    )}</div>;
  }
  return (
    <div style={PreviousStyle}>
      {previous}
    </div>
  );
}

Previous.propTypes = {
  itemList: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number,PropTypes.string])))
};

export default Previous;
