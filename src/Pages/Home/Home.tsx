import React, { forwardRef, useRef, useState } from "react";
import Layout from "../Layout/Layout";
import baloon1 from "../../assets/images/pinkBalloon.png";
import baloon2 from "../../assets/images/fullBalloon.png";
import baloon3 from "../../assets/images/redBalloon.png";
import baloon4 from "../../assets/images/2Balloon.png";
import logoDamSen from "../../assets/images/logoDamSen.png";
import lisa from "../../assets/images/Lisa_Arnold.svg";
import star from "../../assets/images/home/start.png";
import children from "../../assets/images/4children.png";
import {
    Row,
    Col,
    Input,
    Space,
    Button,
    Image,
    Select,
    DatePicker,
    Card,
} from "antd";
import btn from "../../assets/images/events/down-btn.png";
import calendar from "../../assets/images/home/calendar.png";
import { Link } from "react-router-dom";
const Home = () => {
    // viết hàm xử lý sự kiện click vào hình ảnh thì sẽ click vào thẻ select
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleImageClick = () => {
        isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
    };

    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    const handleCalendarClick = () => {
        isCalendarOpen ? setIsCalendarOpen(false) : setIsCalendarOpen(true);
    };

    return (
        <>
            <Layout
                content={
                    <>
                        <div className="relative">
                            <div className="absolute">
                                <Image
                                    src={baloon1}
                                    preview={false}
                                    className="scale-75 transform translate-y-52 -translate-x-9"
                                />
                            </div>
                        </div>
                        <Row className="mt-[95px] relative" justify={"center"}>
                            <div className="absolute">
                                <Image
                                    src={baloon2}
                                    preview={false}
                                    className="scale-75 transform translate-y-4 -translate-x-28"
                                />
                            </div>
                            <div className="absolute">
                                <Image
                                    src={baloon3}
                                    preview={false}
                                    className="scale-75 transform -translate-y-10 translate-x-24"
                                />
                            </div>
                            <div className="absolute">
                                <Image
                                    src={children}
                                    preview={false}
                                    style={{
                                        transform:
                                            "scale(0.5) translate(47rem, -14rem)",
                                    }}
                                />
                            </div>
                            <Col span={20} className="flex items-center">
                                <Image
                                    src={logoDamSen}
                                    preview={false}
                                    className="scale-75"
                                />
                                <p className="font-koni text-4xl text-white">
                                    Đầm sen <br /> Park
                                </p>
                            </Col>
                        </Row>

                        <Row className="mt-5">
                            <Col span={24}>
                                <Row justify={"center"}>
                                    <Col
                                        span={12}
                                        className="  transform translate-x-5"
                                    >
                                        <div className="table-outside">
                                            <div className="table-inside">
                                                <Row className="p-7 text-[gray] ">
                                                    <p>
                                                        Lorem ipsum dolor sit
                                                        amet, consectetur
                                                        adipiscing elit.
                                                        Suspendisse ac mollis
                                                        justo. Etiam volutpat
                                                        tellus quis risus
                                                        volutpat, ut posuere ex
                                                        facilisis.
                                                        <br />
                                                        <br />
                                                        Suspendisse iaculis
                                                        libero lobortis
                                                        condimentum gravida.
                                                        Aenean auctor iaculis
                                                        risus, lobortis molestie
                                                        lectus consequat a.
                                                    </p>
                                                    <Col
                                                        span={24}
                                                        className="mt-3"
                                                    >
                                                        <Space
                                                            size={0}
                                                            direction="vertical"
                                                            align="center"
                                                            className="font-bold ml-16 relative"
                                                        >
                                                            <img
                                                                src={lisa}
                                                                alt=""
                                                                className="absolute left-0 scale-50 transform -translate-y-36 -translate-x-64"
                                                            />
                                                            <p className="flex items-center">
                                                                <Image
                                                                    className="scale-50"
                                                                    src={star}
                                                                ></Image>{" "}
                                                                Lorem ipsum
                                                                dolor sit amet,
                                                                consectetur
                                                                adipiscing elit.{" "}
                                                            </p>
                                                            <p className="flex items-center">
                                                                <Image
                                                                    className="scale-50"
                                                                    src={star}
                                                                ></Image>{" "}
                                                                Lorem ipsum
                                                                dolor sit amet,
                                                                consectetur
                                                                adipiscing elit.{" "}
                                                            </p>
                                                            <p className="flex items-center">
                                                                <Image
                                                                    className="scale-50"
                                                                    src={star}
                                                                ></Image>{" "}
                                                                Lorem ipsum
                                                                dolor sit amet,
                                                                consectetur
                                                                adipiscing elit.{" "}
                                                            </p>

                                                            <p className="flex items-center">
                                                                <Image
                                                                    className="scale-50"
                                                                    src={star}
                                                                ></Image>{" "}
                                                                Lorem ipsum
                                                                dolor sit amet,
                                                                consectetur
                                                                adipiscing elit.{" "}
                                                            </p>
                                                        </Space>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col span={1} className="middleTable"></Col>

                                    <Col
                                        span={7}
                                        className="table w-full h-full transform -translate-x-8 "
                                    >
                                        <Row
                                            className="transform -translate-y-4"
                                            justify={"center"}
                                        >
                                            <p
                                                className="font-koni text-white  bg-btn"
                                                style={{
                                                    padding: "20px 40px",
                                                }}
                                            >
                                                VÉ CỦA BẠN
                                            </p>
                                        </Row>
                                        <div className="content -translate-y-4">
                                            <Row
                                                justify={"center"}
                                                align={"middle"}
                                                gutter={5}
                                            >
                                                <img
                                                    src={baloon4}
                                                    alt=""
                                                    className="absolute"
                                                    style={{
                                                        transform:
                                                            "translate(340px, .75rem) scale(0.5)",
                                                    }}
                                                />
                                                <Col span={18} className="">
                                                    <Select
                                                        id="select-combo"
                                                        size="large"
                                                        defaultValue="Gói gia đình"
                                                        suffixIcon={false}
                                                        open={isMenuOpen}
                                                        className="w-full"
                                                        onChange={() => {
                                                            setIsMenuOpen(
                                                                false
                                                            );
                                                        }}
                                                        options={[
                                                            {
                                                                value: "Gói gia đình",
                                                                label: "Gói gia đình",
                                                            },
                                                            {
                                                                value: "Gói đôi",
                                                                label: "Gói đôi",
                                                            },
                                                            {
                                                                value: "Vé 1 người",
                                                                label: "Vé 1 người",
                                                            },
                                                        ]}
                                                    />
                                                </Col>
                                                <Col span={4} className="">
                                                    <img
                                                        src={btn}
                                                        className="cursor-pointer scale-75 
                                                                     "
                                                        alt=""
                                                        onClick={
                                                            handleImageClick
                                                        }
                                                    />
                                                </Col>
                                            </Row>
                                            <Row
                                                justify={"center"}
                                                align={"middle"}
                                                gutter={5}
                                            >
                                                <Col span={8}>
                                                    <Input
                                                        placeholder="Số lượng vé"
                                                        size="large"
                                                    />
                                                </Col>
                                                <Col span={10}>
                                                    <DatePicker
                                                        format={"DD/MM/YYYY"}
                                                        size="large"
                                                        placeholder="Ngày sử dụng"
                                                        suffixIcon={false}
                                                        open={isCalendarOpen}
                                                        placement="bottomLeft"
                                                        className="w-full"
                                                        onChange={() => {
                                                            setIsCalendarOpen(
                                                                false
                                                            );
                                                        }}
                                                    />
                                                </Col>
                                                <Col span={4}>
                                                    <img
                                                        src={calendar}
                                                        className="scale-75 cursor-pointer"
                                                        alt=""
                                                        onClick={
                                                            handleCalendarClick
                                                        }
                                                    />
                                                </Col>
                                            </Row>
                                            <Row
                                                justify={"center"}
                                                align={"middle"}
                                                className="space-y-3"
                                            >
                                                <Col span={22}>
                                                    <Input
                                                        placeholder="Họ và tên"
                                                        size="large"
                                                    />
                                                </Col>
                                                <Col span={22}>
                                                    <Input
                                                        placeholder="Số điện thoại"
                                                        size="large"
                                                    />
                                                </Col>
                                                <Col span={22}>
                                                    <Input
                                                        placeholder="Địa chỉ email"
                                                        size="large"
                                                    />
                                                </Col>
                                                <Link to="/pay">
                                                    <Button
                                                        size="middle"
                                                        className="px-20 text-white btn-color mb-6"
                                                    >
                                                        <span className="font-koni">
                                                            Đặt vé
                                                        </span>
                                                    </Button>
                                                </Link>
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="flex w-screen" justify={"end"}>
                            <img
                                src={baloon2}
                                alt=""
                                className="scale-75 -translate-y-32 -translate-x-9"
                            />
                        </Row>
                    </>
                }
            />
        </>
    );
};
export default Home;
