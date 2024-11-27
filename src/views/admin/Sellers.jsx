import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import Pagination from "../Pagination";
import { useDispatch, useSelector } from 'react-redux';
import { get_active_sellers } from '../../store/Reducers/sellerReducer';

const Sellers = () => {
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1);
const [searchValue, setSearchValue] = useState('')
    const [parPage, setParPage] = useState(5);
    const [show, setShow] = useState(false);
    const {sellers,totalSeller } = useSelector(state => state.seller)

    useEffect(() => {
        const obj = {
            parPage: parseInt(parPage),
            page: parseInt(currentPage),
            searchValue
        }
        dispatch(get_active_sellers(obj))
    },[searchValue,currentPage,parPage])

    return (
        <div className="px-2 lg:px-7 pt-5">
            <h1 className="text-[25px] font-bold mb-3 text-[#19270e]">Seller</h1>
            <div className="w-full p-4 rounded-md bg-[#527e2f]">
                <div className="flex justify-between items-center mb-4">
                    <select
                        onChange={(e) => setParPage(parseInt(e.target.value))}
                        className="px-4 py-2 focus:border-[#527e2f] outline-none bg-[#527e2f] border border-slate-700 rounded-md text-[#d0d2d6]"
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>
                    <input
                        onChange={e => setSearchValue(e.target.value)} value={searchValue}
                        className="px-4 py-2 focus:border-[#527e2f] outline-none bg-[#527e2f] border border-slate-700 rounded-md text-[#d0d2d6]"
                        type="text"
                        placeholder="Search"
                    />
                </div>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-[#d0d2d6]">
                        <thead className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700">
                            <tr>
                                <th scope="col" className="py-3 px-4">No</th>
                                <th scope="col" className="py-3 px-4">Image</th>
                                <th scope="col" className="py-3 px-4">Name</th>
                                <th scope="col" className="py-3 px-4">Shop Name</th>
                                <th scope="col" className="py-3 px-4">Payment Status</th>
                                <th scope="col" className="py-3 px-4">Email</th>
                                <th scope="col" className="py-3 px-4">Status</th>
                                <th scope="col" className="py-3 px-4">District</th>
                                <th scope="col" className="py-3 px-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sellers.map((d, i) => (
                                <tr key={i}>
                                    <td scope="row" className="py-1 px-4 font-medium whitespace-normal">{i+1}</td>
                                    <td scope="row" className="py-1 px-4 font-medium whitespace-normal">
                                        <img
                                            className="w-[45px] h-[45px]"
                                            src={d.image}
                                            alt="category_image"
                                        />
                                    </td>
                                    <td scope="row" className="py-1 px-4 font-medium whitespace-normal">{d.name}</td>
                                    <td scope="row" className="py-1 px-4 font-medium whitespace-normal">{d.shopInfo.shopName}</td>
                                    <td scope="row" className="py-1 px-4 font-medium whitespace-normal">{d.payment}</td>
                                    <td scope="row" className="py-1 px-4 font-medium whitespace-normal">{d.email}</td>
                                    <td scope="row" className="py-1 px-4 font-medium whitespace-normal">{d.shopInfo.district}</td>
                                    <td scope="row" className="py-1 px-4 font-medium whitespace-normal">North Carolina</td>
                                    <td scope="row" className="py-1 px-4 font-medium whitespace-normal">
                                        <div className="flex justify-start items-center gap-4">
                                            <Link to={`/admin/dashboard/seller/details/${d._id}`} className="p-[6px] bg-orange-700 rounded hover:shadow-lg hover:shadow-orange-700/50 bg-">
                                                <FaEye />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {
                    totalSeller <= parPage ? <div className='w-full flex justify-end mt-4 bottom-4 right-4'>
                    <Pagination 
                        pageNumber = {currentPage}
                        setPageNumber = {setCurrentPage}
                        totalItem = {totalSeller}
                        parPage = {parPage}
                        showItem = {4}
                    />
                    </div> : ""
                }
            </div>
        </div>
    );
};

export default Sellers;
