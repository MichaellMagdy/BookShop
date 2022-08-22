import React from "react";
import { useEffect } from "react";
import { getBooks } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

export default function Books() {
    const books = useSelector((state => state.books.allBooks))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBooks(1))
    }, [])



    return (

        <div className="mt-11">

            <div className="flex justify-between  mb-11">
                <p className="text-3xl font-bold text-gray-900  ">Popular Now</p>
                <button className="py-2 px-4 rounded text-gray hover:bg-gray-300   " onClick={()=>{
                   dispatch(getBooks(2))
                }}>View all</button>
            </div>

            <div className="grid grid-cols-4 gap-4">
                {books}
            </div>

        </div>

    );
}