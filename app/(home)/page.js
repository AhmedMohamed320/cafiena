"use client";
import { useEffect, useState } from "react";
import classes from "./Home.module.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
    const [isActive, setIsActive] = useState(false);
    const handleClick = () => {
        setIsActive(true);
    };
    // ---------
    const [numPage, setNumPage] = useState(0);
    const [page0IsActive, setPage0IsActive] = useState(true);
    const [page1IsActive, setPage1IsActive] = useState(false);
    useEffect(() => {
        if (numPage == 0) {
            setPage1IsActive(false);
        } else if (numPage == 1) {
            setPage1IsActive(true);
        }
    }, [numPage]);
    // -----------------
    const [numFormTypes, setNumFormTypes] = useState(0);

    const [type1Value, setType1Value] = useState("");
    const [type2Value, setType2Value] = useState("");
    const [type3Value, setType3Value] = useState("");
    const [type4Value, setType4Value] = useState("");

    function handleChangeType1(e) {
        const selectedType = e.target.innerText;
        setType1Value(selectedType);
    }

    function handleChangeType2(e) {
        const selectedType = e.target.innerText;
        setType2Value(selectedType);
    }
    function handleChangeType3(e) {
        const selectedType = e.target.innerText;
        setType3Value(selectedType);
    }
    function handleChangeType4(e) {
        const selectedType = e.target.innerText;
        setType4Value(selectedType);
    }

    return (
        <section className={classes.section}>
            <div
                className={`${classes.circle1} ${
                    isActive ? `${classes.active}` : ""
                }`}
            >
                <p className={classes.verticalText2}>Cafiena</p>
            </div>
            <header
                className={`${classes.header} ${
                    page0IsActive ? `${classes.active}` : ""
                }`}
            >
                <div className={classes.image1}>
                    <img src="/cup_2.png" alt="cup page" />
                </div>
                <div className={classes.welcome}>
                    <div className={classes.bgImage}>
                        <img src="/hero.webp" alt="background image" />
                    </div>
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
                                <button
                                    onClick={() => {
                                        handleClick();
                                        setNumPage(1);
                                    }}
                                >
                                    اطلب الان
                                </button>
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
            <section
                className={`${classes.section2} ${
                    page1IsActive ? `${classes.active}` : ""
                }`}
            >
                <div className=" relative w-full h-full flex flex-col gap-8">
                    <div
                        className={classes.arrowBack}
                        onClick={() => {
                            setNumPage(numPage - 1);
                            setIsActive(false);
                        }}
                    >
                        <IoIosArrowForward />
                        <p
                            className={`text-5xl font-semibold ${classes.makeYourCafe}`}
                        >
                            اعمل قهوتك على مزاجك
                        </p>
                    </div>

                    {/* ------------ */}
                    <div className={classes.upForm}>
                        <div className={classes.image}>
                            <img src="/cup_4.png" alt="cup coffee" />
                        </div>
                        <p className="text-2xl text-center pb-8 text-neutral-600">
                            {type1Value && <span>{type1Value} - </span>}
                            {type2Value && <span>{type2Value} - </span>}
                            {type3Value && <span>{type3Value} - </span>}
                            {type4Value && <span>{type4Value} </span>}
                        </p>
                        <div className="w-full flex items-center justify-center flex-col">
                            <div
                                className={`${classes.type1} ${
                                    numFormTypes === 0
                                        ? `${classes.active}`
                                        : ""
                                }`}
                            >
                                <p>نوع قهوتك</p>
                                <ul onClick={handleChangeType1}>
                                    <li>
                                        <p>برازيلي</p>
                                    </li>
                                    <li>
                                        <p>تركي</p>
                                    </li>
                                    <li>
                                        <p>عربي</p>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className={`${classes.type2} ${
                                    numFormTypes === 1
                                        ? `${classes.active}`
                                        : ""
                                }`}
                            >
                                <p>عايزها محوج ولا ساده؟</p>
                                <ul onClick={handleChangeType2}>
                                    <li>
                                        <p>ساده</p>
                                    </li>
                                    <li>
                                        <p>محوج</p>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className={`${classes.type3} ${
                                    numFormTypes === 2
                                        ? `${classes.active}`
                                        : ""
                                }`}
                            >
                                <p>درجه اللون</p>
                                <ul onClick={handleChangeType3}>
                                    <li>
                                        <p>فاتح</p>
                                    </li>
                                    <li>
                                        <p>وسط</p>
                                    </li>
                                    <li>
                                        <p>غامق</p>
                                    </li>
                                </ul>
                            </div>
                            <div
                                className={`${classes.type4} ${
                                    numFormTypes === 3
                                        ? `${classes.active}`
                                        : ""
                                }`}
                            >
                                <p>سكرك ايه ؟</p>
                                <ul onClick={handleChangeType4}>
                                    <li>
                                        <p>ساده</p>
                                    </li>
                                    <li>
                                        <p>عالريحه</p>
                                    </li>
                                    <li>
                                        <p>مظبوطه</p>
                                    </li>
                                    <li>
                                        <p>زياده</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <ul className={classes.btnsChangeFormPage}>
                                <li
                                    className="text-4xl"
                                    onClick={() => {
                                        if (numFormTypes > 0) {
                                            setNumFormTypes(numFormTypes - 1);
                                        }
                                    }}
                                >
                                    <FaLongArrowAltRight />
                                </li>
                                {numFormTypes < 3 ? (
                                    <li
                                        className="text-4xl"
                                        onClick={() => {
                                            if (numFormTypes < 3) {
                                                setNumFormTypes(
                                                    numFormTypes + 1
                                                );
                                            }
                                        }}
                                    >
                                        <FaLongArrowAltLeft />
                                    </li>
                                ) : (
                                    <li className="text-xl">
                                        <a
                                            href={`https://wa.me/+201280626320?text=${encodeURIComponent(
                                                `${type1Value} - ${type2Value} - ${type3Value} - ${type4Value}`
                                            )}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            ابعت طلبك
                                        </a>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                    {/* ------------ */}
                    <img
                        src="/cup.png"
                        alt="cup"
                        className={classes.randomImage1}
                    />
                    <img
                        src="/icon.png"
                        alt="icon"
                        className={classes.randomImage2}
                    />
                </div>
            </section>
        </section>
    );
}
