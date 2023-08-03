import React from "react";
import Layout from "../Layout/Layout";
import bannerLeft from "../../assets/images/events/Group.png";
import bannerRight from "../../assets/images/events/banner_right.png";
import sk1 from "../../assets/images/sk1.png";
import sk2 from "../../assets/images/sk2.png";
import sk3 from "../../assets/images/sk3.png";
import sk4 from "../../assets/images/sk4.png";

import { Row, Col, Button, Image } from "antd";
import { Card } from "antd";
import { CalendarOutlined } from "@ant-design/icons";
import bg_btn from "../../assets/images/events/btn.png";
import arrow from "../../assets/images/events/arrow.png";
import { Link } from "react-router-dom";
import { Carousel, CarouselItem } from "../Components/Carousel";

const Events = () => {
    const items = [
        {
            id: 1,
            src: sk1,
            date: "20/10/2021 - 01/08/2023",
        },
        {
            id: 2,
            src: sk2,
            date: "20/10/2021 - 01/08/2023",
        },
        {
            id: 3,
            src: sk3,
            date: "20/10/2021 - 01/08/2023",
        },
        {
            id: 4,
            src: sk4,
            date: "20/10/2021 - 01/08/2023",
        },
        {
            id: 5,
            src: sk1,
            date: "20/10/2021 - 01/08/2023",
        },
        {
            id: 6,
            src: sk2,
            date: "20/10/2021 - 01/08/2023",
        },
    ];
    return (
        <>
            <Layout
                content={
                    <>
                        <div
                            className="flex justify-between 
                    "
                        >
                            <div className="fixed left-0 transform -translate-x-16">
                                <img
                                    src={bannerLeft}
                                    alt=""
                                    className="scale-75"
                                />
                            </div>

                            <h3 className="mt-28 text-5xl mx-auto text-white font-koni">
                                Sự kiện nổi bật
                            </h3>
                            <div className="fixed right-0 transform translate-x-16 -translate-y-9">
                                <img
                                    src={bannerRight}
                                    alt=""
                                    className="scale-75"
                                />
                            </div>
                        </div>
                        <Row gutter={10} justify={"center"} className="mt-10">
                            <Col span={20}>
                                <Carousel
                                    pagination={false}
                                    items={items}
                                    renderItem={({ item, isSnapPoint }) => (
                                        <CarouselItem
                                            key={item.id}
                                            isSnapPoint={isSnapPoint}
                                        >
                                            <Col>
                                                <Card
                                                    hoverable
                                                    cover={
                                                        <img
                                                            alt="example"
                                                            src={sk1}
                                                            className=""
                                                        />
                                                    }
                                                >
                                                    <h3 className="font-bold text-2xl ">
                                                        Sự kiện {item.id}
                                                    </h3>
                                                    <p className="font-light">
                                                        Đầm sen Park
                                                    </p>
                                                    <p className="flex items-center">
                                                        {" "}
                                                        <CalendarOutlined className="text-[#FA7D09] me-2" />{" "}
                                                        {item.date}
                                                    </p>
                                                    <h2 className="font-bold text-2xl text-color my-2">
                                                        25.000 VND
                                                    </h2>
                                                    <Link to="/events/event-detail">
                                                        <Button
                                                            size="middle"
                                                            className="px-9 text-white btn-color"
                                                        >
                                                            <span className="font-koni">
                                                                <span className="font-koni">
                                                                    Xem chi tiết
                                                                </span>
                                                            </span>
                                                        </Button>
                                                    </Link>
                                                </Card>
                                            </Col>
                                        </CarouselItem>
                                    )}
                                />
                            </Col>

                            {/* <Col span={5}>
                                <Card
                                    hoverable
                                    cover={
                                        <img
                                            alt="example"
                                            src={sk1}
                                            className=""
                                        />
                                    }
                                >
                                    <h3 className="font-bold text-2xl ">
                                        Sự kiện 1{" "}
                                    </h3>
                                    <p className="font-light">Đầm sen Park</p>
                                    <p className="flex items-center">
                                        {" "}
                                        <CalendarOutlined className="text-[#FA7D09] me-2" />{" "}
                                        30/05/2023 - 08/08/2023
                                    </p>
                                    <h2 className="font-bold text-2xl text-color my-2">
                                        25.000 VND
                                    </h2>
                                    <Link to="/events/event-detail">
                                        <Button
                                            size="middle"
                                            className="px-9 text-white btn-color"
                                        >
                                            <span className="font-koni">
                                                <span className="font-koni">
                                                    Xem chi tiết
                                                </span>
                                            </span>
                                        </Button>
                                    </Link>
                                </Card>
                            </Col>
                            <Col span={5}>
                                <Card
                                    hoverable
                                    cover={
                                        <img
                                            alt="example"
                                            src={sk2}
                                            className=""
                                        />
                                    }
                                >
                                    <h3 className="font-bold text-2xl ">
                                        Sự kiện 2{" "}
                                    </h3>
                                    <p className="font-light">Đầm sen Park</p>
                                    <p className="flex items-center">
                                        {" "}
                                        <CalendarOutlined className="text-[#FA7D09] me-2" />{" "}
                                        30/05/2023 - 08/08/2023
                                    </p>
                                    <h2 className="font-bold text-2xl text-color my-2">
                                        25.000 VND
                                    </h2>
                                    <Link to="/events/event-detail">
                                        <Button
                                            size="middle"
                                            className="px-9 text-white btn-color"
                                        >
                                            <span className="font-koni">
                                                Xem chi tiết
                                            </span>
                                        </Button>
                                    </Link>
                                </Card>
                            </Col>
                            <Col span={5}>
                                <Card
                                    hoverable
                                    cover={
                                        <img
                                            alt="example"
                                            src={sk3}
                                            className=""
                                        />
                                    }
                                >
                                    <h3 className="font-bold text-2xl ">
                                        Sự kiện 3{" "}
                                    </h3>
                                    <p className="font-light">Đầm sen Park</p>
                                    <p className="flex items-center">
                                        {" "}
                                        <CalendarOutlined className="text-[#FA7D09] me-2" />{" "}
                                        30/05/2023 - 08/08/2023
                                    </p>
                                    <h2 className="font-bold text-2xl text-color my-2">
                                        25.000 VND
                                    </h2>
                                    <Link to="/events/event-detail">
                                        <Button
                                            size="middle"
                                            className="px-9 text-white btn-color"
                                        >
                                            <span className="font-koni">
                                                Xem chi tiết
                                            </span>
                                        </Button>
                                    </Link>
                                </Card>
                            </Col>
                            <Col span={5}>
                                <Card
                                    hoverable
                                    cover={
                                        <img
                                            alt="example"
                                            src={sk4}
                                            className=""
                                        />
                                    }
                                >
                                    <h3 className="font-bold text-2xl ">
                                        Sự kiện 4{" "}
                                    </h3>
                                    <p className="font-light">Đầm sen Park</p>
                                    <p className="flex items-center">
                                        {" "}
                                        <CalendarOutlined className="text-[#FA7D09] me-2" />{" "}
                                        30/05/2023 - 08/08/2023
                                    </p>
                                    <h2 className="font-bold text-2xl text-color my-2">
                                        25.000 VND
                                    </h2>
                                    <Link to="/events/event-detail">
                                        <Button
                                            size="middle"
                                            className="px-9 text-white btn-color"
                                        >
                                            <span className="font-koni">
                                                Xem chi tiết
                                            </span>
                                        </Button>
                                    </Link>
                                </Card>
                            </Col> */}
                            {/* <Col span={1} className="relative">
                                <div className="flex items-center justify-center w-full h-full">
                                    <Image
                                        preview={false}
                                        src={bg_btn}
                                        className="w-full h-auto"
                                    />

                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <Image
                                            preview={false}
                                            src={arrow}
                                            className="w-8 h-8 rotate-180"
                                        />
                                    </div>
                                </div>
                            </Col> */}
                        </Row>
                    </>
                }
            />
        </>
    );
};
export default Events;
