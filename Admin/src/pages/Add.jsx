import React, { useState } from 'react'
import asset from '../assets/asset'
import axios from 'axios'
import { backendURL } from '../App'
import { toast } from 'react-toastify';

function Add({token}) {

  const [image1,setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name,setName]=useState('');
  const [description,setDescription] =useState('');
  const [price,setPrice]=useState('');
  const[category,setCategory]=useState('Men');
  const[subCategory,setSubCategory]=useState('Fetl');
  const[bestseller,setBestseller]=useState(false);
  const[size,setSize]=useState([]);

  const onSubmitHandler = async (e)=>{
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name",name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category",category);
      formData.append("subCategory",subCategory);
      formData.append("bestseller", bestseller);
      formData.append("size",JSON.stringify(size));

     image1 && formData.append("image1",image1);
     image2 && formData.append("image2", image2);
     image3 && formData.append("image3", image3);
    image4 && formData.append("image4", image4);

      
     
      const response = await axios.post(backendURL + '/api/product/add',formData,{headers:{token}});
    if (response.data.success) {
      toast.success(response.data.message)
      setName('')
      setDescription('')
      setImage1('')
      setImage2("")
      setImage3('')
      setImage4('')
      setPrice('')
      setCategory('Men')
      setSubCategory("Fetl")
      setBestseller(false)
      setSize([])
    }else{
      toast.error(response.data.message)
    }

    } catch (error) {
      toast.error(error.message)
      console.error('❌ Error details:');
      console.error('Status:', error.response?.status);
      console.error('Data:', error.response?.data);
      console.error('Message:', error.message);
    }
  }
  

  return (
    <>
      <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
        <div className=''>
          <p className='mb-2'>Upload image</p>

          <div className='flex gap-2'>
            <label htmlFor="image1">
              <img src={!image1 ? asset.ulodimage:URL.createObjectURL(image1)} alt="" className='w-28' />
              <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id="image1" hidden />
            </label>

            <label htmlFor="image2">
              <img src={!image2 ? asset.ulodimage : URL.createObjectURL(image2)} alt="" className='w-28' />
              <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id="image2" hidden />
            </label>

            <label htmlFor="image3">
              <img src={!image3 ? asset.ulodimage:URL.createObjectURL(image3)} alt="" className='w-28' />
              <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id="image3" hidden />
            </label>

            <label htmlFor="image4">
              <img src={!image4 ?asset.ulodimage:URL.createObjectURL(image4)} alt="" className='w-28' />
              <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id="image4" hidden />
            </label>
          </div>
        </div>
        <div className='w-full'>
          <p className='mb-2'>product name</p>
          <input onChange={(e)=>setName(e.target.value)} value={name} type="text"  placeholder='Type here' required className='w-full max-w-[500px] px-3 py-2' />
        </div>

        <div className='w-full'>
          <p className='mb-2'>product description</p>
          <textarea onChange={(e)=>setDescription(e.target.value)} value={description} type="text" name="" id="" placeholder='Write content here' required className='w-full max-w-[500px] px-3 py-2' />
        </div>

        <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
          <div>
            <p className='mb-2'>product Category</p>
            <select onChange={(e) => setCategory(e.target.value)}  className='w-full px-3 py-2'>
              <option value="">select Option</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">kids</option>
            </select>
          </div>

          <div>
            <p className='mb-2'>Sub Category</p>
            <select onChange={(e)=>setSubCategory(e.target.value)}  className='w-full px-3 py-2'>
              <option value="">select Option</option>
              <option value="Fetl">Fetl</option>
              <option value="Menen">Menen</option>
              <option value="Shifon">Shifon</option>
            </select>
          </div>


          <div>
            <p className='mb-2'>product price</p>
            <input onChange={(e)=>setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type="number" name="" id="" placeholder='$ 50' />
          </div>
        </div>

        <div>
          <p className='mb-3'>product sizes</p>
          <div className='flex gap-3'>
            <div onClick={()=>setSize(prev => prev.includes("s")? prev.filter(item => item !== "s"):[...prev,"s"])}>
              <p className={`${size.includes('s')?"bg-pink-100":"bg-slate-200"} px-3 py-1 cursor-pointer`}>s</p>
            </div>

            <div onClick={() => setSize(prev => prev.includes("M") ? prev.filter(item => item !== "M") : [...prev, "M"])}>
              <p className={`${size.includes('M') ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>M</p>
            </div>

            <div onClick={() => setSize(prev => prev.includes("L") ? prev.filter(item => item !== "L") : [...prev, "L"])}>
              <p className={`${size.includes('L') ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>L</p>
            </div>

            <div onClick={() => setSize(prev => prev.includes("xL") ? prev.filter(item => item !== "xL") : [...prev, "xL"])}>
              <p className={`${size.includes('xL') ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>xL</p>
            </div>

            <div onClick={() => setSize(prev => prev.includes("xxL") ? prev.filter(item => item !== "xxL") : [...prev, "xxL"])}>
              <p className={`${size.includes('xxL') ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>xxL</p>
            </div>
          </div>
        </div>

        <div className='flex gap-2 mt-2'>
          <input onChange={()=>setBestseller(prev => !prev)} checked={bestseller} type="checkbox" name="" id="bestseller" />
          <label className='cursor-pointer' htmlFor="bestseller">Add to bestSeller</label>
        </div>

        <button type='submit' className='w-28 py-4 bg-black text-white'>ADD</button>
      </form>
    </>
  )
}

export default Add
