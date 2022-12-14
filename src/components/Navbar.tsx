import { Disclosure } from '@headlessui/react'
import { MenuIcon, MoonIcon, SunIcon, XIcon } from '@heroicons/react/outline'
import * as React from "react"
import { useRecoilState } from 'recoil'
import { activeMenu as activeMenuAtom, theme as themeAtom } from '../utils/atoms'
import scrollTo from 'gatsby-plugin-smoothscroll';

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

const menuList = [
    "About Me", "Skills", "Experiences", "Certificates", "Projects"
]

export default function Navbar() {
    const [theme, setTheme] = useRecoilState(themeAtom);
    const [activeMenu, setActiveMenu] = useRecoilState(activeMenuAtom);

    function changeTheme(newTheme: string) {
        setTheme(newTheme);
        document.body.classList.toggle("dark");
    }

    function changeActiveMenu(newActiveMenu: string) {
        setActiveMenu(newActiveMenu);
        scrollTo("#" + newActiveMenu.replace(" ", "-").toLowerCase());
    }

    return (
        <Disclosure as="nav">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="-mr-2 flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-dark-700 dark:text-gray-400 hover:text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-white
                                    ">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex">
                                <div className="flex-shrink-0 flex items-center dark:text-white transition-all font-bold text-lg">
                                    FG20-1
                                </div>
                                <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
                                    {/* Current: "border-blue-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                                    {
                                        menuList.map(menu => {
                                            return (
                                                <div
                                                    key={menu}
                                                    className={
                                                        (menu === activeMenu ?
                                                            "border-blue-500 text-gray-900 dark:bg-gray-900 dark:text-white" :
                                                            "border-transparent text-gray-700 hover:border-gray-300 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white")
                                                        + " cursor-pointer inline-flex items-center px-3 pt-1 border-b-2 text-sm font-medium dark:my-3 dark:rounded dark:border-none"
                                                    }
                                                    onClick={(e) => changeActiveMenu(menu)}
                                                >
                                                    {menu}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="flex sm:ml-6 items-center">
                                {
                                    theme === 'dark' ?
                                        <MoonIcon className='h-6 w-6 text-gray-400 hover:text-white cursor-pointer' onClick={(e) => changeTheme("light")} /> :
                                        <SunIcon className='h-6 w-6 text-gray-400 hover:text-gray-500 cursor-pointer' onClick={(e) => changeTheme("dark")} />
                                }
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="dark:px-2 pt-2 pb-3 space-y-1 transition-all">
                            {/* Current: "bg-blue-50 border-blue-500 text-blue-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                            {
                                menuList.map(menu => {
                                    return (
                                        <div
                                            key={menu}
                                            className={
                                                (menu === activeMenu ?
                                                    "bg-blue-50 border-blue-500 text-blue-700 dark:bg-gray-900 dark:text-white" :
                                                    "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white")
                                                + " cursor-pointer block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:px-3 dark:rounded-md dark:border-none"
                                            }
                                            onClick={(e) => changeActiveMenu(menu)}
                                        >
                                            {menu}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
