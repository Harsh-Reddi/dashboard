import React from 'react';
import { MdCurrencyExchange } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import Chart from 'react-apexcharts'
import { Link } from 'react-router-dom';

const SellerDashboard = () => {

    const state = {
        series: [
            {
                name: 'Orders',
                data: [44, 55, 57, 56, 61, 58, 88, 79, 65, 90, 89, 45]
            },
            {
                name: 'Revenue',
                data: [50, 62, 70, 59, 68, 75, 95, 82, 78, 100, 45, 87]
            },
            {
                name: 'Sales',
                data: [39, 48, 53, 45, 54, 60, 84, 70, 60, 85, 56, 78]
            }
        ],
        options: {
            color: ['#181ee8','#181ee8'],
            plotOptions: {
                radius: 30
            },
            chart: {
                background: 'transparent',
                foreColor: '#d0d2d6'
            },
            dataLabels: {
                enabled: false
            },
            strock: {
                show: true,
                curve: ['smooth','straight','stepline'],
                lineCap: 'butt',
                colors: '#f0f0f0',
                width: .5,
                dashArray: 0
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec']
            },
            legend: {
                position: 'top'
            },
            responsive: [
                {
                    breakpoint: 565,
                    yaxis:{
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec']
                    },
                    options: {
                        plotOptions: {
                            bar: {
                                horizontal: true
                            }
                        },
                        chart:{
                            height: '550px'
                        }
                    }
                }
            ]
        }
    }


    return (
        <div className='px-2 md:px-7 py-5'>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7'>
                <div className='flex justify-between items-center p-5 bg-[#d1c6b9] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#11360e]'>
                        <h2 className='text-3xl font-bold'>$3434</h2>
                        <span className='text-md font-medium'>Total Sales</span>
                    </div>
                    <div className='w-[40px] h-[47px] rounded-full bg-[#b94141] flex justify-center items-center text-xl'>
                        <MdCurrencyExchange className='text-[#fae8e8] shadow-lg' />
                    </div>
                </div>
                <div className='flex justify-between items-center p-5 bg-[#b6abbb] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#11360e]'>
                        <h2 className='text-3xl font-bold'>20</h2>
                        <span className='text-md font-medium'>Products</span>
                    </div>
                    <div className='w-[40px] h-[47px] rounded-full bg-[#472657] flex justify-center items-center text-xl'>
                        <MdOutlineProductionQuantityLimits  className='text-[#fae8e8] shadow-lg' />
                    </div>
                </div>
                <div className='flex justify-between items-center p-5 bg-[#9fc98c] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#11360e]'>
                        <h2 className='text-3xl font-bold'>10</h2>
                        <span className='text-md font-medium'>Orders</span>
                    </div>
                    <div className='w-[40px] h-[47px] rounded-full bg-[#19462a] flex justify-center items-center text-xl'>
                        <FaCartArrowDown className='text-[#fae8e8] shadow-lg' />
                    </div>
                </div>
                <div className='flex justify-between items-center p-5 bg-[#c7caab] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#11360e]'>
                        <h2 className='text-3xl font-bold'>1</h2>
                        <span className='text-md font-medium'>Pending Orders</span>
                    </div>
                    <div className='w-[40px] h-[47px] rounded-full bg-[#262b7e] flex justify-center items-center text-xl'>
                        <FaCartArrowDown className='text-[#fae8e8] shadow-lg' />
                    </div>
                </div>
            </div>
            
            <div className='w-full flex flex-wrap mt-7'>
                <div className='w-full lg:w-7/12 lg:pr-3'>
                    <div className='w-full bg-[#527e2f] p-4 rounded-md '>
                        <Chart options={state.options} series={state.series} type='bar' height={350} />
                    </div>
                </div>
                <div className='w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0'>
                    <div className='w-full bg-[#527e2f] p-4 rounded-md text-[#d0d2d6]'>
                        <div className='flex justify-between items-center'>
                            <h2 className='font-semibold text-lg text-[#d0d2d6] pb-3'>Recent Customer Message</h2>
                            <Link className='font-semibold text-sm text-[#d0d2d6]'>View All</Link>
                        </div>
                        <div className='flex flex-col gap-2 text-[#d0d2d6]'>
                            <ol className='relative border-1 border-slate-600 ml-4'>
                                <li className='mb-3 ml-6'> 
                                    <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#398a5d] rounded-full z-10'>
                                        <img className='w-full rounded-full h-full shadow-lg' src="http://localhost:3000/images/admin.jpg" alt="admin" />
                                    </div>
                                    <div className='p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm'>
                                        <div className='flex justify-between items-center mb-2'>
                                            <Link className='text-md font-normal'>Seller</Link>
                                            <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'>2 days ago </time>
                                        </div>
                                        <div className='p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-700'>How are you?</div>
                                    </div>
                                </li>
                                <li className='mb-3 ml-6'> 
                                    <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#398a5d] rounded-full z-10'>
                                        <img className='w-full rounded-full h-full shadow-lg' src="http://localhost:3000/images/admin.jpg" alt="admin" />
                                    </div>
                                    <div className='p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm'>
                                        <div className='flex justify-between items-center mb-2'>
                                            <Link className='text-md font-normal'>Admin</Link>
                                            <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'>2 days ago </time>
                                        </div>
                                        <div className='p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-700'>How are you?</div>
                                    </div>
                                </li>
                                <li className='mb-3 ml-6'> 
                                    <div className='flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[6px] bg-[#398a5d] rounded-full z-10'>
                                        <img className='w-full rounded-full h-full shadow-lg' src="http://localhost:3000/images/admin.jpg" alt="admin" />
                                    </div>
                                    <div className='p-3 bg-slate-800 rounded-lg border border-slate-600 shadow-sm'>
                                        <div className='flex justify-between items-center mb-2'>
                                            <Link className='text-md font-normal'>Customer</Link>
                                            <time className='mb-1 text-sm font-normal sm:order-last sm:mb-0'>2 days ago </time>
                                        </div>
                                        <div className='p-2 text-xs font-normal bg-slate-700 rounded-lg border border-slate-700'>How are you?</div>
                                    </div>
                                </li>

                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full p-4 bg-[#527e2f] rounded-md mt-6'>
                <div className='flex justify-between items-center mb-4'>
                    <h2 className='font-semibold text-lg text-[#d0d2d6] pb-3'>Recent Orders</h2>
                    <Link className='font-semibold text-sm text-[#d0d2d6]'>View All</Link>
                </div>
                <div className='relative overflow-x-auto'>
                    <table className='w-full text-sm text-left text-[#d0d2d6] '>
                        <thead className='text-sm text-[#d0d2d6] uppercase border-b border-slate-700'>
                        <tr>
                            <th scope='col' className='py-3 px-4'>Order ID</th>
                            <th scope='col' className='py-3 px-4'>Price</th>
                            <th scope='col' className='py-3 px-4'>Payment Status</th>
                            <th scope='col' className='py-3 px-4'>Order Status</th>
                            <th scope='col' className='py-3 px-4'>Active</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                [1,2,3,4,5].map((d, i)=> <tr key={i}>
                                <td scope='row' className='py-3 px-4 font-medium whitespace-normal'>#343444</td>
                                <td scope='row' className='py-3 px-4 font-medium whitespace-normal'>$454</td>
                                <td scope='row' className='py-3 px-4 font-medium whitespace-normal'>Pending</td>
                                <td scope='row' className='py-3 px-4 font-medium whitespace-normal'>Pending</td>
                                <td scope='row' className='py-3 px-4 font-medium whitespace-normal'><Link>View</Link></td>
                            </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        
        </div>
    );
};

export default SellerDashboard;