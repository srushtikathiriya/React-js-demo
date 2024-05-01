import React from 'react'

function Error() {
    return (
        <div>
            <div className='flex justify-center mt-10'>
                <div>
                    <span class="material-symbols-outlined text-9xl text-gray-300">
                        report
                    </span>
                    <h1 className='text-5xl font-bold'>404. Page not found</h1>
                    <p className='text-stone-500 pt-10'>Sorry, we couldn't find the page you where looking for. We suggest that
                       <br/> you return to homepage.</p>
                </div>
            </div>
        </div>
    )
}

export default Error
