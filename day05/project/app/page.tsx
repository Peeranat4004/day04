import Link from "next/link";
import Props from "./components/props";

export default function musical_instruments() {
  const instruments = [
    {
      name: "Fender Guitar",
      price: 300,
      image_url:
              "https://images.unsplash.com/photo-1613032970340-7846189c1cbe?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          like: 20,
      is_new: true,
    },
    {
      name: "Gibson Les Paul Guitar",
      price: 30000,
      image_url:
            "https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3VpdGFyfGVufDB8fDB8fHww",
        like: 40,
      is_new: false,
    },
    {
      name: "PRS Guitar",
      price: 1000,
      image_url:
        "https://images.unsplash.com/photo-1617160895032-11179689e7b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJzJTIwZ3VpdGFyfGVufDB8fDB8fHww",
        like: 25,
    is_new: true,
      },
    {
      name: "Music man Guitar",
      price: 8000,
      image_url:
            "https://images.unsplash.com/photo-1691139996098-3563422a683d?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        like: 55,
        is_new: false,
    },
    {
      name: "Gibson sg Guitar",
      price: 600,
      image_url:
            "https://images.unsplash.com/photo-1672956942512-ac528a4c63dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2clMjBndWl0YXJ8ZW58MHx8MHx8fDA%3D",
        like: 20,
        is_new: true,
    },
    {
      name: "Epiphone Guitar",
      price: 700,
      image_url:
            "https://images.unsplash.com/photo-1520496938502-73e942d08cc3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXBpcGhvbmV8ZW58MHx8MHx8fDA%3D",
        like: 70,
        is_new: true,
    },
    {
      name: "Bass stringrey",
      price: 1000,
      image_url:
            "https://plus.unsplash.com/premium_photo-1681511753167-ba5c66a331c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFzcyUyMHN0ZXJsaW5nfGVufDB8fDB8fHww",
        like: 30,
        is_new: true,
    },
    {
      name: "Bass Fender",
      price: 300,
      image_url:
            "https://images.unsplash.com/photo-1609254757470-978e520296b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        like: 40,
        is_new: false,
    },
    {
      name: "Warwick Bass",
      price: 2000,
      image_url:
            "https://images.unsplash.com/photo-1608138530201-9a18cf6295c4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFzcyUyMHdhcndpY2t8ZW58MHx8MHx8fDA%3D",
        like: 25,
        is_new: true,
    },
    {
      name: "Yamaha Bass",
      price: 600,
      image_url:
            "https://images.unsplash.com/photo-1602408960011-61d979be537e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhc3MlMjB5YW1haGF8ZW58MHx8MHx8fDA%3D",
        like: 1200,
        is_new: false,
    },
  ];

  return (
    <div className="text-black bg-[#DFDFDE]">
      <h1 className="font-bold text-xl text-center m-4 text-[#3D3852]">Product</h1>
      <div className="flex flex-wrap w-[80%] border-2 rounded m-auto m-4 mb-6 p-4 justify-center bg-[#DFDFDE] border-[#9657A8]">
        {instruments.map((instrument, index) => {
          return (
            <Props
            key={index}
            index={index}
            instrumentsName={instrument.name}
            price={instrument.price}
            image_url={instrument.image_url}
            like={instrument.like}
              is_new={instrument.is_new}
            />
          );
        })}
      </div>

      <footer className="bg-[#DFDFDE] p-9 text-[#3D3852] text-center font-bold text-xl w-full">
        --- Product footer ---{" "}
      </footer>
      <div className="flex justify-around bg-[#DFDFDE]  w-full">
        <Link
          className="border-2 border-grey-800 border-dashed text-[#3D3852] block w-fit mb-8 p-2"
          href="/foo"
        >
          Go to Foo Page
        </Link>
        <Link
          className="border-2 border-grey-800 left-100 text-[#3D3852] block w-fit mb-8 p-2 hover:bg-[#3D3852]"
          href="/foo/bar"
        >
          Go to Bar Page
        </Link>
      </div>
    </div>
  );
}