'use client'

import {
    GithubFilled,
} from '@ant-design/icons';

export default function Navbar() {
    return (
        <div className=" flex justify-center text-gray-200">
            <nav className="container flex grow justify-between py-12">
                <div className="flex items-center gap-4">
                    <h1 className="px-4 text-3xl font-bold ">JinDamanee</h1>
                    <h1>Design</h1>
                    <h1>Web Dev</h1>
                    <h1>Contact</h1>
                </div>
                <GithubFilled className='' />
            </nav>
        </div>
    )
}