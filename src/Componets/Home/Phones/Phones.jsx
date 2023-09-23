import Phone from "./Phone";


const Phones = ({phones}) => {
   
    return (
        <div className="mt-16">
            <h1 className="text-5xl font-semibold text-center italic">All Phones Here</h1>
            <p className="text-center text-gray-400 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, quia?</p>
       <div className="grid grid-cols-3 gap-8 mt-5">
        {


phones.map(item =><Phone key={item.id} item={item}></Phone>)

        }
       </div>
       
        </div>
    );
};

export default Phones;