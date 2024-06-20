import React from 'react';

export default function Profile() {
    return (
        <>
            <div className="max-w-2xl h-32 mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
                <div className="rounded-t-lg h-32 overflow-hidden">
                    <img className="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain' />
                </div>
                <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                    <img className="object-cover object-center h-32" src='https://conceptdraw.com/a1753c3/p1/preview/640/pict--athletic-guy-people-vector-stencils-library' alt='Woman looking front' />
                </div>
                <div className="text-center mt-2">
                    <h2 className="font-semibold">Ranjeet Saw</h2>
                    <p className="text-black"> <span className='font-bold'>Position : </span> SDE Engineer</p>
                    <p className="text-black"><span className='font-bold'>Email : </span> {sessionStorage.getItem("validUserEmail")}</p>
                </div>
                <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
                    
                </ul>
                
            </div>
        </>
    );
}
