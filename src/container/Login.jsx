import LoginImage from '../assets/quiz-image.svg'
import eyeClose from "../assets/eye-close-pass.png"
import eyeOpen from "../assets/eye-open-pass.png"
import googleIcon from "../assets/google-icon.png"
import { Link, useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserRequest } from '../store/user/userAction'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [visible, setVisible] = useState(false)
    const [error, setError] = useState({})
    const navigate = useNavigate();
    const users = useSelector(state => state.users.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUserRequest())
    }, [dispatch])

    function validate() {
        const errors = {}
        if (!email) {
            errors.email = 'Email is Required'
        } else if (!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))) {
            errors.email = 'Email is Invalid'
        }
        if (!password) {
            errors.password = 'Password is Required'
        } else if (password.length < 8) {
            return alert('passsword atleast 8 charecter')
        }
        setError(errors)
        return Object.keys(errors).length === 0
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (validate()) {

            const loggedInUser = users.find((u) => u.email === email && u.password === password)
            if (loggedInUser) {
                localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser))
                navigate("/dashboard")
            } else {
                alert("Incorrect email or password")
            }
            setEmail('')
            setPassword('')
            setError({})


        }
    }


    return (
        <>
            <section className="login-page" >
                <div className="login-image">
                    <img src={LoginImage} />
                </div>
                <div className="login-form" id='login-form'>
                    <h2>Login</h2>
                    <p>Please Enter Your Details below</p>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div className="input-name"><label htmlFor="email-id"> Email ID<span>*</span></label></div>
                            <input type="text" id="email-id" name="email-id" placeholder="xyz@gmail.com" value={email} onChange={(e) => (setEmail(e.target.value))} />
                            {error.email && <span style={{ color: 'red' }}>{error.email}</span>}
                        </div>
                        <div>
                            <div className="input-name"><label htmlFor="password">Password<span>*</span></label></div>
                            <input type={visible ? "text" : "password"} id="password" name="password" placeholder="password" value={password} onChange={(e) => (setPassword(e.target.value))} />
                            <img src={visible ? eyeOpen : eyeClose} id='passwordShow' onClick={()=>(setVisible(!visible))}/>
                            {/* <img src={eyeClose} id='passwordHide' /> */}
                            {error.passsword && <span style={{ color: 'red' }}>{error.password}</span>}
                        </div>
                        <div className="login-btn">
                            <button type="submit" >Login</button>
                        </div>
                    </form>
                    <div id="login-with-google">
                        <button type="button"> <img src={googleIcon} />Sign up with Google</button>
                    </div>

                    <p className="create-account"> Don't have an account? <Link to={"/signup"}>Sign up?</Link></p>
                </div>
            </section>
        </>
    )
}
export default Login