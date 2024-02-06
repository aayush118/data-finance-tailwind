import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const cardData = [
  {
    title: 'Single User',
    image: Single,
    price: 1499,
    storage: '500GB Storage',
    users: '1',
    dataLimit: '2',
    buttonColor: 'bg-[#00df9a] text-black',
  },
  {
    title: 'Partnership',
    image: Double,
    price: 2499,
    storage: '1.5TB Storage',
    users: '3',
    dataLimit: '3',
    buttonColor: 'text-[#00df9a] bg-black',
  },
  {
    title: 'Group',
    image: Triple,
    price: 4399,
    storage: '4TB Storage',
    users: '8',
    dataLimit: '4',
    buttonColor: 'bg-[#00df9a] text-black',
  },
];

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 ${
              index % 2 === 1 ? 'bg-gray-100' : ''
            }`}
          >
            <img src={card.image} alt="" className='w-20 mx-auto mt-[-3rem]' />
            <h2 className='text-2xl font-bold text-center py-8'>{card.title}</h2>
            <p className='text-center text-4xl font-bold'>{`₹${card.price}`}</p>
            <div className=' text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-8'>{card.storage}</p>
              <p className='py-2 border-b mx-8'>{`${card.users} Granted Users`}</p>
              <p className='py-2 border-b mx-8'>{`Send up to ${card.dataLimit} GB`}</p>
            </div>
            <button className={`w-[200px] rounded-md font-medium my-6 mx-auto py-3 ${card.buttonColor}`}>
              Start Trial
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;


//without props
// const Cards = () => {
//   return (
//     <div className="w-full py-[10rem] px-4 bg-white">
//       <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
//         <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
//           <img
//             src={Single}
//             alt=""
//             className="w-20 mx-auto mt-[-3rem] bg-white"
//           />
//           <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
//           <p className="text-center text-4xl font-bold">₹1499</p>
//           <div className=" text-center font-medium">
//             <p className="py-2 border-b mx-8 mt-8">500GB Storage</p>
//             <p className="py-2 border-b mx-8">1 Granted User</p>
//             <p className="py-2 border-b mx-8">Send up to 2 GB</p>
//           </div>
//           <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
//             Start Trial
//           </button>
//         </div>

//         <div className="w-full shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300 bg-gray-100">
//           <img
//             src={Double}
//             alt=""
//             className="w-20 mx-auto mt-[-3rem] bg-transparent"
//           />
//           <h2 className="text-2xl font-bold text-center py-8">Patnership</h2>
//           <p className="text-center text-4xl font-bold">₹2499</p>
//           <div className=" text-center font-medium">
//             <p className="py-2 border-b mx-8 mt-8">1.5TB Storage</p>
//             <p className="py-2 border-b mx-8">3 Granted Users</p>
//             <p className="py-2 border-b mx-8">Send up to 3 GB</p>
//           </div>
//           <button className="text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 bg-black">
//             Start Trial
//           </button>
//         </div>

//         <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
//           <img
//             src={Triple}
//             alt=""
//             className="w-20 mx-auto mt-[-3rem] bg-white"
//           />
//           <h2 className="text-2xl font-bold text-center py-8">Group</h2>
//           <p className="text-center text-4xl font-bold">₹4399</p>
//           <div className=" text-center font-medium">
//             <p className="py-2 border-b mx-8 mt-8">4TB Storage</p>
//             <p className="py-2 border-b mx-8">8 Granted Users</p>
//             <p className="py-2 border-b mx-8">Send up to 4 GB</p>
//           </div>
//           <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
//             Start Trial
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };


// export default Cards;



