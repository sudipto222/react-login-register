import React, { useState } from "react";
import "./Register.css";
import landingHeading from "../../assets/gradation.png";
import unchecked from "../../assets/unchecked.svg";
import checked from "../../assets/checked.svg";
import uncheckedSquare from "../../assets/uncheckedSquare.svg";
import checkedSquare from "../../assets/checkedSquare.svg";
import { Link } from "react-router-dom";




function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[checkbox1, setCheckbox1]= useState(true)
    const[checkbox2, setCheckbox2]= useState(false)
    const[checkbox3, setCheckbox3]= useState(false)
    const[checkbox4, setCheckbox4]= useState(false)
    const[checkbox5, setCheckbox5]= useState(false)

    
  
    function validateEmail(mail) {
      if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          mail
        )
      ) {
        return true;
      } else {
        alert("Please provide the right email formate");
        return false;
      }
    }
  
    function validatePassword(pass) {
      var decimal =
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,150}$/;
      if (pass.match(decimal)) {
        return true;
      } else {
        alert("Invalid password formate!");
        return false;
      }
    }
  
    const handleReg = () => {
      validateEmail(email)
      validatePassword(password)
    };

  return (
    <div className="register">
      <div className="register__heading">
        <img src={landingHeading} alt="alphametrica" />

        <div className="register__headingDesc">회원가입</div>
      </div>
      {/* Heading */}

      <div className="register__form">
          <div className="rName">
              <div className="rName__label">
              이름
              </div>
              <input type="text" placeholder="이채민" />
              <div className="reg__bottomLine"></div>
          </div>
          {/* Name */}

          <div className="rName">
              <div className="rName__label">
              휴대폰 <span>번호</span>
              </div>
              <input type="number" placeholder="+82 111 1111111" />
              <div className="reg__bottomLine"></div>
          </div>
          {/*  */}

          <div className="rName">
              <div className="rName__label">
              생년월일
              </div>
              <input type="text" placeholder="mm - dd-yyyy" />
              <div className="reg__bottomLine"></div>
          </div>
          {/*  */}

          <div className="rName">
              <div className="rName__label">
              Email
              </div>
              <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="john.doe@alphametics.com" />
              <div className="reg__bottomLine"></div>
          </div>
          {/*  */}

          <div className="rName">
              <div className="rName__label">
              비밀번호
              </div>
              <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="••••••••••" />
              <div className="reg__bottomLine"></div>
          </div>
          {/*  */}

          <div className="rName">
              <div className="rName__label">
              비밀번호 <span>확인</span>
              </div>
              <input type="password" placeholder="°°°°°°°°°°" />
              <div className="reg__bottomLine"></div>
          </div>
          {/*  */}
      </div>
      {/* Register Form */}

      <div className="reg__checkboxs">
         <div className="horizontal">
         <div className="checkbox__container">
              <img src={checkbox1?checked:unchecked} onClick={()=>setCheckbox1((prev)=>!prev)} alt="" />
              <div className="checkbox__label">최소 8자 이상</div>
          </div>
          {/* Checkbox container */}

          <div className="checkbox__containertwo">
              <img src={checkbox2?checked:unchecked} onClick={()=>setCheckbox2((prev)=>!prev)} alt="" />
              <div className="checkbox__label">최소 하나의 대문자</div>
          </div>
          {/* Checkbox container */}
         </div>

          <div className="horizontal">
          <div className="checkbox__container">
              <img src={checkbox3?checked:unchecked} onClick={()=>setCheckbox3((prev)=>!prev)} alt="" />
              <div className="checkbox__label">최소 하나의 숫자</div>
          </div>
          {/* Checkbox container */}

          <div className="checkbox__container">
              <img src={checkbox4?checked:unchecked} onClick={()=>setCheckbox4((prev)=>!prev)} alt="" />
              <div className="checkbox__label">최소 하나의 특수문자</div>
          </div>
          {/* Checkbox container */}
          </div>
      </div>
      {/* Reg Checkboxs */}

      <div className="checkboxSquare__container">
              <img src={checkbox5?checkedSquare:uncheckedSquare} onClick={()=>setCheckbox5((prev)=>!prev)} alt="" />
              <div className="checkbox__label">이용약관에 동의합니다</div>
          </div>
          {/* Checkbox Square container */}


          <div className="regFormButtons">
        
       <div onClick={handleReg} className="signupButton">
        가입하기
        </div>
       
        <div className="acc__signin">
        이미 계정이 있으신가요? &ensp;   <Link to="/login" style={{ color:"#707070"}}>로그인</Link>
        </div>
      </div>
      {/*Reg Form buttons */}

    </div>
  );
}

export default Register;
