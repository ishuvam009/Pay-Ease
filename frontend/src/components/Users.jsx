import React from 'react'

export function Users(value) {
        

        return (
                <>
                <div className='ml-8 mb-3 font-semibold text-2xl mt-10'>Users</div>
                <input type="text" placeholder="Search Users ..." className="  sm:w-5/6 h-12 text-sm rounded-lg border-gray-300 
                -mt-1 ml-8 border-2 px-10 py-2 
                focus:outline-none focus:border-blue-500 "/>

                <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse m-5">
                <button type="button" class="flex text-sm rounded-md md:me-0 focus:ring-4 focus:ring-gray-300 " id="user-menu-button" 
                aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                  <img class="w-9 h-9 m-3 rounded-full mt-1 mr-1 mb-1 ml-4" src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="user photo"/>
                  <p className='p-3 text-black font-semibold text-lg -mt-0.5'>Aditya Kumar</p>
                  
                  <button type="button" class="text-white bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 
                  font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800
                   dark:focus:ring-black-700 dark:border-green-700 lg:fixed lg:justify-end lg:flex-col lg:right-60 sm:ml-30 sm:fixed sm:justify-end sm:flex-col hover:bg-green-500">Send Money</button>
                </button>
                </div>  
                </>
        )
}
