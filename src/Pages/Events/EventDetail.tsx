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
import App from "./../../App";

const EventDetail = () => {
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
                                Sự kiện chi tiết
                            </h3>
                            <div className="fixed right-0 transform translate-x-16 -translate-y-9">
                                <img
                                    src={bannerRight}
                                    alt=""
                                    className="scale-75"
                                />
                            </div>
                        </div>
                        <Row gutter={10} className="mt-10" justify={"center"}>
                            <Col span={21}>
                                <div className="table">
                                    <Row
                                        className=""
                                        gutter={20}
                                        justify={"center"}
                                        style={{
                                            padding: "20px 10px",
                                        }}
                                    >
                                        <Col span={7}>
                                            <Image
                                                src={sk1}
                                                preview={false}
                                                className="rounded-md"
                                            />
                                            <p className="flex items-center mt-1">
                                                {" "}
                                                <CalendarOutlined className="text-[#FA7D09] me-2" />{" "}
                                                30/05/2023 - 08/08/2023
                                            </p>
                                            <p className="font-light my-1">
                                                Đầm sen Park
                                            </p>
                                            <h2 className="font-bold text-2xl text-color">
                                                25.000 VND
                                            </h2>
                                        </Col>
                                        <Col span={5}>
                                            <p className="text-justify whitespace-normal">
                                                <span className="text-xl text-[#FA7D09] font-bold ">
                                                    {" "}
                                                    Lorem Ipsum{" "}
                                                </span>{" "}
                                                is simply dummy text of the
                                                printing and typesetting
                                                industry. Lorem Ipsum has been
                                                the industry's standard dummy
                                                text ever since the 1500s, when
                                                an unknown printer took a galley
                                                of type and scrambled it to make
                                                a type specimen book. It has
                                                survived not only five
                                                centuries, but also the leap
                                                into electronic sdsd
                                                typesetting, remaining cssa
                                                essentially unchanged. It was
                                                popularised in the 1960s with
                                                the release of Letraset sheets
                                                containing Lorem Ipsum passages,
                                                of Lorem Ipsum.
                                            </p>
                                        </Col>
                                        <Col span={5}>
                                            <Image
                                                src={sk2}
                                                preview={false}
                                                className="rounded-md"
                                            />
                                            <p className="mt-5 text-justify whitespace-normal">
                                                Lorem Ipsum is not simply random
                                                text. It has roots in a piece of
                                                classical Latin literature from
                                                45 BC, making it over 2000 years
                                                old. words, consectetur, from a
                                                Lorem Ipsum passage, and going
                                                through the cites of the word in
                                                classical literature,{" "}
                                            </p>
                                        </Col>
                                        <Col span={5}>
                                            <p className=" text-justify whitespace-normal">
                                                Lorem Ipsum is not simply random
                                                text. It has roots in a piece of
                                                classical Latin literature from
                                                45 BC, making it over 2000 years
                                                old. words, consectetur, from a
                                                Lorem Ipsum passage, and going
                                                through the cites of the word in
                                                classical literature,{" "}
                                            </p>
                                            <Image
                                                src={sk2}
                                                preview={false}
                                                className="rounded-md mt-5"
                                            />
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </>
                }
            />
        </>
    );
};
export default EventDetail;
