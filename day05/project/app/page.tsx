import Image from 'next/image'

export default function project() {
  return ( <div className="w-[80%] border mb-2">

    <h1 className="text-2xl font-bold m-2 p-2">Hello world! I here Pee 
    </h1>

    <Image
      className='p-2 m-4'
      src="https://computing.psu.ac.th/th/wp-content/uploads/2023/09/PSU-CoC-ENG_01_x49.png"
      width={150}
      height={150}
      alt="PSU Logo"
    />

    <Image
      className='p-2 m-4'
      src="/next.svg"
      alt="Picture of the author"
      width={150}
      height={150} 
      // alt="Next.js Logo"
    />


    <p className="w-64 border mb-4 ml-4 bg-blue-200 text-black" >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic facilis tempore id cupiditate illum!
    </p>
    <p className="w-64 border mb-4 ml-4 bg-blue-600 text-black">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic facilis tempore id cupiditate illum!
    </p>
    <p className="w-64 border mb-4 ml-4 bg-yellow-200 text-black ">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut hic facilis tempore id cupiditate illum!
    </p>
    </div>
  )
}