import { css } from "@emotion/react";
import LoginWithKakao from "./LoginWithKakao";
import CenteredLayout from "../shared/layout/CenteredLayout";
import MainLogo from "../shared/MainLogo";

const LoginPage = () => {
  return (
    <CenteredLayout>
      <main css={homeContainer}>
        <div css={logoPosition}>
          <MainLogo />
        </div>
        <div css={loginPosition}>
          <LoginWithKakao />
        </div>
      </main>
    </CenteredLayout>
  );
};

const homeContainer = css`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  background: linear-gradient(
    134deg,
    #c4a1d7 9.81%,
    #86b3cc 39.06%,
    #8cbbd4 45.31%,
    #fff3ea 85.94%,
    #fff387 100%
  );
`;

const logoPosition = css`
  position: absolute;
  top: 20%;
  width: 26vh;
  height: 26vh;
  @media (min-height: 1000px) {
    width: 20vh;
    height: 20vh;
  }
`;

const loginPosition = css`
  position: absolute;
  bottom: 15%;
  width: 75%;
`;

export default LoginPage;
