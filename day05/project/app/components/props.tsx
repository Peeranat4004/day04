import Image from "next/image";

export default function props({
index,
instrumentsName,
price,
image_url,
like,
is_new,
}: {
index: number;
instrumentsName: string;
price: number;
image_url: string;
like: number;
is_new: boolean;
}) {
return (
    <div className="relative shadow-lg rounded-md border w-fit bg-[#DFDFDE] p-2 m-2"
    >
    <h2>{instrumentsName}</h2>
    <p>{price}</p>
    <Image
        className="h-50 w-50 p-1 m-4 m-auto mt-2 border-5 border-[#9657A8] hover:rotate-15"
        src={image_url}
        alt={instrumentsName}
        width={100}
        height={100}
    />
        <p>Like {like}</p>
        <button className="border px-1 py-0.5 mt-1 rounded hover:bg-sky-700 active:text-red-700">👍</button>
        <p>{is_new ? "New Arrival" : "Old stock"}</p>
    <button className="border bg-[#FBBC61] px-2 py-1 mt-2 rounded hover:font-bold active:text-red-700">
        Buy Now
    </button>
    <span className="absolute bottom-2 right-3 border border-blue shadow px-2 rounded-full bg-red-100">
        {index + 1}
    </span>
    </div>
);
}