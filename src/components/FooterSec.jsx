import React from "react";
import {
  RiInstagramFill,
  RiTwitterFill,
  RiWhatsappFill,
  RiLinkedinFill,
} from "react-icons/ri";
const FooterSec = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-green-700 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a className="text-green-700 hover:text-gray-800">
                  Second Link
                </a>
              </li>
              <li>
                <a className="text-green-700 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a className="text-green-700 hover:text-gray-800">
                  Fourth Link
                </a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-green-700 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a className="text-green-700 hover:text-gray-800">
                  Second Link
                </a>
              </li>
              <li>
                <a className="text-green-700 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a className="text-green-700 hover:text-gray-800">
                  Fourth Link
                </a>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-green-700 hover:text-gray-800">First Link</a>
              </li>
              <li>
                <a className="text-green-700 hover:text-gray-800">
                  Second Link
                </a>
              </li>
              <li>
                <a className="text-green-700 hover:text-gray-800">Third Link</a>
              </li>
              <li>
                <a className="text-green-700 hover:text-gray-800">
                  Fourth Link
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
            <h1 className="text-3xl font-bold mb-[12px] cursor-pointer">
              <span className="text-green-700">&lt;</span>Lo
              <span className="text-green-700">go</span>
              <span className="text-green-700">/&gt;</span>
            </h1>
            <p>--- 9-Aug-2024 ---</p>
            <p>@ All rights reserved.</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2024 <span className="text-green-700">&lt;</span>Lo
            <span className="text-green-700">go</span>
            <span className="text-green-700">/&gt;</span> —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @knyttneve
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a className="text-gray-500">
              <RiInstagramFill className="w-[25px] h-[25px]" />
            </a>
            <a className="ml-3 text-gray-500">
              <RiTwitterFill className="w-[25px] h-[25px]" />
            </a>
            <a className="ml-3 text-gray-500">
              <RiWhatsappFill className="w-[25px] h-[25px]" />
            </a>
            <a className="ml-3 text-gray-500">
              <RiLinkedinFill className="w-[25px] h-[25px]" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSec;
