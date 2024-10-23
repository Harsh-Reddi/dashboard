import React from 'react';

const SellerToAdmin = () => {
    return (
        <div className='px-2 lg:px-7 py-5'>
            <div className='w-full bg-[#527e2f] px-4 py-4 rounded-md h-[calc(100vh-140px)]'>
                <div className='flex w-full h-full relative'>
                    
                    <div className='w-full md:pl-4'>
                        <div className='flex justify-between items-center'>
                            {
                                <div className='flex justify-start items-center gap-3'>
                                    <div className='relative'>
                                        <img 
                                        className='w-[45px] h-[45px] border-green-500 border-2 max-w-[45px] p-[2px] rounded-full' 
                                        src="http://localhost:3000/images/demo.png" 
                                        alt="seller_img" />
                                        <div className='w-[10px] h-[10px] bg-green-500 rounded-full absolute right-0 bottom-0 '></div>
                                    </div>
                                    <h2 className='text-base font-semibold text-[#d0d2d6]'>Support</h2>
                                </div>
                            }
                        </div>
                        <div className='py-4'>
                            <div className='bg-[#475569] h-[calc(100vh-290px)] rounded-md p-3 overflow-y-auto '>
                                <div className='w-full flex justify-start items-center'>
                                    <div className='flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%] '>
                                        <div>
                                            <img className='w-[38px] h-[38px] border-2 border-white max-w-[38px] p-[3px] rounded-full' src="http://localhost:3000/images/admin.jpg" alt="admin_img" />
                                        </div>
                                        <div className='flex justify-center items-start flex-col w-full bg-blue-500 shadow-lg shadow-blue-500/50 text-[#d0d2d6] py-1 px-2 rounded-sm'>
                                            <span>How are you?</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full flex justify-end items-center'>
                                    <div className='flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%] '>
                                        <div className='flex justify-center items-start flex-col w-full bg-red-700 shadow-lg shadow-red-700/50 text-[#d0d2d6] py-1 px-2 rounded-sm'>
                                            <span>Hi, I'm good. How are you?</span>
                                        </div>
                                        <div>
                                            <img className='w-[38px] h-[38px] border-2 border-white max-w-[38px] p-[3px] rounded-full' src="http://localhost:3000/images/demo.png" alt="seller_img" />
                                        </div>
                                    </div>
                                </div>
                                <div className='w-full flex justify-start items-center'>
                                    <div className='flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%] '>
                                        <div>
                                            <img className='w-[38px] h-[38px] border-2 border-white max-w-[38px] p-[3px] rounded-full' src="http://localhost:3000/images/admin.jpg" alt="admin_img" />
                                        </div>
                                        <div className='flex justify-center items-start flex-col w-full bg-blue-500 shadow-lg shadow-blue-500/50 text-[#d0d2d6] py-1 px-2 rounded-sm'>
                                            <span>I need some Help?</span>
                                        </div>
                                    </div>
                                </div>
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

export default SellerToAdmin;