'use client';

import Link from "next/link";
import Image from "next/image";
import localFont from 'next/font/local'

import { authClient } from '@/lib/auth-client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Sidebar, SidebarHeader, SidebarNav } from "@/components/panel";

import { FaHouse, FaCalendar, FaDisplay, FaUsers } from "react-icons/fa6";
import { LuPanelLeftClose, LuLayoutDashboard, LuBell, LuSearch, LuUser, LuSettings, LuLogOut } from "react-icons/lu";
import { TbPolaroid } from "react-icons/tb";

const SAOFont = localFont({
    src: '../fonts/saowelcome-regular-webfont.woff2'
});

export default function PanelLayout({ children }: { children: React.ReactNode }) {

    const { data: session, isPending } = authClient.useSession();
    const router = useRouter();

    useEffect(() => {
        if (!isPending && !session) {
            router.push('/auth/login');
        }
    }, [session, isPending, router]);
    
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

    const toggleUserDropdown = () => {
        setIsUserDropdownOpen((prev) => !prev);
    };

    const userLogout = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/auth/login");
                },
            },
        });
    };



    return (
        <div className="grid grid-cols-[auto_1fr] h-full">
            <Sidebar>
                <SidebarHeader>
                    <div className="flex items-center text-lg gap-2">
                        <Image src="/logotypes/cardinal_system.png" alt="nanaa" width={32} height={32} />
                        <span className={SAOFont.className}>cardinal_system</span>
                    </div>
                    <button className="rounded text-lg p-3 h-fit bg-gray-100">
                        <LuPanelLeftClose />
                    </button>
                </SidebarHeader>
                {/* <div className="p-2">
                    <div className="flex items-center p-2 gap-2 rounded bg-gray-100">
                        <div>
                            <Image src="/logotypes/logo-small.png" alt="nanaa" width={32} height={32} />
                        </div>
                        <div className="flex flex-col text-sm">
                            <span className="font-semibold">NanaSubs</span>
                            <span className="text-xs">Owner</span>
                        </div>
                    </div>
                </div> */}
                <SidebarNav>
                    <ul className="flex flex-col list-none">
                        <li>
                            <Link href="/panel/dashboard" className="flex items-center gap-2 rounded p-2 bg-primary">
                                <span className="flex items-center justify-center h-7 w-7 text-lg bg-white rounded-full text-primary"><LuLayoutDashboard /></span>
                                <span className="text-white font-semibold text-sm ">Dashboard</span>
                            </Link>
                        </li>
                    </ul>
                    <h3 className="uppercase text-xs font-bold text-gray-500 mt-4 mb-2">anime</h3>
                    <ul className="flex flex-col gap-1 list-none">
                        <li>
                            <Link href="/panel/dashboard" className="flex items-center gap-2 rounded p-2 hover:bg-gray-100">
                                <span className="flex items-center justify-center h-7 w-7 text-base bg-gray-300 rounded-full text-gray-700 "><TbPolaroid /></span>
                                <span className="text-gray-600 font-medium text-sm ">Anime</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/panel/dashboard" className="flex items-center gap-2 rounded p-2 hover:bg-gray-100">
                                <span className="flex items-center justify-center h-7 w-7 text-base bg-gray-300 rounded-full text-gray-700 "><FaDisplay /></span>
                                <span className="text-gray-600 font-medium text-sm ">Odcinki</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/panel/dashboard" className="flex items-center gap-2 rounded p-2 hover:bg-gray-100">
                                <span className="flex items-center justify-center h-7 w-7 text-sm bg-gray-300 rounded-full text-gray-700"><FaCalendar /></span>
                                <span className="text-gray-600 font-medium text-sm ">Harmonogram</span>
                            </Link>
                        </li>
                    </ul>
                    <h3 className="uppercase text-xs font-bold text-gray-500 mt-4 mb-2">użytkownicy</h3>
                    <ul className="flex flex-col gap-1 list-none">
                        <li>
                            <Link href="/panel/dashboard" className="flex items-center gap-2 rounded p-2 hover:bg-gray-100">
                                <span className="flex items-center justify-center h-7 w-7 text-base bg-gray-300 rounded-full text-gray-700 "><FaUsers /></span>
                                <span className="text-gray-600 font-medium text-sm ">Użytkownicy</span>
                            </Link>
                        </li>
                    </ul>
                </SidebarNav>
            </Sidebar>
            <main className="h-full flex flex-col">
                <nav className="relative flex flex-row items-center justify-between gap-2 p-2 border-b-2 border-gray-200">
                    {/* LEFT SIDE */}
                    <div className="flex items-start gap-2">
                        <h1 className="font-bold">Dashboard</h1>
                    </div>
                    {/* CENTER */}
                    <div>

                    </div>
                    {/* RIGHT SIDE */}
                    <div className="flex items-end gap-2">
                        <button className="flex flex-row items-center gap-2 rounded text-lg p-3 h-fit bg-gray-100">
                            <LuSearch />
                            <span className="text-xs font-medium text-gray-500">Start search...&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span className="text-[10px]/[1] font-semibold tracking-wide rounded  p-1 bg-gray-700 text-white">
                                Ctrl + K
                            </span>
                        </button>
                        <button className="rounded text-lg p-3 h-fit bg-gray-100">
                            <LuBell />
                        </button>
                        <div className="relative">
                            <button className="block rounded p-1 bg-gray-100" onClick={toggleUserDropdown}>
                                <Image src="https://cdn.discordapp.com/avatars/226776294069764096/d5199464818c0b680d1cdba789fa9b50" alt="nanaa" width={34} height={34} className="rounded-full" />
                            </button>
                            <div className={`w-64 absolute top-[100%] mt-2 right-0 py-1 bg-white border-2 border-gray-200 z-10 transition-opacity duration-300 ${isUserDropdownOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>
                                <div>
                                    <div className="flex items-center gap-2 p-2">
                                        <Image src="https://cdn.discordapp.com/avatars/226776294069764096/d5199464818c0b680d1cdba789fa9b50" alt="nanaa" width={36} height={36} className="rounded-full" />
                                        <div className="flex flex-col text-sm">
                                            <span className="font-bold text-gray-800">@{session?.user.name}</span>
                                            <span className="text-xs text-gray-700">Administrator</span>
                                        </div>
                                    </div>
                                </div>
                                <hr className="py-1 border-t-2" />
                                <div>
                                    <Link href="/panel/dashboard" className="flex items-center gap-2 rounded p-2 hover:bg-gray-100">
                                        <span className="flex items-center justify-center h-7 w-7 text-base bg-gray-300 rounded-full text-gray-700 "><LuUser /></span>
                                        <span className="text-gray-600 font-medium text-sm">Profil</span>
                                    </Link>
                                    <Link href="/panel/dashboard" className="flex items-center gap-2 rounded p-2 hover:bg-gray-100">
                                        <span className="flex items-center justify-center h-7 w-7 text-base bg-gray-300 rounded-full text-gray-700 "><LuSettings /></span>
                                        <span className="text-gray-600 font-medium text-sm">Ustawienia</span>
                                    </Link>
                                    <button className="flex items-center gap-2 rounded p-2 hover:bg-gray-100 w-full" onClick={userLogout}>
                                        <span className="flex items-center justify-center h-7 w-7 text-sm bg-gray-300 rounded-full text-gray-700 "><LuLogOut /></span>
                                        <span className="text-gray-600 font-medium text-sm">Wyloguj</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <article className="p-2 flex ">
                    {children}
                </article>
            </main>
        </div>
    )
}