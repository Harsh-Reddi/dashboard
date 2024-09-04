import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { admin_login, messageClear } from "../../store/Reducers/authReducer";
import {PropagateLoader} from 'react-spinners'
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'


const AdminLogin = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {loader, errorMessage , successMessage} = useSelector(state => state.auth)

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(admin_login(state))
    // console.log(state);
  };


  const overrideStyle = {
    display: 'flex',
    margin : '0 24px',
    height: '24px',
    justifyContent: 'center',
    alignItems: 'center'
  }

  useEffect(() =>{
    if (errorMessage) {
      toast.error(errorMessage)
      dispatch(messageClear())
    }
    if (successMessage) {
      toast.success(successMessage)
      dispatch(messageClear())
      navigate('/')
    }
  },[errorMessage,successMessage])

  return (
    <div className="min-w-screen min-h-screen bg-[#d4deba] flex justify-center items-center">
      <div className="w-[350px] text-slate-800 p-2">
        <div className="bg-[#b4c587] p-4 rounded-md">
          <div className="h-[70px] flex justify-center items-center" >
            <div className="w-[180px] h-[120px]">
              <img className="w-full h-full"
                src="http://localhost:3000/images/logo.png"
                alt="logo"
              />
            </div>
          </div>
          <form onSubmit={submitHandle}>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email" className="font-medium">Email</label>
              <input
                onChange={inputHandle}
                value={state.email}
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
              <input
                onChange={inputHandle}
                value={state.password}
                className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md "
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                required
              />
            </div>
            <button disabled={loader? true: false} className="bg-slate-700 w-full hover:shadow-orange-300/ hover:shadow-lg text-white rounded-md px-7 py-2 mb-3">
              {
                loader? <PropagateLoader color="#fff" cssOverride={overrideStyle}/>  : "Login"
              }
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
