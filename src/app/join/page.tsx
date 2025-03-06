import Image from "next/image";

import { RegisterForm } from "@/components/registerForm/registerForm";

import style from "@/app/join/page.module.css";

export default function JoinPage() {
    return (
        <div className={style.container}>
            <div className={style.login}>
                <div className={style.gallery}>
                    <div className={style.imageWrapper}>
                        <Image src="/sao-iii-poster.png" alt="Sao" fill={true} />
                        <p>
                            <span>Anime picture</span>
                            <a href="#" target="_blank" rel="noopener noreferrer">Sword Art Online: War for Underground</a>
                        </p>
                    </div>
                </div>
                <RegisterForm />
            </div>
        </div>

    )
}