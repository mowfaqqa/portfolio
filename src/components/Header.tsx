import Link from "next/link";
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { AlignCenter } from "react-feather";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
        <div className="px-6">
            <h1 className="font-unbounded text-xl font-bold">MWFFQ</h1>
        </div>
      <div className="hidden md:flex items-center justify-center py-3 px-6 gap-5">
        <Link href="/" passHref>
          <span className="text-taupe text-xl font-medium">Home</span>
        </Link>
        <Link href="/about" passHref>
          <span className="text-taupe text-xl font-medium">About</span>
        </Link>
        <Link href="/project" passHref>
          <span className="text-taupe text-xl font-medium">Project</span>
        </Link>
        <Link href="#contact" passHref>
          <span className="text-taupe text-xl font-medium">Contact</span>
        </Link>
      </div>
      <div className="block md:hidden fixed top-0 right-2 w-56 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-opacity-20 px-4 py-2 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-caribbean focus-visible:ring-opacity-75">
            <AlignCenter size={25} color="#1e646e"/>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-taupe rounded-md bg-caribbean shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-taupe text-spaceblue' : 'text-taupe'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Home
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                        active ? 'bg-taupe text-spaceblue' : 'text-taupe'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    About
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                        active ? 'bg-taupe text-spaceblue' : 'text-taupe'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Project
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                        active ? 'bg-taupe text-spaceblue' : 'text-taupe'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Contact
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
    </div>
  );
};

export default Header;
