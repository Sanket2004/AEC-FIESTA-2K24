import React from 'react'
import { Link } from "react-router-dom";
import Footer from './Footer';

function ErrorPage() {

    return (
        <>
            <div className="grid h-screen place-content-center bg-slate-950 text-white px-4">
                <h1 className="uppercase tracking-widest text-gray-200 font-black sm:text-xl">404 | Not Found</h1>
                <Link
                    to="/"
                    className="mt-6 flex place-items-center justify-center rounded bg-sky-600 px-5 py-3 text-sm font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring">
                    Go Back Home
                </Link>
            </div>
            <Footer/>
        </>
    )
}

export default ErrorPage
