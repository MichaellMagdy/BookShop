import React from "react";
import { useDispatch } from 'react-redux';
import { getBooks } from '../actions';


export default function Bigpic() {
    const dispatch = useDispatch()

    return (

        <div className="flex flex-col  items-center mt-11">

            <div className="bg-local w-full justify-center items-center h-96 rounded-lg" style={{ backgroundImage: "url(/Books-and-coffee.jpg)" }}>
                <p className="text-6xl font-bold text-gray-900 mt-11">Build your library</p>
                <p className="text-xl font-bold text-gray-700 mt-12 ">Buy two selected books and get</p>
                <p className="text-xl font-bold text-gray-700  ">one for free</p>
                <button className="bg-gray-900  py-2 px-4 rounded text-white hover:bg-gray-700 mt-5  " onClick={()=>{
                   dispatch(getBooks(2))

                }}>View all</button>
            </div>

        </div>

    );
}