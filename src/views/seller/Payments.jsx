import React,{forwardRef} from 'react';
import { MdCurrencyExchange } from "react-icons/md";
import { FixedSizeList as List } from 'react-window';

function handleOnWheel({ deltaY }) {
    console.log('handleOnWheel',deltaY)
}

const outerElementType = forwardRef((props, ref) => (
    <div ref={ref} onWheel={handleOnWheel} {...props} /> 
 ))

const Payments = () => {

    const array = [1,2,3,4,5,6,7,8,9,10]
    const Row = ({ index, style }) => {
        return (
        <div style={style} className='flex text-sm text-white font-medium'>
            <div className='w-[25%] p-2 whitespace-nowrap'>{index + 1}</div>
            <div className='w-[25%] p-2 whitespace-nowrap'>$3434</div>
            <div className='w-[25%] p-2 whitespace-nowrap'>
                <span className='py-[1px] px-[5px] bg-slate-300 text-blue-500 rounded-md text-sm'>Pending</span>
            </div>
            <div className='w-[25%] p-2 whitespace-nowrap'> 25 Dec 2023 </div>
        </div>
        )
    }

    return (
        <div className='px-2 md:px-7 py-5'>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7 mb-5'>
                <div className='flex justify-between items-center p-5 bg-[#d1c6b9] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#11360e]'>
                        <h2 className='text-2xl font-bold'>$3434</h2>
                        <span className='text-sm font-bold'>Total Sales</span>
                    </div>
                    <div className='w-[40px] h-[47px] rounded-full bg-[#b94141] flex justify-center items-center text-xl'>
                        <MdCurrencyExchange className='text-[#fae8e8] shadow-lg' />
                    </div>
                </div>
                <div className='flex justify-between items-center p-5 bg-[#b6abbb] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#11360e]'>
                        <h2 className='text-2xl font-bold'>$1780</h2>
                        <span className='text-sm font-bold'>Available Amount</span>
                    </div>
                    <div className='w-[40px] h-[47px] rounded-full bg-[#472657] flex justify-center items-center text-xl'>
                        <MdCurrencyExchange  className='text-[#fae8e8] shadow-lg' />
                    </div>
                </div>
                <div className='flex justify-between items-center p-5 bg-[#9fc98c] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#11360e]'>
                        <h2 className='text-2xl font-bold'>$1000</h2>
                        <span className='text-sm font-bold'>Withrawal Amount</span>
                    </div>
                    <div className='w-[40px] h-[47px] rounded-full bg-[#19462a] flex justify-center items-center text-xl'>
                        <MdCurrencyExchange className='text-[#fae8e8] shadow-lg' />
                    </div>
                </div>
                <div className='flex justify-between items-center p-5 bg-[#c7caab] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#11360e]'>
                        <h2 className='text-2xl font-bold'>$0</h2>
                        <span className='text-sm font-bold'>Pending Amount</span>
                    </div>
                    <div className='w-[40px] h-[47px] rounded-full bg-[#262b7e] flex justify-center items-center text-xl'>
                        <MdCurrencyExchange className='text-[#fae8e8] shadow-lg' />
                    </div>
                </div>
            </div>  
            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-2 pb-4'>
                <div className='bg-[#527e2f] text-[#d0d2d6] rounded-md p-5'>
                    <h2 className='text-lg font-semibold'>Send Request</h2>
                    <div className='pt-5 mb-5'>
                        <form>
                            <div className='flex gap-3 flex-wrap'>
                                <input min='0' type="number" className='px-3 py-2 md:w-[75%] outline-none bg-[#527e2f] border focus:border-slate-400 border-slate-700 rounded-md text-[#d0d2d6]' name='amount' />
                                <button className="bg-red-500 shadow-lg hover:shadow-red-500/40 rounded-md px-7 py-2 cursor-pointer text-[#d0d2d6] text-sm">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <h2 className='text-lg pb-4'>Pending Request</h2>
                        <div className='w-full'>
                            <div className='w-full overflow-x-auto'>
                                <div className='flex bg-[#a9c592] text-[#1b2711] uppercase text-sm font-bold min-w-[340px] rounded-md'>
                                    <div className='w-[25%] p-2'>No</div>
                                    <div className='w-[25%] p-2'>Amount</div>
                                    <div className='w-[25%] p-2'>Status</div>
                                    <div className='w-[25%] p-2'>Date</div>
                                </div>
                                {
                                    <List
                                    style={{ minWidth : '340px'}}
                                    className='List'
                                    height={350}
                                    itemCount={10}
                                    itemSize={35}
                                    outerElementType={outerElementType}                    
                                    >
                                        {Row}
                                    </List>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-[#527e2f] text-[#d0d2d6] rounded-md p-5'>
                    <div>
                        <h2 className='text-lg pb-4'>Success Withdrawal</h2>
                        <div className='w-full'>
                            <div className='w-full overflow-x-auto'>
                                <div className='flex bg-[#a9c592] text-[#1b2711] uppercase text-sm font-bold min-w-[340px] rounded-md'>
                                    <div className='w-[25%] p-2'>No</div>
                                    <div className='w-[25%] p-2'>Amount</div>
                                    <div className='w-[25%] p-2'>Status</div>
                                    <div className='w-[25%] p-2'>Date</div>
                                </div>
                                {
                                    <List
                                    style={{ minWidth : '340px'}}
                                    className='List'
                                    height={350}
                                    itemCount={10}
                                    itemSize={35}
                                    outerElementType={outerElementType}                    
                                    >
                                        {Row}
                                    </List>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payments;