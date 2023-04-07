import { getEmailCode, getPhoneCode } from "@/API/user/getCode";
import { InputHTMLAttributes, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { InputBox } from "./InputBox";

export default function RequestCodeField({ code, onChange, logoSrc, type, account, valid, ...params }: {
  code: string,
  type: "phone" | "email",
  logoSrc?: string,
  account: string,
  valid?: boolean
} & InputHTMLAttributes<HTMLInputElement>) {
  const [remainingTime, setRemainingTime] = useState(0);
  const timerRef = useRef<number | undefined>();
  useEffect(() => {
    if (remainingTime > 0 && timerRef.current === undefined) {
      timerRef.current = window.setInterval(() => {
        setRemainingTime(remainingTime - 1);
      }, 1000);
      return () => {
        window.clearInterval(timerRef.current);
        timerRef.current = undefined;
      }
    }
  }, [remainingTime])

  const getCode = () => {
    (type === "phone" ? getPhoneCode : getEmailCode)(account).then(() => {
      setRemainingTime(60);
    }).catch(reason => console.log(`getCode Error: ${reason}`));
  }

  const requesting = remainingTime > 0;
  return (
    <Wrapper>
        <InputBox
          value={code}
          onChange={onChange}
          logoSrc={logoSrc}
          placeholder="请输入验证码"
          autoComplete="one-time-code"
          inputMode="numeric"
          {...params}
        />
        <Button valid={ (valid === undefined || valid) && !requesting }
          style={{ opacity: requesting ? 0.3 : 1 }}
          onClick={() => getCode()}
        >
          {requesting ? `已发送(${remainingTime}s)` : "发送验证码"}
        </Button>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.a`
  color: #c78527;
  font-size: 13px;
  cursor: ${(props: { valid: boolean }) => props.valid ? "pointer" : "not-allowed"};
`;