import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdImages } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { get_category } from '../../store/Reducers/categoryReducer';
import { add_product, messageClear } from '../../store/Reducers/productReducer';
import {PropagateLoader} from 'react-spinners'
import { overrideStyle } from '../../utils/utils';
import toast from 'react-hot-toast'

const AddProduct = () => {
    const dispatch = useDispatch()
    const {categories} = useSelector(state => state.category)
    const {loader, successMessage, errorMessage, products} = useSelector(state => state.product)
    useEffect(() => {
        dispatch(get_category({
            searchValue: '',
            parPage: '',
            page: ''
        }))
    },[])

    const [state, setState] = useState({
        name: '',
        description: '',
        discount: '',
        price: '',
        brand: '',
        stock: ''
    })
    const [cateShow, setCateShow] = useState(false)
    const [category, setCategory] = useState('')
    const [allCategory, setAllCategory] = useState([])
    const [searchValue, setSearchValue] = useState('')


    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const categorySearch = (e) => {
        const value = e.target.value
        setSearchValue(value)
        if (value) {
            let srcValue = allCategory.filter(c => c.name.toLowerCase().indexOf(value.toLowerCase()) > -1)
            setAllCategory(srcValue)
        } else {
            setAllCategory(categories)
        }
    }
    const [images, setImages] = useState([])
    const [imgShow, setImgShow] = useState([])
    const imageHandle = (e) => {
        const files = e.target.files
        const length = files.length
        if (length > 0) {
            setImages([...images, ...files])
            let imageUrl =[]
            for (let i = 0; i < length; i++) {
                imageUrl.push({url: URL.createObjectURL(files[i])})
                
            }
            setImgShow([...imgShow, ...imageUrl ])
        }
    }
    const changeImage = (img, i) => {
        if (img) {
            let tempUrl = imgShow
            let tempImages = images
            tempImages[i] = img
            tempUrl[i] = {url: URL.createObjectURL(img)}
            setImgShow([...tempUrl])
            setImages([...tempImages])
        }
    }
    const removeImage = (i) => {
        const filterImage = images.filter((img, index) => index!==i)
        const filterImageUrl = imgShow.filter((img, index) => index!==i)
        setImages(filterImage)
        setImgShow(filterImageUrl)
    }
    const add = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('name', state.name)
        formData.append('description', state.description)
        formData.append('discount', state.discount)
        formData.append('price', state.price)
        formData.append('brand', state.brand)
        formData.append('stock', state.stock)
        formData.append('shopName', 'GleamStreet')
        for (let i = 0; i < images.length; i++) {
            formData.append('images', images[i])
        }
        formData.append('category', category)
        dispatch(add_product(formData))
        
    }
    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear())
            setState({
                name: '',
                description: '',
                discount: '',
                price: '',
                brand: '',
                stock: ''
            })
            setImgShow([])
            setImages([])
            setCategory('')
        }
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(messageClear())
        }
    },[successMessage, errorMessage])

    useEffect(() => {
        setAllCategory(categories)
    },[categories])
    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 bg-[#527e2f] text-[#d0d2d6] rounded-md'>
                <div className='flex justify-between items-center pb-4'>
                    <h1 className='text-[#d0d2d6] font-semibold'>Add Product</h1>
                    <Link to="/seller/dashboard/products" className='bg-[#a9c592] hover:shadow-[#a9c592]/50 hover:shadow-lg text-white rounded-md px-7 py-2'>All Product</Link>
                </div>
                <div>
                    <form onSubmit={add}>
                        <div className='flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]'>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="name">Product Name</label>
                                <input className='px-4 py-2 focus:border-[#527e2f] outline-none bg-[#527e2f] border border-slate-700 rounded-md text-[#d0d2d6]' onChange={inputHandle} value={state.name} type="text" name='name' id='name' placeholder='Product Name' />
                            </div>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="brand">Product Brand</label>
                                <input className='px-4 py-2 focus:border-[#527e2f] outline-none bg-[#527e2f] border border-slate-700 rounded-md text-[#d0d2d6]' onChange={inputHandle} value={state.brand} type="text" name='brand' id='brand' placeholder='Brand Name' />
                            </div>
                        </div>
                        <div className='flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]'>
                            <div className='flex flex-col w-full gap-1 relative'>
                                <label htmlFor="category">Category</label>
                                <input readOnly onClick={() => setCateShow(!cateShow)} className='px-4 py-2 focus:border-[#527e2f] outline-none bg-[#527e2f] border border-slate-700 rounded-md text-[#d0d2d6] cursor-pointer' onChange={inputHandle} value={category} type="text" id='category' placeholder='--select category--' />
                                <div className={`absolute top-[101%] bg-[#475569] w-full transition-all ${cateShow ? 'scale-100' : 'scale-0'}`} >
                                    <div className='w-full py-2 px-4 fixed'>
                                        <input value={searchValue} onChange={categorySearch} className='px-3 py-1 w-full focus:border-[#527e2f] outline-none bg-transparent border border-slate-700 rounded-md text-[#d0d2d6] overflow-hidden' type="text" placeholder='search' />
                                    </div>
                                    <div className='pt-5'></div>
                                    <div className='flex justify-start items-start flex-col pt-6 h-[220px] overflow-x-scrool'>
                                        {
                                            allCategory.map((c, i) => <span className={`px-4 py-2 hover:bg-[#527e2f] hover:text-[#d0d2d6] hover:shadow-lg w-full cursor-pointer ${category === c.name && 'bg-[#527e2f]'}`} onClick={() => {
                                                setCateShow(false)
                                                setCategory(c.name)
                                                setSearchValue('')
                                                setAllCategory(categories)
                                            }}>{c.name}</span>)
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="stock">Product Stock</label>
                                <input className='px-4 py-2 focus:border-[#527e2f] outline-none bg-[#527e2f] border border-slate-700 rounded-md text-[#d0d2d6]' onChange={inputHandle} value={state.stock} type="number" name='stock' id='stock' placeholder='Stock' />
                            </div>
                        </div>
                        <div className='flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]'>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="price">Price</label>
                                <input className='px-4 py-2 focus:border-[#527e2f] outline-none bg-[#527e2f] border border-slate-700 rounded-md text-[#d0d2d6]' onChange={inputHandle} value={state.price} type="number" name='price' id='price' placeholder='Price' />
                            </div>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor="discount">Discount</label>
                                <input className='px-4 py-2 focus:border-[#527e2f] outline-none bg-[#527e2f] border border-slate-700 rounded-md text-[#d0d2d6]' onChange={inputHandle} value={state.discount} type="number" name='discount' id='discount' placeholder='discount by %' />
                            </div>
                        </div>
                        <div className='flex flex-col w-full gap-1 mb-5'>
                            <label htmlFor="description">Description</label>
                            <textarea cols="10" rows="2" className='px-4 py-2 focus:border-[#527e2f] outline-none bg-[#527e2f] border border-slate-700 rounded-md text-[#d0d2d6]' onChange={inputHandle} value={state.description} type="text" name='description' id='description' placeholder='Description'></textarea>
                        </div>
                        <div className='grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 sm:gap-4 md:gap-4 gap-3 w-full text-[#d0d2d6] mb-4'>
                            
                            {
                                imgShow.map((img, i) => <div className='h-[180px] relative '>
                                    <label htmlFor={i}>
                                        <img className='w-full h-full rounded-sm' src={img.url} alt="" />
                                    </label>
                                    <input onChange={(e) => changeImage(e.target.files[0],i)} type="file" id={i} className='hidden' />
                                    <span onClick={() => removeImage(i)} className='p-2 z-10 cursor-pointer bg-slate-700 hover:shadow-lg hover:shadow-slate-400/50 text-white absolute top-1 right-1 rounded-full'><IoMdCloseCircle /></span>
                                </div>)
                            }
                            <label className='flex justify-center items-center flex-col h-[180px] cursor-pointer border border-dashed hover:border-red-500 w-full text-[#d0d2d6] ' htmlFor="image">
                                <span><IoMdImages /></span>
                                <span>Select Image</span>
                            </label>
                            <input multiple className='hidden' onChange={imageHandle} type="file" name="image" id="image" />
                        </div>
                        <div className='flex'>
                        <button disabled={loader? true: false} className="bg-red-500 hover:shadow-red-300/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3 w-[300px]">
                            {
                                loader? <PropagateLoader color="#fff" cssOverride={overrideStyle}/>  : "Add Product"
                            }
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;