import React, { useEffect, useState } from "react";
import axios from "axios";

import * as Styled from "./styled";
import Time from "../Time";

function App() {
  const [ip, setIP] = useState("");

  useEffect(() => {
    (async function () {
      const res = await axios.get("https://geolocation-db.com/json/");
      setIP(res.data.IPv4);
    })();
  }, []);

  return (
    <Styled.Container>
      <Styled.TimeWrapper>
        <Time time="09:00" content="출석" ip={ip}></Time>
        <Time time="10:00" content="오전 공부1" ip={ip}></Time>
        <Time time="11:00" content="오전 공부2" ip={ip}></Time>
        <Time time="12:00" content="오전 공부3" ip={ip}></Time>
        <Time time="13:00" content="오전 공부4" ip={ip}></Time>
        <br />
        <Time time="14:00" content="점심 식사" ip={ip}></Time>
        <br />
        <Time time="15:00" content="오후 공부1" ip={ip}></Time>
        <Time time="16:00" content="오후 공부2" ip={ip}></Time>
        <Time time="17:00" content="오후 공부3" ip={ip}></Time>
        <Time time="18:00" content="오후 공부4" ip={ip}></Time>
        <br />
        <Time time="19:00" content="저녁 식사" ip={ip}></Time>
        <br />
        <Time time="20:00" content="저녁 공부1" ip={ip}></Time>
        <Time time="21:00" content="저녁 공부2" ip={ip}></Time>
        <br />
        <Time time="21:00" content="저녁 운동" ip={ip}></Time>
      </Styled.TimeWrapper>
      <Styled.PostIt>
        <div>* 주의사항</div>
        <br />
        <div>일주일 fail count 5회</div>
        <br />
        <div>이를 어길시 ...</div>
      </Styled.PostIt>
    </Styled.Container>
  );
}

export default App;
