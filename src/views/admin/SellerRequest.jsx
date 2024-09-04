import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import Pagination from "../Pagination";
import { useDispatch, useSelector } from "react-redux";
import Search from "../Components/Search";
import { get_seller_request, messageClear } from "../../store/Reducers/sellerReducer";

const SellerRequest = () => {
    const dispatch = useDispatch()
    const {loader, successMessage, errorMessage, sellers, totalSeller} = useSelector(state => state.seller)
    const [currentPage, setCurrentPage] = useState(1);
    const [parPage, setParPage] = useState(5);
    const [show, setShow] = useState(false);
    const [searchValue, setSearchValue] = useState('')


    useEffect(() => {
        dispatch(get_seller_request({
            parPage: parseInt(parPage),
            page: parseInt(currentPage),
            searchValue
        }))
    },[searchValue, currentPage, parPage])

    return (
        <div className="px-2 lg:px-7 pt-5">
            <h1 className="text-[25px] font-bold mb-3 text-[#19270e]">Seller Request</h1>
            <div className="w-full p-4 rounded-md bg-[#527e2f]">
                <Search setParPage={setParPage} setSearchValue={setSearchValue} setCurrentPage={setCurrentPage} />
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-[#d0d2d6]">
                        <thead className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700">
                            <tr>
                                <th scope="col" className="py-3 px-4">No</th>
                                <th scope="col" className="py-3 px-4">Name</th>
                                <th scope="col" className="py-3 px-4">Email</th>
                                <th scope="col" className="py-3 px-4">Payment Status</th>
                                <th scope="col" className="py-3 px-4">Status</th>
                                <th scope="col" className="py-3 px-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sellers.map((d, i) => (
                                <tr className="border-b  border-slate-400" key={i}>
                                    <td scope="row" className="py-2 px-4 font-medium whitespace-normal">{i+1}</td>
                                    <td scope="row" className="py-2 px-4 font-medium whitespace-normal">{d.name}</td>
                                    <td scope="row" className="py-2 px-4 font-medium whitespace-normal">{d.email}</td>
                                    <td scope="row" className="py-2 px-4 font-medium whitespace-normal">{d.payment}</td>
                                    <td scope="row" className="py-2 px-4 font-medium whitespace-normal">{d.status}</td>
                                    <td scope="row" className="py-2 px-4 font-medium whitespace-normal">
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
                <div className="w-full flex justify-end mt-4 bottom-4 right-4">
                    <Pagination
                        pageNumber={currentPage}
                        setPageNumber={setCurrentPage}
                        totalItem={50}
                        parPage={parPage}
                        showItem={3}
                    />
                </div>
            </div>
        </div>
    );
};

export default SellerRequest;
