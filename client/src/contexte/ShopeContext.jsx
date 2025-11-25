import { createContext, useEffect, useState } from "react";
// import {products} from '../assets/asset'
import { toast } from "react-toastify";
import Product from "../pages/Product";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export const ShopeContext = createContext();

const ShopContextProvider = (props)=>{

    const currency = '$';
    const delivery_fee =10;
    // const backendUrl = import.meta.env.VITE_BACKEND_URL;
    // const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000';
    const[search,setSearch]=useState('');
    const[showSearch,setShowSearch]=useState(false);
    const [cartItem,setCartItem]= useState({});
    const[products,setProducts]=useState([]);
    const[token,setToken] = useState('');
const navigate = useNavigate();

const addCart = async (itemId,size)=>{
let cartData = structuredClone(cartItem);
if (!size) {
    toast.error('Select product size');
    return
};

if (cartData[itemId]) {
    if (cartData[itemId][size]) {
        cartData[itemId][size] +=1;
    }else{
        cartData[itemId][size]=1;
    }
}else{
    cartData[itemId]={};
    cartData[itemId][size]=1;
}
setCartItem(cartData)
if (token) {
    try {
        //  await axios.post(backendUrl + '/api/cart/add',{itemId,size},{headers:{token}})
        await axios.post('/api/cart/add', { itemId, size }, { headers: { token } })

    } catch (error) {
        console.log(error)
        toast.error(error.message)
    }
}

};

const getCartCount = ()=>{
    let totalCount = 0;
    for(const items in cartItem){
        for(const item in cartItem[items]){
            try {
               if (cartItem[items][item]>0) {
                totalCount += cartItem[items][item];
               } 
            } catch (error) {
                
            }
        }
    }
    return totalCount;
}
    const updateQuantity = async (itemId,size,quantity) =>{
let cartData = structuredClone(cartItem);
cartData[itemId][size] = quantity;
setCartItem(cartData);
}
const getCartAmount =  () => {
let totalAmount = 0;
for(const items in cartItem){
    let itemInfo = products.find((Product)=> Product._id === items);
    for(const item in cartItem[items]){
        try {
            if (cartItem[items][item] >0) {
                totalAmount += itemInfo.price * cartItem[items][item]
            }
        } catch (error) {
            
        }
    }
}
return totalAmount;
}

const getProductData = async ()=>{
    try {
        // const respons =await axios.get(backendUrl + '/api/product/list')
        const respons = await axios.get('/api/product/list')
       if (respons.data.success) {
        const fixedProduct = respons.data.products.map(product =>({
            ...product,image:typeof product.image === 'string' ? product.image.split(','): product.image
        }));
        // setProducts(respons.data.products)
        setProducts(fixedProduct)
       }else{
        toast.error(respons.data.message)
       }
    } catch (error) {
        console.log(error)
        toast.error(error.message)
    }
}
const getUserCart = async (token) =>{
try {
    // const respons = await axios.post(backendUrl + '/api/cart/get',{},{headers:{token}})
    const respons = await axios.post('/api/cart/get', {}, { headers: { token } })
    if (respons.data.success) {
        const fixedCartData = {...respons.data.cartData};
        setCartItem(fixedCartData)
        // setCartItem(respons.data.cartData)
    }
} catch (error) {
    console.log(error)
    toast.error(error.message)
}
}
useEffect(()=>{
getProductData()
},[])

useEffect(()=>{
if (!token && localStorage.getItem('token')) {
    setToken(localStorage.getItem('token'))
    getUserCart(localStorage.getItem('token'))
}
},[])
const value ={
    products,currency,delivery_fee,
    search,setSearch,showSearch,setShowSearch,
    cartItem,addCart,setCartItem,
    getCartCount,updateQuantity,
    getCartAmount,navigate,setToken,token
}
return (
    <ShopeContext.Provider value={value}>
        {props.children}
    </ShopeContext.Provider>
)
}
export default ShopContextProvider


