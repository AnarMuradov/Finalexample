import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { productPost } from '../../helpers/useCrud'

const Addpage = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const navigate = useNavigate()
    const handesubmit =(e)=>{
        e.preventDefault()
        productPost({name,price})
        navigate('/')
    }
  return (
    <section>
    <form onSubmit={handesubmit}>
        <label>Name:</label>
        <input type="text" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/><br />
        <label>Price:</label>
        <input type="number" placeholder='Enter Price'/><br onChange={(e)=>setPrice(e.target.value)} />
        <button>Add</button>
    </form>
    </section>
  )
}

export default Addpage