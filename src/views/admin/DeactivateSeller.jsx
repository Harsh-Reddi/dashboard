import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import Pagination from "../Pagination";

const DeactivateSeller = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [parPage, setParPage] = useState(5);
    const [show, setShow] = useState(false);

    return (
        <div className="px-2 lg:px-7 pt-5">
            <h1 className="text-[25px] font-bold mb-3 text-[#19270e]">Deactivate Seller</h1>
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
                                <th scope="col" className="py-3 px-4">Email</th>
                                <th scope="col" className="py-3 px-4">Payment Status</th>
                                <th scope="col" className="py-3 px-4">Status</th>
                                <th scope="col" className="py-3 px-4">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1, 2, 3, 4, 5].map((d, i) => (
                                <tr key={i}>
                                    <td scope="row" className="py-1 px-4 font-medium whitespace-normal">{d}</td>
                                    <td scope="row" className="py-1 px-4 font-medium whitespace-normal">
                                        <img
                                            className="w-[45px] h-[45px]"
                                            src={`http://localhost:3000/images/category/${d}.jpg`}
                                            alt="category_image"
                                        />
                                    </td>
                                    <td scope="row" className="py-1 px-4 font-medium whitespace-normal">Harshitha Reddy</td>
                                    <td scope="row" className="py-1 px-4 font-medium whitespace-normal">kharshurdy1@gmail.com</td>
                                    <td scope="row" className="py-1 px-4 font-medium whitespace-normal">Active</td>
                                    <td scope="row" className="py-1 px-4 font-medium whitespace-normal">Deactive</td>
                                    <td scope="row" className="py-1 px-4 font-medium whitespace-normal">
                                        <div className="flex justify-start items-center gap-4">
                                            <Link className="p-[6px] bg-orange-700 rounded hover:shadow-lg hover:shadow-orange-700/50 bg-">
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

export default DeactivateSeller;
