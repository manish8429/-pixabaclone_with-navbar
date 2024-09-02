import React, { useContext } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import MainFuction from '../Usecontantet/MainFuction';
import Signup from './Signup';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const NavBar = () => {
  const { fetchData, setquary } = useContext(MainFuction);

  return (
    <>
   <Disclosure as="nav" className="bg-gray-800">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        {/* Mobile menu button */}
        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
          <span className="sr-only">Open main menu</span>
          <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
          <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
        </DisclosureButton>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <img
            alt="Your Company"
            src="/photo_2024-09-02_11-41-07-removebg-preview.png"
            className="h-8 w-auto"
          />
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-current={item.current ? 'page' : undefined}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'rounded-md px-3 py-2 text-sm font-medium',
                )}
              >
                {item.name}
              </a>
            ))}
            {/* Login and Signup Buttons */}
            <button
             
             className="text-gray-300 hover:bg-gray-700 rounded-md px-3 py-2 text-sm font-medium" onClick={()=>document.getElementById('my_modal_3').showModal()}
           >
             Login
           </button>
           <Signup/>
            <button
             
             className="bg-blue-600 text-white hover:bg-blue-700 rounded-md px-3 py-2 text-sm font-medium" onClick={()=>document.getElementById('my_modal_3').showModal()}
           >
             Sign Up
           </button>
           <Signup/>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button
          type="button"
          className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        >
          <span className="sr-only">View notifications</span>
          <BellIcon aria-hidden="true" className="h-6 w-6" />
        </button>

        {/* Profile dropdown */}
        <Menu as="div" className="relative ml-3">
          <div>
            <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="sr-only">Open user menu</span>
              <img
                alt=""
                src="/mypic__1_-removebg-preview.png"
                className="h-8 w-8 rounded-full"
              />
            </MenuButton>
          </div>
          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            <MenuItem>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Your Profile
              </a>
            </MenuItem>
            <MenuItem>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Settings
              </a>
            </MenuItem>
            <MenuItem>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Sign out
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>
      </div>
    </div>
  </div>

  <DisclosurePanel className="sm:hidden">
    <div className="space-y-1 px-2 pb-3 pt-2">
      {navigation.map((item) => (
        <DisclosureButton
          key={item.name}
          as="a"
          href={item.href}
          aria-current={item.current ? 'page' : undefined}
          className={classNames(
            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block rounded-md px-3 py-2 text-base font-medium',
          )}
        >
          {item.name}
        </DisclosureButton>
      ))}
      {/* Login and Signup Buttons for Mobile View */}
      <DisclosureButton
        as="a"
        href="/login"
        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
      >
        Login
      </DisclosureButton>
      <DisclosureButton
        // as="a"
        // href="/signup"
        className="block rounded-md px-3 py-2 text-base font-medium bg-blue-600 text-white hover:bg-blue-700"
      >
        Sign Up
      </DisclosureButton>
    </div>
  </DisclosurePanel>
</Disclosure>

<div className='' style={{
  backgroundColor: "black"
}}>

<div className="my-5 px-4 sm:px-6 lg:px-8">
  <div className="flex flex-wrap justify-center gap-2">
    <button
      onClick={() => fetchData("natural")}
      type="button"
      className="bg-green-600 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-md py-2 px-4 mx-2"
    >
      Natural
    </button>
    <button
      onClick={() => fetchData("science")}
      type="button"
      className="bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md py-2 px-4 mx-2"
    >
      Science
    </button>
    <button
      onClick={() => fetchData("feelings")}
      type="button"
      className="bg-teal-600 text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded-md py-2 px-4 mx-2"
    >
      Feelings
    </button>
    <button
      onClick={() => fetchData("animals")}
      type="button"
      className="bg-red-600 text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-md py-2 px-4 mx-2"
    >
      Animals
    </button>
    <button
      onClick={() => fetchData("computer")}
      type="button"
      className="bg-yellow-600 text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 rounded-md py-2 px-4 mx-2"
    >
      Computer
    </button>
    <button
      onClick={() => fetchData("buildings")}
      type="button"
      className="bg-blue-400 text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 rounded-md py-2 px-4 mx-2"
    >
      Buildings
    </button>
    <button
      onClick={() => fetchData("fashion")}
      type="button"
      className="bg-gray-300 text-gray-800 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 rounded-md py-2 px-4 mx-2"
    >
      Fashion
    </button>
    <button
      onClick={() => fetchData("places")}
      type="button"
      className="bg-blue-400 text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 rounded-md py-2 px-4 mx-2"
    >
      Places
    </button>
  </div>
</div>



      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 offset-md-2 d-flex">
            <input onChange={(e) => setquary(e.target.value)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="button">Search</button>
          </div>
        </div>
      </div>
</div>
    </>
  );
};

export default NavBar;