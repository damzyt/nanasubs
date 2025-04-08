"use client"

import Image from "next/image";

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { authClient } from '@/lib/auth-client';

import style from "@/app/auth/layout.module.css";

export default function JoinPage({ children }: { children: React.ReactNode}) {

    const { data: session, isPending } = authClient.useSession();
    const router = useRouter();

    useEffect(() => {
        if (!isPending && session) {
            router.push('/panel/dashboard');
        }
    }, [session, isPending, router]);

    return (
        <div className={style.container}>
            <div className={style.login}>
                <div className={style.gallery}>
                    <div className={style.imageWrapper}>
                        <Image src="/sao-iii-poster.png" alt="Sao" fill={true} />
                        {/* <p>
                            <span>Anime picture</span>
                            <a href="#" target="_blank" rel="noopener noreferrer">Sword Art Online: War for Underground</a>
                        </p> */}
                    </div>
                </div>
                {children}
            </div>
        </div>

    )
}