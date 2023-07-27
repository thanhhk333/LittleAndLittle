import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import { PhoneOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

interface LayoutProps {
    content: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ content }) => {
    const [selectedKey, setSelectedKey] = useState("trangchu"); // Trạng thái lưu giữ selectedKey

    useEffect(() => {
        const path = window.location.pathname;
        setSelectedKey(path.split("/")[1]);
    }, []);

    const handleMenuHover = (key: string) => {
        setSelectedKey(key);
    };

    return (
        <>
            <div className="bg h-screen relative">
                <div className="bg_img h-full relative">
                    <div className="absolute inset-0">{content}</div>
                </div>
                <div className="banner w-full min-h-[110px] fixed top-0">
                    <div className="container mx-auto flex items-center justify-evenly font-light text-sm text-white">
                        <img
                            src={logo}
                            alt="Logo"
                            className="min-w-[91px] min-h-[91px] mr-5"
                        />
                        <nav className="space-x-10 mr-8">
                            <span
                                className={`menu-item ${
                                    selectedKey === "trangchu" ? "selected" : ""
                                }`}
                                onMouseEnter={() => handleMenuHover("trangchu")}
                            >
                                Trang chủ
                            </span>
                            <Link to={"/events"}>
                                {" "}
                                <span
                                    className={`menu-item ${
                                        selectedKey === "events"
                                            ? "selected"
                                            : ""
                                    }`}
                                    onMouseEnter={() =>
                                        handleMenuHover("events")
                                    }
                                >
                                    Sự kiện
                                </span>{" "}
                            </Link>
                            <span
                                className={`menu-item ${
                                    selectedKey === "lienhe" ? "selected" : ""
                                }`}
                                onMouseEnter={() => handleMenuHover("lienhe")}
                            >
                                Liên hệ
                            </span>
                        </nav>
                        <span className="flex items-center font-semibold">
                            <span className="mr-2 w-6 h-6 rounded-full flex items-center justify-center transform rotate-90 border border-white">
                                <PhoneOutlined className="text-white" />
                            </span>
                            0123456789
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Layout;
