import React, { useEffect } from "react";
import Layout from "../Layout/Layout";
import bannerLeft from "../../assets/images/events/Group.png";
import bannerRight from "../../assets/images/events/banner_right.png";
import sk1 from "../../assets/images/sk1.png";

import { Row, Col, Button, Image, Input, DatePicker } from "antd";
import { Card } from "antd";
import { CalendarOutlined } from "@ant-design/icons";

import { Link } from "react-router-dom";
import { Carousel, CarouselItem } from "../Components/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../core/Redux/store";
import { addEvent, getEvents } from "../../core/Redux/eventSlice";
import dayjs from "dayjs";

const Events = () => {
    const events = useSelector((state: RootState) => state.events.data);
    const dispath = useDispatch();
    useEffect(() => {
        dispath(getEvents() as any);
    }, []);

    console.log(events);

    const items: any[] = [];
    events?.map((item) => {
        items.push({
            id: item.id,
            order: item.order,
            src: item.img,
            timeStart: item.timeStart,
            timeEnd: item.timeEnd,
            price: item.price,
            img: item.img,
        });
    });
    console.log(items);

    // const [event, setEvent] = React.useState({
    //     order: "",
    //     price: "",
    //     timeStart: "13/08/2022",
    //     timeEnd: "",
    //     img: "",
    //     content1:
    //         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic sdsd typesetting, remaining cssa essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, of Lorem Ipsum.",
    //     content2:
    //         "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, ",
    //     content3:
    //         "Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, ",
    // });
    // const createE = () => {
    //     dispath(addEvent(event) as any);
    // };

    // const handleChange = (e: any) => {
    //     const { name, value } = e.target;
    //     setEvent({
    //         ...event,
    //         [name]: value,
    //     });
    // };
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
                            <Col span={20} className="max-w-[1300px]">
                                {/* <Input name="order" onChange={handleChange} />
                                <Input name="price" onChange={handleChange} />

                                <DatePicker
                                    name="timeEnd"
                                    format={"DD/MM/YYYY"}
                                    onChange={(e) => {
                                        handleChange({
                                            target: {
                                                name: "timeEnd",
                                                value: e
                                                    ? dayjs(e).format(
                                                          "DD/MM/YYYY"
                                                      )
                                                    : "",
                                            },
                                        });
                                    }}
                                />
                                <Button onClick={createE}>ADD</Button> */}
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
                                                        <Image
                                                            alt="example"
                                                            src={item.img}
                                                            preview={false}
                                                        />
                                                    }
                                                >
                                                    <h3 className="font-bold text-2xl ">
                                                        Sự kiện {item.order}
                                                    </h3>
                                                    <p className="font-light">
                                                        Đầm sen Park
                                                    </p>
                                                    <p className="flex items-center">
                                                        {" "}
                                                        <CalendarOutlined className="text-[#FA7D09] me-2" />{" "}
                                                        {item.timeStart} -{" "}
                                                        {item.timeEnd}
                                                    </p>
                                                    <h2 className="font-bold text-2xl text-color my-2">
                                                        {item.price}
                                                    </h2>
                                                    <Link
                                                        to={`/events/event-detail/${item.id}`}
                                                    >
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
                        </Row>
                    </>
                }
            />
        </>
    );
};
export default Events;
