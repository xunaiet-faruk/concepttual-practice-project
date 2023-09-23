import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { setitems } from "../../../Localstore/Localstro";


const Singlecard = () => {
    const [data, setdata] =useState([])
    const params =useParams()
   const states =useLoaderData();
useEffect(()=>{

const selectesid =states.find(item => item.id === params.id)
setdata(selectesid)


},[])
    const { image, phone_name, brand_name, price, rating, id } = data;


    const handlebtn = () =>{
        setitems(id)
        Swal.fire({
            title: 'Sorry bro we have no money because ami pokir codan',
            width: 600,
            padding: '3em',
            color: 'black',
            icon: 'error',
           
            backdrop: `
    rgba(0,0,123,0.4)
    url("/public/vite.svg")
    left top
    no-repeat
  `


        })
    }

  
    return (
        <div>
           

            <div className="relative flex w-full mt-32 max-w-4xl mx-auto flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={image}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                       {phone_name}
                    </h6>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Lyft launching cross-platform service this week
                    </h4>
                    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        Like so many organizations these days, Autodesk is a company in
                        transition. It was until recently a traditional boxed software company
                        selling licenses. Yet its own business model disruption is only part of
                        the story
                    </p>
                    <a className="inline-block" href="#">
                        <button onClick={handlebtn}
                            className="flex bg-gray-300 select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Learn More
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-4 w-4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                ></path>
                            </svg>
                        </button>
                    </a>
                </div>
            </div>


        </div>
    );
};

export default Singlecard;