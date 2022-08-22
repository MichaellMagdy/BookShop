import React from "react";


export default function Book(props) {

    return (


        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full h-64" src={props.image} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.title}</div>
                <p className="text-gray-700 text-base">
                    {props.author}
                </p>
            </div>
           
        </div>


    );
}