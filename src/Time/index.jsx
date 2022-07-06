import React from "react";

import * as Styled from "./styled";

export default function Time({ time, content, ip }) {
  let body = `내용: ${content} $_$ \r\n아이피: ${ip}\r\n플랫폼: ${navigator.platform}`;
  body = body.replace(/(\n|\r\n)/g, "%0a");

  return (
    <Styled.Container>
      <div>{time}</div>
      <div>{content}</div>
      <div>
        <a href={`sms:010-2717-2868&body=${body.replace("$_$", "성공")}`}>
          성공
        </a>
        <a href={`sms:010-2717-2868&body=${body.replace("$_$", "실패")}`}>
          실패
        </a>
      </div>
    </Styled.Container>
  );
}
