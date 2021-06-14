import React, { useState } from "react";
import "./Login.css";
import landingHeading from "../../assets/gradation.png";
import emailIcon from "../../assets/email.png";
import passwordIcon from "../../assets/password.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userEmail, setUserEmail] = useState("test@luxpmsoft.com");
  const [userPassword, setUserPassword] = useState("test1234!");
  const history = useHistory();

  const handleLogin = () => {
    if (email == userEmail && password == userPassword) {
      history.push("/blank");
    }
  };

  return (
    <div className="login">
      <div className="login__heading">
        <img src={landingHeading} alt="alphametrica" />

        <div className="login__headingDesc">로그인</div>
      </div>

      <div className="login__form">
        <div className="email__container">
          <div className="email__label">Email</div>
          <div className="email__icon__input">
            <img src={emailIcon} alt="icon" />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="sabahat@gmail.com"
            />
          </div>
          <div className="bottomLine"></div>
        </div>{" "}
        {/* Email */}
        <div className="password__container">
          <div className="email__label">비밀번호</div>
          <div className="email__icon__input">
            <img src={passwordIcon} alt="icon" />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="**********"
            />
          </div>
          <div className="bottomLine"></div>
        </div>
        {/* Password */}
        <div className="forgotPassword">
          비밀번호 <span>찾기</span>
        </div>
        {/* Forgot Password */}
      </div>
      {/* login Form */}

      <div className="formButtons">
        <div onClick={handleLogin} className="loginButton pointer">
          로그인
        </div>

        <div className="noAcc__signup">
          계정이 없으신가요? &ensp;{" "}
          <Link style={{ color: "#707070" }} to="/register">
            가입하기
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
