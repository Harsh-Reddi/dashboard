import React,{useState, useEffect} from "react";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {PropagateLoader} from 'react-spinners'
import toast from 'react-hot-toast'
import { overrideStyle } from "../../utils/utils";
import { seller_login, messageClear  } from "../../store/Reducers/authReducer";

const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {loader, successMessage, errorMessage} = useSelector(state => state.auth)
    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const submitHandle = (e) => {
        e.preventDefault();
        // console.log(state);
        dispatch(seller_login(state))
    }
    useEffect(() => {
      if (successMessage) {
        toast.success(successMessage)
        dispatch(messageClear())
        navigate('/')
      }
      if (errorMessage) {
        toast.error(errorMessage)
        dispatch(messageClear())
      }
    },[successMessage, errorMessage])

  return (
    <div className="min-w-screen min-h-screen bg-[#d4deba] flex justify-center items-center">
      <div className="w-[350px] text-slate-800 p-2">
        <div className="bg-[#b4c587] p-4 rounded-md">
          <h2 className="text-xl mb-3 font-bold">Welcome to Ecommerce</h2>
          <p className="text-sm mb-3 font-medium"> Login to your Account </p>

          <form onSubmit={submitHandle}>
            {/* <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="name">Name</label>
              <input
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md "
                type="text"
                name="name"
                placeholder="Name"
                id="name"
                required
              />
            </div> */}
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email" className="font-medium">Email</label>
              <input onChange={inputHandle} value={state.email}
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md "
                type="email"
                name="email"
                placeholder="Email"
                id="email"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="password" className="font-medium">Password</label>
              <input onChange={inputHandle} value={state.password}
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md "
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                required
              />
            </div>
            {/* <div className="flex items-center w-full gap-3 mb-3">
              <input
                className="w-4 h-4 text-orange-500 overflow-hidden bg-gray-200 rounded border-gray-300 focus:ring-orange-500"
                type="checkbox"
                name="checkbox"
                id="checkbox"
              />
              <label htmlFor="checkbox">
                {" "}
                I agree to privacy policy & terms{" "}
              </label>
            </div> */}

            {/* <button className="bg-slate-700 w-full hover:shadow-orange-300/ hover:shadow-lg text-white rounded-md px-7 py-2 mb-3">
              SignIn
            </button> */}
            <button disabled={loader? true: false} className="bg-slate-700 w-full hover:shadow-orange-300/ hover:shadow-lg text-white rounded-md px-7 py-2 mb-3">
              {
                loader? <PropagateLoader color="#fff" cssOverride={overrideStyle}/>  : "Sign In"
              }
            </button>
            <div className="flex items-center mb-3 gap-3 justify-center">
              <p>
                Don't Have an Account?{" "}
                <Link className="font-bold" to="/register">
                  SignUp
                </Link>
              </p>
            </div>
            <div className="w-full flex justify-center items-center mb-3">
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
              <div className="w-[10%] flex justify-center items-center">Or</div>
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
            </div>

            <div className="flex justify-center items-center gap-3">
              <div className="w-[135px] h-[35px] flex rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden text-white">
                <span>
                  <FaGoogle />
                </span>
              </div>
              <div className="w-[135px] h-[35px] flex rounded-md bg-blue-700 shadow-lg hover:shadow-blue-700/50 justify-center cursor-pointer items-center overflow-hidden text-white">
                <span>
                  <FaFacebook />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
