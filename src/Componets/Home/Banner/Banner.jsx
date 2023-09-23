
import bg2 from './bg2.png'

import user from './user.png'
const Banner = () => {
    return (
        <> 
        <div className="w-[80v%] flex justify-between h-[500px]">
        
            <img className='relative w-full' src={bg2} alt="" />
        
            <div className='mt-10'>
                <img src={user} alt="" />

            </div>
        </div>
            <div className='absolute -mt-72 font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600"'>

<h1 className='text-5xl '>The Mobaile Seler Webside Here Our<br/> Best Collection MObaile Here !!!!!</h1>

                  
        </div>
            <button className='absolute text-2xl px-6 py-4 rounded-md -mt-44 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Our Pages</button>

        </>
    );
};

export default Banner;