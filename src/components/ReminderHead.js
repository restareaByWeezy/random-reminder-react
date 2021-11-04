import React, { useCallback, useState, useEffect } from "react";
import styled from "styled-components";

const ReminderHeadBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const Title = styled.div`
  width: 100%;
  text-align: center;
`;

const PhraseWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Phrase = {
  boxSizing: "border-box",
  width: "300px",
  height: "60px",
  margin: "7px",
  marginTop: "10px",
  border: "solid orange 5px",
  borderRadius: "10px",
  backgroundColor: "white",
  fontSize: "50PX",
  justifyContent: "center",
  textAlign: "center",
};

const ButtonStyle = {
  height: "3rem",
  margin: "auto",
  padding: "0.1rem",
  borderRadius: "0.5rem",
  border: "solid 0.1rem",
  fontSize: "0.5rem",
};

function ReminderHead(props) {
  //useState
  const [randomItem, setRandomItem] = useState("");

  // function
  function randomValueFromArray(array) {
    let random = Math.floor(Math.random() * array.length);
    if (array.length > 0) {
      return array[random];
    }
  }

  const shuffleItem = useCallback(
    () => setRandomItem(randomValueFromArray(props.list)),
    [props.list] 
  );
  // 왜 함수로 다시 감싸줘야됨...??

  useEffect(() => {
    console.log(props.isInitial);

      if(props.isInitial) {
        shuffleItem();
      }
  }, [props.list]);

  //state를 하나 더 많든다 왜...?
  // 문제점 값을 추가할 때 마다 props값을 건드려버려서
  // shuffleItem이 실행됨
  //useEffect 안 쪽에서 state를사용 randomItem는 이미 state로지정했음

  return (
    <ReminderHeadBlock>
      <Title>
        <h1>Random Reminder</h1>
      </Title>
      <br />
      <PhraseWrapper>
        <div style={Phrase}>{randomItem}</div>
        {/* {randomItem}얘는 왜 안됨? */}
        <button
          style={ButtonStyle}
          onClick={() => {
           props.setIsInitial(false); 
            shuffleItem();
          }}
        >
          SHUFFLE
        </button>
        {/* 왜 되지...???? ㅋㅋㅋ */}
      </PhraseWrapper>
    </ReminderHeadBlock>
  );
}

export default ReminderHead;
