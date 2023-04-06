import { authParams, getAuth } from "@/API/oidc/getAuth"
import { useMemo, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom"
import styled from "styled-components"

function confirmAuth(params: authParams) {
  getAuth(params).then((data) => {
    console.log(`Auth confirmAuth`, data)
  });
}

export function Auth() {
  const [ searchParams ] = useSearchParams();
  const params: authParams = useMemo(() => Object.fromEntries(
    ['client_id', 'response_type', 'scope', 'redirect_uri', 'state', 'nonce']
      .map(v => [v, searchParams.get(v)])
      .filter(([_, v]) => v !== null)
    ), [searchParams]);

  const [isRedirecting, setIsRedirecting] = useState(false)

  return (
    <Panel>
      { isRedirecting
        ? <div>正在跳转……</div>
        :
        <>
          <Title>“招新系统”想要访问你的冰岩账号</Title>
          <Information>
            <p>如果你授予此权限，<strong>“招新系统”</strong>将能够：</p>
            <ul>
              <li>获取你的冰岩账号的基本信息</li>
            </ul>
          </Information>
          <ButtonWrapper>
            <Button buttonType="confirm" onClick={() => {
              confirmAuth(params);
              setIsRedirecting(true);
            }}>授权</Button>
            <Button buttonType="cancel">取消</Button>
          </ButtonWrapper>
        </>
      }
    </Panel>
  )
}

const Panel = styled.article`
  margin: 0 30px;

  flex: 1;

  display: flex;
  flex-direction: column;
`

const Title = styled.header`
  
`

const Information = styled.section`
  
`

const ButtonWrapper = styled.footer`
  margin: 20px 0;
  box-sizing: border-box;
  width: 100%;
  text-align: center;
`

const Button = styled.button`
  display: inline-block;
  width: 80%;
  height: 38px;
  margin: 5px;
  border: none;
  border-radius: 38px;

  cursor: pointer;

  color: ${(props: {buttonType: string}) => 
    props.buttonType as string === "cancel" ? "orangered" : "white"};
  background-color: ${(props: {buttonType: string}) => 
    props.buttonType as string === "cancel" ? "transparent" : "#ffb448"};
`