import { Fragment } from "react";
import { useRouter } from "next/router";
import { Menu, Transition } from "@headlessui/react";
import { useAuth } from "../lib/auth";

export default function UserDropdown() {
  const { signOut } = useAuth();
  const router = useRouter();

  return (
    <div className="w-56 text-right top-16">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="w-full px-4 py-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full focus:outline-none"></Menu.Button>
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
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => router.push("/")}
                    className={`${
                      active ? "bg-gray-100 text-gray-700" : "text-gray-500"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Dashboard
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => router.push("/settings")}
                    className={`${
                      active ? "bg-gray-100 text-gray-700" : "text-gray-500"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Settings
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => signOut()}
                    className={`${
                      active ? "bg-gray-100 text-gray-700" : "text-gray-500"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
