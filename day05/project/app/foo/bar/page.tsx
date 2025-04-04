import Link from 'next/link'

export default function bar() {
    return (
        <div>
            <h1 className="font-bold text-xl my-4 shadow-2xl ">bar</h1>
            <Link className=' block text-red-500  font-bold text-xl m-2 p-2 mb-8 w-fit rounded bg-slate-200 hover:bg-slate-300' 
        href="/">
        BACK</Link>
        </div>
    )
}