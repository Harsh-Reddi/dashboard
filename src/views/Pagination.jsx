import React from "react";
import { MdKeyboardDoubleArrowLeft,  MdKeyboardDoubleArrowRight } from "react-icons/md";

const Pagination = ({
  pageNumber,
  setPageNumber,
  totalItem,
  parPage,
  showItem,
}) => {
  let totalPage = Math.ceil(totalItem / parPage);
  let startPage = pageNumber;
  let dif = totalPage - pageNumber;
  if (dif <= showItem) {
    startPage = totalPage - showItem;
  }
  let endPage = startPage < 0 ? showItem : showItem + startPage;
  if (startPage <= 0) {
    startPage = 1;
  }
  const createBtn = () => {
    const btns = [];
    for (let i = startPage; i < endPage; i++) {
      btns.push(
        <li onClick={() => setPageNumber(i)}
          className={`${
            pageNumber === i
              ? "bg-lime-300 shadow-lg shadow-lime-300/50 text-white"
              : "bg-slate-600 hover:bg-lime-400 shadow-lg hover:shadow-lime-500/50 hover:text-white text-[#d0d2d6]"
          } w-[33px] h-[33px] rounded-full flex justify-center items-center cursor-pointer`}
        >
          {i}
        </li>
      );
    }
    return btns
  };
  return (
    <ul className="flex gap-3">
      {pageNumber > 1 && (
        <li onClick={() => setPageNumber(pageNumber - 1)} className="w-[33px] h-[33px] rounded-full flex justify-center items-center bg-slate-300 text-black cursor-pointer">
          <MdKeyboardDoubleArrowLeft />
        </li>
      )}
      {createBtn()}
      {pageNumber < totalPage && (
        <li onClick={() => setPageNumber(pageNumber + 1)} className="w-[33px] h-[33px] rounded-full flex justify-center items-center bg-slate-300 text-black cursor-pointer">
          <MdKeyboardDoubleArrowRight />
        </li>
      )}
    </ul>
  );
};

export default Pagination;
