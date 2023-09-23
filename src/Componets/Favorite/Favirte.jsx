import React, { useEffect, useState } from 'react';
import { getItems } from '../Localstore/Localstro';
import Favritelocal from './Favritelocal';
import Phone from '../Home/Phones/Phone';


const Favirte = () => {

    const [local,setlocal] =useState([]);
    const [states , setstats] =useState(3);
    const [clear , setclear] =useState([])
    useEffect(()=>{

const handles =getItems();
setlocal(handles)


    },[])


    const handlebtn = () =>{

        const clear =localStorage.clear();
        setclear(clear)
        setstats('')
      
    }
    
    return (
        
        <div>
            <div className='text-center mt-8 -ml-40'>
                <button onClick={handlebtn} className='btn bg-red-500 text-white px-5 py-3 rounded-md '> Delete Store</button>
            </div>
         
            <div className='grid grid-cols-2 gap-8 mt-8'>
                {
                    local.slice(0,states).map(item =><Phone key={item.id} item={item}></Phone>)
                }
            </div>
            <div className='mt-5 text-center -ml-36 mb-5'>

            {local.length > 2  ? ( 
            <button onClick={() => setstats(local.length)} className='btn hover:bg-red-500 hover:text-white bg-slate-300 px-5 py-3 rounded-md'>Show More</button>
 ) : ''}

            </div>
        </div>
    );
};

export default Favirte;