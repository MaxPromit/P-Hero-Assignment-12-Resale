import React from 'react';

const ContactUs = () => {
    return (
        <div className='my-20'>
            <h2 className='mb-8 text-3xl font-semibold flex justify-center'>Contact With Us</h2>
            <section class="bg-white dark:bg-gray-900">
    <div class="container px-4 py-16 mx-auto lg:flex lg:items-center lg:justify-between">
        <h2 class="text-3xl font-semibold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
            For Quick Update, Get In Touch!!!
        </h2>

        <div class="mt-8 lg:mt-0">
            <div class="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:-mx-2">
                <input id="email" type="text" class="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md sm:mx-2 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email Address"/>

                <button class="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-md focus:ring focus:ring-blue-300 focus:ring-opacity-80 fo sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                    Get Started
                </button>
            </div>

            <p class="mt-3 text-sm text-gray-500 dark:text-gray-300">Attention! Offer expires in 30 days. Make sure not to miss this opportunity</p>
        </div>
    </div>
</section>
        </div>
    );
};

export default ContactUs;