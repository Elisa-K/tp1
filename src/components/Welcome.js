import React from 'react';

const Welcome = ({name}) => {
    return (
        <>
            <h1 className="font-black text-6xl text-center text-indigo-500">Bonjour {name}</h1>
        </>

    );
}

export default Welcome;