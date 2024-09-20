import { Link } from "@tanstack/react-router";

import PC_INSTALL_IMG from "./assets/install-pc.png";

const Main = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <img style={{ width: "60%" }} src={PC_INSTALL_IMG} />

      <br />

      <p>대충 설치 설명 페이지</p>

      <Link to="/posts">설치 없이 사용하기</Link>
    </div>
  );
};

export { Main };
