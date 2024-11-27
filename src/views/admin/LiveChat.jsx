import React, { useEffect,useRef, useState } from 'react';
import { FaList, FaRegWindowClose } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { FaRegFaceGrinHearts } from "react-icons/fa6";
import { get_admin_message, get_sellers, send_message_seller_admin ,messageClear, updateSellerMessage} from '../../store/Reducers/chatReducer'
import {socket} from '../../utils/utils'
import toast from 'react-hot-toast';

const LiveChat = () => {
    const scrollRef = useRef()
    const [show, setShow] = useState(false)
    const { sellerId } = useParams()
    const [text,setText] = useState('')
    const [receiverMessage,setReceiverMessage] = useState('')
    const {sellers,activeSeller,seller_admin_message,currentSeller, successMessage} = useSelector(state => state.chat)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(get_sellers())
    })

    const send = (e) => {
        e.preventDefault() 
            dispatch(send_message_seller_admin({
                senderId: '', 
                receiverId: sellerId,
                message: text,
                senderName: 'Admin Support'
            }))
            setText('') 
    }

    useEffect(() => {
        if (sellerId) {
            dispatch(get_admin_message(sellerId))
        }
    },[sellerId])

    useEffect(() => {
        if (successMessage) {
            socket.emit('send_message_admin_to_seller',seller_admin_message[seller_admin_message.length - 1])
            dispatch(messageClear())
        }
    },[successMessage])

    useEffect(() => {
        socket.on('received_seller_message', msg => {
             setReceiverMessage(msg)
        })
         
    },[])
    useEffect(() => {
        if (receiverMessage) {
            if (receiverMessage.senderId === sellerId && receiverMessage.receiverId === '') {
                dispatch(updateSellerMessage(receiverMessage))
            } else {
                toast.success(receiverMessage.senderName + " " + "Send A message")
                dispatch(messageClear())
            }
        }
    },[receiverMessage])

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth'})
    },[seller_admin_message])


    return (
        <div className='px-2 lg:px-7 py-5'>
            <div className='w-full bg-[#527e2f] px-4 py-4 rounded-md h-[calc(100vh-140px)]'>
                <div className='flex w-full h-full relative'>
                    <div className={`w-[280px] h-full absolute z-10 ${show ? '-left-[16px]' : '-left-[336px]'} md:text-[#d0d2d6] md:left-0 md:relative transition-all `}>
                        <div className='w-full h-[calc(100vh-177px)] bg-[#86b670] md:bg-transparent overflow-y-auto '>
                            <div className='flex text-xl justify-between items-center p-4 md:p-0 md:px-3 md:pb-3 text-white'>
                                <h2>Sellers</h2>
                                <span onClick={() => setShow(!show)} className='block cursor-pointer md:hidden'><FaRegWindowClose /></span>
                            </div>
                            {
                                sellers.map((s, i) => <Link key={i} to={`/admin/dashboard/chat-sellers/${s._id}`} className={`h-[60px] flex justify-start gap-2 items-center text-white px-2 py-2 rounded-md cursor-pointer ${sellerId === s._id ?  'bg-[#86b670] ' : ''}  `}>
                                    <div className='relative'>
                                        <img className='w-[38px] h-[38px] border-white border-2 max-w-[38px] p-[2px] rounded-full' src={s.image} alt="" />
                                        {
                                            activeSeller.some(a => a.sellerId === s._id) && <div className='w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0'></div>
                                        }
                                    </div>

                                    <div className='flex justify-center items-start flex-col w-full'>
                                        <div className='flex justify-between items-center w-full'>
                                            <h2 className='text-base font-semibold'>{s.name}</h2>

                                        </div>
                                    </div>
                                </Link>
                                )
                            }
                        </div>
                    </div>
                    <div className='w-full md:w-[calc(100%-200px)] md:pl-4'>
                        <div className='flex justify-between items-center'>
                            {
                                sellerId && <div className='flex justify-start items-center gap-3'>
                                    <div className='relative'>
                                        <img
                                            className='w-[45px] h-[45px] border-green-500 border-2 max-w-[45px] p-[2px] rounded-full'
                                            src={currentSeller?.image}
                                            alt="seller_img" />
                                        <div className='w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0 '></div>
                                    </div>
                                    <span className='text-white'>{currentSeller?.name}</span>
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
                                    sellerId ? seller_admin_message.map((m, i) => {
                                        if (m.senderId === sellerId) {
                                            return (
                                                <div ref={scrollRef} className='w-full flex justify-start items-center'>
                                                    <div className='flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]'>
                                                        <div>
                                                            <img className='w-[38px] h-[38px] border-2 border-white rounded-full max-w-[38px] p-[3px]' src="http://localhost:3001/images/demo.jpg" alt="" />
                                                        </div>
                                                        <div className='flex justify-center items-start flex-col w-full bg-blue-500 shadow-lg shadow-blue-500/50 text-white py-1 px-2 rounded-sm'>
                                                            <span>{m.message}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div ref={scrollRef} className='w-full flex justify-end items-center'>
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
                                    }) : <div className='w-full h-full flex justify-center items-center flex-col gap-2 text-white'>
                                        <span><FaRegFaceGrinHearts /></span>
                                        <span>Select Seller </span>
                                    </div>
                                }
                            </div>
                        </div>
                        <form onSubmit={send} className='flex gap-3 '>
                            <input
                                readOnly={sellerId ? false : true} value={text} onChange={(e) => setText(e.target.value)} 
                                type="text"
                                className='w-full flex justify-between px-2 border border-slate-700 items-center py-[5px] focus:border-blue-500 rounded-md bg-transparent outline-none text-[#d0d2d6] '
                                placeholder='input your message' />
                            <button disabled={sellerId ? false : true} className='shadow-lg bg-[#06b6b4] hover:shadow-cyan-500/50 font-semibold w-[75px] h-[35px] rounded-md flex justify-center items-center text-[#d0d2d6] '>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiveChat;