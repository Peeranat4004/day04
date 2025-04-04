import Image from 'next/image'
import { Bungee_Tint } from "next/font/google";
import Link from 'next/link';

const bungee = Bungee_Tint({
  subsets: ["latin"],
  weight: "400",
});

export default function project() {
  return (<div>
    {/* grid-cols-1 gap-4 
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      xl:grid-cols-5

      flex flexwrap */}

    <h1 className={`${bungee.className} "font-bold m-2 p-2"`}>Hello world!!</h1>
    
      <Link className='border block text-blue-500 hover:text-blue-700 font-bold text-xl m-2 p-2 mb-8 w-fit rounded bg-slate-200 hover:bg-slate-300' 
        href="/products">
        Go to Products Page</Link>

        <Link className='border block text-red-500 hover:text-blue-700 font-bold text-xl m-2 p-2 mb-8 w-fit rounded bg-slate-200 hover:bg-slate-300' 
        href="/foo">
        Go to Foo page</Link>

        <Link className=' block text-red-500  font-bold text-xl m-2 p-2 mb-8 w-fit rounded bg-slate-200 hover:bg-slate-300' 
        href="/foo/bar">
        bar</Link>


    <div className="mb-10 w-[80%] border rounded p-4 m-auto bg-slate-100 
    grid 
    grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
      <Image
        className='p-2 m-4'
        src="https://computing.psu.ac.th/th/wp-content/uploads/2023/09/PSU-CoC-ENG_01_x49.png"
        width={150}
        height={150}
        alt="PSU Logo"
      />

      <Image
        className="p-2 m-4"
        src="/next.svg"
        width={150}
        height={150}
        alt="Next.js Logo"
      />

      <div className="w-64 p-2 border mb-2 rounded bg-blue-200 hover:bg-blue-700 hover:text-blue-50 ">
        Lorem idivsum, dolor sit amet consectetur adidivisicing elit. Doloribus, consequuntur.
      </div>
      <div className="w-64 p-2 border mb-2 rounded bg-blue-600 ">
        Lorem idivsum, dolor sit amet consectetur adidivisicing elit. Doloribus, consequuntur.
      </div>
      <div className="w-64 p-2 border rounded bg-red-300 ">
        Lorem idivsum, dolor sit amet consectetur adipisicing elit. Doloribus, consequuntur.
      </div>
    </div>


      
    <div className="relative w-[350px] h-[150px] bg-lime-400 text-white text-center ">
        
        <h1 className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 bg-cyan-200 text-black px-3 py-1 text-lg font-semibold border border-black ">
          Banner
        </h1>

        <button className="absolute right-0 bg-white text-black px-2 border border-black text-xs">
          ✖
        </button>

        <div className="absolute left-[-30px] top-[30%] w-[60px] h-[60px] bg-white rounded-full "></div>

        <div className="absolute right-[-33px] bottom-[-25px] w-[90px] h-[55px] bg-white rounded-t-[40px] rounded-l-[30px] "></div>

        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 font-semibold border border-dotted border-white">
          This is css position
        </span>
      </div>

  </div>)
}