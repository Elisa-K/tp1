import React from 'react'

const Card = (props) => {

    return (
        <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-5">
            <div>
                <h2 className="text-gray-800 text-3xl font-semibold">{props.title}</h2>
                <p className="mt-2 text-gray-600">{props.text}</p>
                <div className="flex md:justify-end mt-4 flex-wrap justify-center">
                    {props.children}
                </div>
            </div>
        </div>
    )
}


export default Card;