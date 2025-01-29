import { useState } from "react";
import SignupImage from "../assets/signup-image.svg";
import eyeClose from "../assets/eye-close-pass.png"
import eyeOpen from "../assets/eye-open-pass.png"
import googleIcon from "../assets/google-icon.png"
import { Link, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUserRequest } from "../store/user/userAction";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isChecked , setIsChecked] = useState(false)
  // const [passwordShow , setPasswordShow] = useState(true)
  const [visible , setVisible] = useState(true)
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const validate = () => {
    const errors = {};
    console.log(errors)
    if (!name) {
      errors.name = "Name is Required";
    } else if (!/^[A-Za-z\s\-']+$/.test(name)) {
      errors.name = "Name is Not Valid";
    }
    if (!email) {
      errors.email = "Email is Required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      errors.email = "Email is Not Valid";
    }
    if (!password) {
      errors.password = "passsword is Required";
    }else if(password.length < 8){
      errors.password = "password atleast 8 character"
    }
    if(isChecked === false){
      return alert ("Accept the Terms and Condition") 
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    if (validate()) {
      console.log("Form submitted:", { name,email, password });
      // Reset form fields
      setName('');
      setEmail('');
      setPassword('');
      setErrors({});
      dispatch(addUserRequest({name,email,password}))
      navigate('/')
      alert("Signup Successfull")
    }
  };

  const handlPassword = () =>{
  
}

  return (
    <>
      <section className="login-page">
        <div className="login-image">
          <img src={SignupImage} />
        </div>
        <div className="login-form">
          <h2>Signup</h2>
          <p>Sign Up to Login</p>

          <form onSubmit={handleSubmit}>
            <div>
              <div className="input-name">
                <label htmlFor="full-name">
                  Full Name<span>*</span>
                </label>
              </div>
              <input
                type="text"
                id="full-name"
                name="full-name"
                placeholder="Full Name"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
              />
              {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
            </div>
            <div>
              <div className="input-name">
                <label htmlFor="email-id">
                  Email ID<span>*</span>
                </label>
              </div>
              <input
                type="text"
                id="email-id"
                name="email"
                placeholder="xyz@gmail.com"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />
              {errors.email && (
                <span style={{ color: "red" }}>{errors.email}</span>
              )}
            </div>
            <div>
              <div className="input-name">
                <label htmlFor="password">
                  Password<span>*</span>
                </label>
              </div>
              <input
                type={visible ? "text" : "password"}
                id="password"
                name="pass"
                placeholder="password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />
               <img src={visible ? eyeOpen : eyeClose} id='passwordShow' onClick={()=>{setVisible(!visible)}}/>
              {errors.password && (
                <span style={{ color: "red" }}>{errors.password}</span>
              )}
            </div>
            <div className="login-btn">
              <button type="submit">SignUp</button>
            </div>
          </form>
          <div id="login-with-google">
            <button type="button"> <img src={googleIcon} /> Sign up with Google</button>
          </div>
          <div id="checkbox">
            <p>
              <input type="checkbox" onClick={()=>setIsChecked(true)}/>I accept Terms & Conditions
            </p>
          </div>
          <p className="create-account">
            Have an account ?<Link to={"/"}>Login ?</Link>
          </p>
        </div>
      </section>
    </>
  );
}
export default Signup;
