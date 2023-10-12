import React, { useState } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";

function Landingpage() {
  const [modal, setModal] = useState(false);

  return (
    <>
      {/* header */}
      <header className="mt-5 sm:mt-10 pl-6 sm:pl-0 sm:ml-32 flex items-center">
        <h1 className="text-2xl font-thinbold text-white">
          Startup<span className="ml-2">3</span>
        </h1>
        {/* desktop */}
        <nav className="hidden items-center sm:space-x-28 ml-44 sm:inline">
          <span className="text-gray-400">Overview</span>
          <span className="text-white">Prices</span>
          <span className="text-white">Blog</span>
          <span className="text-white">Feedback</span>
          <span className="text-white bg-pink p-3 rounded-full">Purchase</span>
        </nav>
        {/* mobile */}
        <AiOutlineMenuFold
          className="sm:hidden text-3xl text-white ml-48"
          onClick={() => {
            setModal(!modal);
          }}
        />
        <AnimatePresence>
          {modal && (
            <motion.div
              className="bg-white rounded-b-xl text-black absolute left-0 w-full h-auto top-0 p-4 flex flex-col items-center"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <button
                onClick={() => {
                  setModal(!modal);
                }}
                className="ml-52 mt-3 text-xl text-gray-500"
              >
                <RxCross2 />
              </button>
              <a
                onClick={() => {
                  setModal(!modal);
                }}
                className="my-1 text-xl mt-14 text-gray-700"
              >
                Overview
              </a>
              <hr className="w-10 my-2 bg-black" />
              <a
                onClick={() => {
                  setModal(!modal);
                }}
                className="my-1 text-xl text-gray-500"
              >
                Prices
              </a>
              <hr className="w-10 my-2 bg-black" />
              <a
                onClick={() => {
                  setModal(!modal);
                }}
                className="my-1 text-xl text-gray-500"
              >
                Blog
              </a>
              <hr className="w-10 my-2 bg-black" />
              <a
                onClick={() => {
                  setModal(!modal);
                }}
                className="my-1 text-xl text-gray-500"
              >
                Feedback
              </a>
              <hr className="w-10 my-2 bg-black" />
              <a
                onClick={() => {
                  setModal(!modal);
                }}
                className="mt-5 text-xl text-white bg-pink p-3 rounded-full mb-16"
              >
                Purchase
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      {/* main */}
      <main className="sm:flex pb-8 sm:pb-0">
        <section className="mt-10 ml-4 sm:mt-20 sm:ml-32">
          <b className="text-white text-2xl sm:text-4xl p-5 w-56 sm:w-80 flex flex-col">
            <span>Generate</span>
            <span>Awesome Web</span>
            <span>Pages</span>
          </b>
          <p className="text-white text-lg w-64 ml-5">
            The most important part of the Startup is the samples. The samples
            form a set of 25 usable pages you can use as is or you can add new
            blocks.
          </p>
          <button className="bg-pink rounded-full p-2 ml-5 mt-8 text-white">
            Learn More
          </button>
        </section>
        <aside className="bg-white w-80 mt-14 ml-8 sm:ml-52 rounded-lg flex flex-col">
          <h1 className="text-2xl font-semibold text-blue flex justify-center mt-8">
            Sign Up Now
          </h1>
          <input
            type="email"
            className="rounded-full w-52 mt-5 ml-14 p-2 border border-gray-300 cursor-pointer"
            placeholder="Your Email"
            required
          />
          <input
            type="password"
            className="rounded-full w-52 mt-5 ml-14 p-2 border border-gray-300 cursor-pointer"
            placeholder="Your Password"
            required
          />
          <div className="ml-16 flex items-center mt-5">
            <input type="checkbox" className="cursor-pointer" />
            <span className="ml-2 font-bold text-gray-400 text-xs">
              I agree to the Terms of Service.
            </span>
          </div>
          <button className="bg-button1 text-white p-2 w-52 rounded-full mt-4 ml-14">
            Sign In
          </button>
          <div className="mt-4 flex items-center ml-4">
            <hr className="bg-black w-32" />
            <span className="text-gray-400 px-1">OR</span>
            <hr className="bg-black w-32" />
          </div>
          <button className="bg-button2 text-white p-2 w-52 rounded-full mt-4 ml-14">
            Login via Twitter
          </button>
          <span className="text-gray-400 ml-16 mt-4 text-sm pb-5">
            Do you have an Account?
            <a className="text-signinbutton ml-2 cursor-pointer">Sign In</a>
          </span>
        </aside>
      </main>
    </>
  );
}

export default Landingpage;
