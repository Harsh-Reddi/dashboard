import { AiOutlineDashboard, AiOutlineShoppingCart, AiOutlineProduct } from "react-icons/ai";
import { BiCategory, BiSupport} from "react-icons/bi";
import { FaUsers, FaUserTimes} from "react-icons/fa";
import { FaCodePullRequest} from "react-icons/fa6";
import { MdPayment} from "react-icons/md";
import { IoChatbubbles, IoChatboxEllipsesOutline, IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { RiAddCircleLine } from "react-icons/ri";
import { TbRosetteDiscount } from "react-icons/tb";

export const allNav = [
    {
        id: 1,
        title: 'Dashboard',
        icon: <AiOutlineDashboard />,
        role: 'admin',
        path: '/admin/dashboard'
    },
    {
        id: 2,
        title: 'Orders',
        icon: <AiOutlineShoppingCart />,
        role: 'admin',
        path: '/admin/dashboard/orders'
    },
    {
        id: 3,
        title: 'Category',
        icon: <BiCategory />,
        role: 'admin',
        path: '/admin/dashboard/category'
    },
    {
        id: 4,
        title: 'Sellers',
        icon: <FaUsers />,
        role: 'admin',
        path: '/admin/dashboard/sellers'
    },
    {
        id: 5,
        title: 'Payment Request',
        icon: <MdPayment />,
        role: 'admin',
        path: '/admin/dashboard/payment-request'
    },
    {
        id: 6,
        title: 'Deactive Sellers',
        icon: <FaUserTimes />,
        role: 'admin',
        path: '/admin/dashboard/deactivate-sellers'
    },
    {
        id: 7,
        title: 'Seller Request',
        icon: <FaCodePullRequest />,
        role: 'admin',
        path: '/admin/dashboard/seller-request'
    },
    {
        id: 8,
        title: 'Live Chat',
        icon:  <IoChatbubbles />,
        role: 'admin',
        path: '/admin/dashboard/chat-seller'
    },
    {
        id: 9,
        title: 'Dashboard',
        icon: <AiOutlineDashboard />,
        role: 'seller',
        path: '/seller/dashboard'
    },
    {
        id: 10,
        title: 'Add Product',
        icon: <RiAddCircleLine />,
        role: 'seller',
        path: '/seller/dashboard/add-product'
    },
    {
        id: 11,
        title: 'All Product',
        icon: <AiOutlineProduct />,
        role: 'seller',
        path: '/seller/dashboard/products'
    },
    {
        id: 12,
        title: 'Discount Product',
        icon: <TbRosetteDiscount />,
        role: 'seller',
        path: '/seller/dashboard/discount-product'
    },
    {
        id: 13,
        title: 'Orders',
        icon: <IoCartOutline />,
        role: 'seller',
        path: '/seller/dashboard/orders'
    },
    {
        id: 14,
        title: 'Payments',
        icon: <MdPayment />,
        role: 'seller',
        path: '/seller/dashboard/payments'
    },
    {
        id: 15,
        title: 'Chat-Customer',
        icon: <IoChatboxEllipsesOutline />,
        role: 'seller',
        path: '/seller/dashboard/chat-customer'
    },
    {
        id: 16,
        title: 'Chat-Support',
        icon: <BiSupport />,
        role: 'seller',
        path: '/seller/dashboard/chat-support'
    },
    {
        id: 17,
        title: 'Profile',
        icon: <CgProfile />,
        role: 'seller',
        path: '/seller/dashboard/profile'
    }
    
]