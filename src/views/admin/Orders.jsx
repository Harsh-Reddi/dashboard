import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSortDown } from "react-icons/fa";
import Pagination from "../Pagination";

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // const [searchValue, setSearchValue] = useState("");
  const [parPage, setParPage] = useState(5);
  const [show, setShow] = useState(false);

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-[#527e2f] rounded-md ">
        <div className="flex justify-between items-center">
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
            placeholder="search"
          />
        </div>

        <div className="relative mt-5 overflow-x-auto">
          <div className="w-full text-sm text-left text-[#d0d2d6] ">
            <div className="text-sm text-[#d0d2d6] uppercase border-b border-slate-700">
              <div className="flex justify-between items-center">
                <div className="py-3 w-[25%] font-bold">Order ID</div>
                <div className="py-3 w-[13%] font-bold">Price</div>
                <div className="py-3 w-[18%] font-bold">Payment Status</div>
                <div className="py-3 w-[18%] font-bold">Order Status</div>
                <div className="py-3 w-[18%] font-bold">Action</div>
                <div className="py-3 w-[8%] font-bold">
                  <FaSortDown />{" "}
                </div>
              </div>
            </div>

            <div className="text-[#d0d2d6] ">
              <div className="flex justify-between items-start border-b border-slate-700">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                  #34343
                </div>
                <div className="py-3 w-[13%] font-medium">$454</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">
                  <Link to='/admin/dashboard/order/details/78' >View All</Link>
                </div>
                <div
                  onClick={(e) => setShow(!show)}
                  className="py-3 w-[8%] font-medium "
                >
                  <FaSortDown />{" "}
                </div>
              </div>
            </div>

            <div
              className={
                show ? "block border-b border-slate-700 bg-[#879e73]" : "hidden"
              }
            >
              <div className="flex justify-start items-start border-b border-slate-700">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                  #34343
                </div>
                <div className="py-3 w-[13%] font-medium">$56</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
              </div>
              <div className="flex justify-start items-start border-b border-slate-700">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                  #34343
                </div>
                <div className="py-3 w-[13%] font-medium">$56</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
              </div>
            </div>

            <div className="text-[#d0d2d6] ">
              <div className="flex justify-between items-start border-b border-slate-700">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                  #34343
                </div>
                <div className="py-3 w-[13%] font-medium">$454</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">
                  <Link>View All</Link>
                </div>
                <div
                  onClick={(e) => setShow(!show)}
                  className="py-3 w-[8%] font-medium "
                >
                  <FaSortDown />{" "}
                </div>
              </div>
            </div>

            <div
              className={
                show ? "block border-b border-slate-700 bg-[#879e73]" : "hidden"
              }
            >
              <div className="flex justify-start items-start border-b border-slate-700">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                  #34343
                </div>
                <div className="py-3 w-[13%] font-medium">$56</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
              </div>
              <div className="flex justify-start items-start border-b border-slate-700">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                  #34343
                </div>
                <div className="py-3 w-[13%] font-medium">$56</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
              </div>
            </div>

            <div className="text-[#d0d2d6] ">
              <div className="flex justify-between items-start border-b border-slate-700">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                  #34343
                </div>
                <div className="py-3 w-[13%] font-medium">$454</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">
                  <Link>View All</Link>
                </div>
                <div
                  onClick={(e) => setShow(!show)}
                  className="py-3 w-[8%] font-medium "
                >
                  <FaSortDown />{" "}
                </div>
              </div>
            </div>

            <div
              className={
                show ? "block border-b border-slate-700 bg-[#879e73]" : "hidden"
              }
            >
              <div className="flex justify-start items-start border-b border-slate-700">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                  #34343
                </div>
                <div className="py-3 w-[13%] font-medium">$56</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
              </div>
              <div className="flex justify-start items-start border-b border-slate-700">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                  #34343
                </div>
                <div className="py-3 w-[13%] font-medium">$56</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
              </div>
            </div>

            <div className="text-[#d0d2d6] ">
              <div className="flex justify-between items-start border-b border-slate-700">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                  #34343
                </div>
                <div className="py-3 w-[13%] font-medium">$454</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">
                  <Link>View All</Link>
                </div>
                <div
                  onClick={(e) => setShow(!show)}
                  className="py-3 w-[8%] font-medium "
                >
                  <FaSortDown />{" "}
                </div>
              </div>
            </div>

            <div
              className={
                show ? "block border-b border-slate-700 bg-[#879e73]" : "hidden"
              }
            >
              <div className="flex justify-start items-start border-b border-slate-700">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                  #34343
                </div>
                <div className="py-3 w-[13%] font-medium">$56</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
              </div>
              <div className="flex justify-start items-start border-b border-slate-700">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                  #34343
                </div>
                <div className="py-3 w-[13%] font-medium">$56</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
              </div>
            </div>

            <div className="text-[#d0d2d6] ">
              <div className="flex justify-between items-start border-b border-slate-700">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                  #34343
                </div>
                <div className="py-3 w-[13%] font-medium">$454</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">
                  <Link>View All</Link>
                </div>
                <div
                  onClick={(e) => setShow(!show)}
                  className="py-3 w-[8%] font-medium "
                >
                  <FaSortDown />{" "}
                </div>
              </div>
            </div>

            <div
              className={
                show ? "block border-b border-slate-700 bg-[#879e73]" : "hidden"
              }
            >
              <div className="flex justify-start items-start border-b border-slate-700">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                  #34343
                </div>
                <div className="py-3 w-[13%] font-medium">$56</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
              </div>
              <div className="flex justify-start items-start border-b border-slate-700">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap pl-3">
                  #34343
                </div>
                <div className="py-3 w-[13%] font-medium">$56</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
              </div>
            </div>
          </div>
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

export default Orders;