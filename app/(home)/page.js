"use client";
import { useRef, useState } from "react";
import classes from "./Home.module.css";
import { FaFacebookF } from "react-icons/fa6";

export default function Home() {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(!isActive);
    };
    return (
        <section className={classes.section}>
            <div
                className={`${classes.circle1} ${
                    isActive ? `${classes.active}` : ""
                }`}
            ></div>
            <header>
                <div className={classes.bgImage}>
                    <img src="/hero.webp" alt="background image" />
                </div>
                <div className={classes.welcome}>
                    <div className="w-fit flex flex-col justify-between h-full">
                        <div>
                            <div className={classes.title}>
                                <p>
                                    ظبط قهوتك صح معانا
                                    <br />
                                    واستعد لتجربة قهوة متميزة ومشبعة بالنكهات
                                    الرائعة
                                </p>
                                <p className="text-2xl font-normal pt-8">
                                    استمتع بتجربة قهوة لذيذة ومميزة معنا. للحصول
                                    على مذاق مثالي، اختر نوعية جيدة من البن
                                    المحمص حديثًا. يُنصح باستخدام مطحنة لطحن
                                    البن قبل التحضير للحصول على طحنة مناسبة
                                </p>
                            </div>
                            <div>
                                <button onClick={handleClick}>اطلب الان</button>
                                <button onClick={handleClick}>من نحن</button>
                            </div>
                        </div>
                        <div className={classes.qrCode}>
                            <div>
                                <img src="/qr.jfif" alt="qr code" />
                            </div>
                            <p>
                                استعد لتجربة قهوة متميزة ومشبعة بالنكهات الرائعة
                                معنا. للحصول على مذاق لا يُنسى، اختر أفضل أنواع
                                البن المحمصة بعناية. استخدم مطحنة لطحن البن قبل
                                التحضير للحصول على حبيبات متجانسة
                            </p>
                        </div>
                    </div>
                </div>
                <div className={classes.aside}>
                    <p className={classes.verticalText}>Cafiena</p>
                    <ul className={classes.social}>
                        <li>
                            <FaFacebookF />
                        </li>
                        <li>
                            <FaFacebookF />
                        </li>
                        <li>
                            <FaFacebookF />
                        </li>
                    </ul>
                </div>
            </header>
        </section>
    );
}
