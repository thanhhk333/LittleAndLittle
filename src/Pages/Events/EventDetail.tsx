import React, { useEffect } from "react";
import Layout from "../Layout/Layout";
import bannerLeft from "../../assets/images/events/Group.png";
import bannerRight from "../../assets/images/events/banner_right.png";
import sk2 from "../../assets/images/sk2.png";

import { Row, Col, Image } from "antd";
import { CalendarOutlined } from "@ant-design/icons";

import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { getEventById } from "../../core/Redux/eventSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../core/Redux/store";
import firebase from "firebase/compat/app";

const EventDetail = () => {
    const { id } = useParams<{ id: string }>();
    console.log(id);
    const dispatch = useDispatch();
    const [event, setEvent] = React.useState({
        order: "",
        price: "",
        timeStart: "",
        timeEnd: "",
        img: "",
        content1: "",
        content2: "",
        content3: "",
    });

    useEffect(() => {
        const getData = async () => {
            await firebase
                .firestore()
                .collection("events")
                .doc(id)
                .get()
                .then((doc: any) => {
                    if (doc.exists) {
                        setEvent(doc.data() as any);
                    } else {
                        console.log("No such document!");
                    }
                });
        };
        getData();
    }, [id]);

    console.log(event);
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
                                Chi tiết sự kiện {event.order}
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
                                                src={event.img}
                                                preview={false}
                                                className="rounded-md"
                                            />
                                            <p className="flex items-center mt-1">
                                                {" "}
                                                <CalendarOutlined className="text-[#FA7D09] me-2" />{" "}
                                                {event.timeStart} -{" "}
                                                {event.timeEnd}
                                            </p>
                                            <p className="font-light my-1">
                                                Đầm sen Park
                                            </p>
                                            <h2 className="font-bold text-2xl text-color">
                                                {event.price} VND
                                            </h2>
                                        </Col>
                                        <Col span={5}>
                                            <p className="text-justify whitespace-normal">
                                                <span className="text-xl text-[#FA7D09] font-bold ">
                                                    {" "}
                                                    Lorem Ipsum{" "}
                                                </span>{" "}
                                                {event.content1}
                                            </p>
                                        </Col>
                                        <Col span={5}>
                                            <Image
                                                src={sk2}
                                                preview={false}
                                                className="rounded-md"
                                            />
                                            <p className="mt-5 text-justify whitespace-normal">
                                                {event.content2}
                                            </p>
                                        </Col>
                                        <Col span={5}>
                                            <p className=" text-justify whitespace-normal">
                                                {event.content3}
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
