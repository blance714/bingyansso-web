import { getToken } from "@/API/user/getToken";
import { setJWT } from "@/tools/jwt";
import { useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";

export function OAuthCallback() {
  const { type } = useParams();
  const [ searchParams ] = useSearchParams();
  const navigate = useNavigate()
  const code = searchParams.get("code");
  
  useEffect(() => {
    getToken(type!, { 
      type: type + "_code", code: code!,
    }).then((data) => {
      console.log(`LoginPanel login`, data);
      setJWT(data.user_jwt, data.expire_at);

      searchParams.delete("code");
      navigate({ pathname: '/', search: searchParams.toString() });
    });
  }, []);

  return (
    <Panel>
      { type && code
        ? <div>正在连接OAuth服务器……</div>
        : <div>参数错误。缺少：{(type ? "" : "type") + (code ? "" : "code")}</div>
      }
    </Panel>
  )
}

const Panel = styled.article`
  margin: 0 30px;
`