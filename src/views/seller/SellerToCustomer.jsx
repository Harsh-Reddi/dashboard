import React, { useEffect, useState } from 'react';
import { FaList, FaRegWindowClose } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { get_customer_message, get_customers } from '../../store/Reducers/chatReducer';
import { Link, useParams } from 'react-router-dom';


const SellerToCustomer = () => {

    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    const {userInfo} = useSelector(state => state.auth)
    const {customers, messages, currentCustomer} = useSelector(state => state.chat)
    const {customerId} = useParams()

    useEffect(() => {
        dispatch(get_customers(userInfo._id))
    },[])

    useEffect(() => {
        if(customerId){
            dispatch(get_customer_message(customerId))
        }
    },[])

    return (
        <div className='px-2 lg:px-7 py-5'>
            <div className='w-full bg-[#527e2f] px-4 py-4 rounded-md h-[calc(100vh-140px)]'>
                <div className='flex w-full h-full relative'>
                    <div className={`w-[280px] h-full absolute z-10 ${show ? '-left-[16px]': '-left-[336px]'} md:text-[#d0d2d6] md:left-0 md:relative transition-all `}>
                        <div className='w-full h-[calc(100vh-177px)] bg-[#86b670] md:bg-transparent overflow-y-auto '>
                            <div className='flex text-xl justify-between items-center p-4 md:p-0 md:px-3 md:pb-3 text-white'>
                                <h2>Customers</h2>
                                <span onClick={() => setShow(!show)} className='block cursor-pointer md:hidden'><FaRegWindowClose /></span>
                            </div>
                            {
                                customers.map((c,i) => <Link to={`/seller/dashboard/chat-customer/${c.fdId}`} className={`h-[60px] flex justify-start gap-2 items-center text-[#1b2712] md:text-white px-2 py-2 rounded-md bg-[#86b670] cursor-pointer `}>
                                    <div className='relative'>
                                        <img className='w-[38px] h-[38px] border-white border-2 max-w-[38px] p-[2px] rounded-full' src="http://localhost:3001/images/admin.jpg" alt="admin_img" />
                                        <div className='w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0 '></div>
                                    </div>
                                    <div className='flex justify-center items-start flex-col w-full'>
                                        <div className='w-full flex justify-between items-center'>
                                            <h2 className='text-base font-semibold'>{c.name}</h2>
                                        </div>
                                    </div>
                                </Link>)
                            }
                            
                        </div>
                    </div>
                    <div className='w-full md:w-[calc(100%-200px)] md:pl-4'>
                        <div className='flex justify-between items-center'>
                            {
                                currentCustomer && <div className='flex justify-start items-center gap-3'>
                                    <div className='relative'>
                                        <img 
                                        className='w-[45px] h-[45px] border-green-500 border-2 max-w-[45px] p-[2px] rounded-full' 
                                        src="http://localhost:3001/images/demo.png" 
                                        alt="seller_img" />
                                        <div className='w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0 '></div>
                                    </div>
                                    <h2 className='text-base font-semibold text-[#d0d2d6]'>{currentCustomer.name}</h2>
                                </div>
                            }
                            <div 
                            onClick={() => setShow(!show)}
                            className='w-[35px] h-[35px] flex  md:hidden rounded-sm bg-blue-500 hover:shadow-blue-500/50 justify-center items-center cursor-pointer text-[#d0d2d6] '>
                                <FaList />
                            </div>
                        </div>
                        <div className='py-4'>
                            <div className='bg-[#475569] h-[calc(100vh-290px)] rounded-md p-3 overflow-y-auto '>
                                {
                                    customerId ? messages.map((m,i) => {
                                        if (m.senderId === customerId) {
                                            return (
                                                <div className='w-full flex justify-start items-center'>
                                                    <div className='flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%] '>
                                                        <div>
                                                            <img className='w-[38px] h-[38px] border-2 border-white max-w-[38px] p-[3px] rounded-full' src="http://localhost:3001/images/admin.jpg" alt="admin_img" />
                                                        </div>
                                                        <div className='flex justify-center items-start flex-col w-full bg-blue-500 shadow-lg shadow-blue-500/50 text-[#d0d2d6] py-1 px-2 rounded-sm'>
                                                            <span>{m.message}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div className='w-full flex justify-end items-center'>
                                                    <div className='flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%] '>
                                                        <div className='flex justify-center items-start flex-col w-full bg-red-700 shadow-lg shadow-red-700/50 text-[#d0d2d6] py-1 px-2 rounded-sm'>
                                                            <span>{m.message}</span>
                                                        </div>
                                                        <div>
                                                            <img className='w-[38px] h-[38px] border-2 border-white max-w-[38px] p-[3px] rounded-full' src="http://localhost:3001/images/demo.png" alt="seller_img" />
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    }): <div className='w-full h-full flex justify-center items-center text-white gap-2 flex-col'>
                                        <span>Select Customer</span>
                                    </div>
                                } 
                            </div>
                        </div>
                        <form className='flex gap-3 '>
                            <input 
                            type="text" 
                            className='w-full flex justify-between px-2 border border-slate-700 items-center py-[5px] focus:border-blue-500 rounded-md bg-transparent outline-none text-[#d0d2d6] ' 
                            placeholder='input your message' />
                            <button className='shadow-lg bg-[#06b6b4] hover:shadow-cyan-500/50 font-semibold w-[75px] h-[35px] rounded-md flex justify-center items-center text-[#d0d2d6] '>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellerToCustomer;