import React, { useEffect } from "react";
import Layout from "../Layout/Layout";
import dc from "../../assets/images/adress.png";
import email from "../../assets/images/mail-inbox-app 1.png";
import phone from "../../assets/images/Group.png";
import alex from "../../assets/images/Alex.png";
import { Row, Col, Input, Space, Button, Image, notification } from "antd";
import { useDispatch } from "react-redux";
import { addContact, getContact } from "../../core/Redux/contactSlice";

import emailjs from "@emailjs/browser";

const Contact = () => {
    const { TextArea } = Input;
    const [api, contextHolder] = notification.useNotification();
    const dispath = useDispatch();
    useEffect(() => {
        dispath(getContact() as any);
    }, [dispath]);

    const [contact, setContact] = React.useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        message: "",
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
    };

    console.log(contact);
    const sendEmail = () => {
        if (contact) {
            const templateParams = {
                from_email: contact.email,
                from_name: contact.name,
                address: contact.address,
                phone: contact.phone,
                message: contact.message,
            };

            // Gửi email sử dụng emailjs
            emailjs
                .send(
                    "service_2qciagy",
                    "template_isunoal",
                    templateParams,
                    "WlIgr0x1ZOJsSscaD"
                )
                .then((response: any) => {
                    console.log("Email sent successfully:", response);
                })
                .catch((error: any) => {
                    console.error("Error sending email:", error);
                });
            api.open({
                message: "",
                description: (
                    <div className="mx-5">
                        Gửi liên hệ thành công. <br /> Vui lòng kiên nhẫn đợi
                        phản hồi từ chúng tôi, bạn nhé!
                    </div>
                ),

                duration: 5,
                style: {
                    borderRadius: "15px",
                },
            });
            dispath(addContact(contact) as any);
        }
    };

    return (
        <>
            <Layout
                content={
                    <>
                        <div
                            className="flex justify-between 
                    "
                        >
                            <h3 className="mt-32 text-5xl mx-auto text-white font-koni">
                                Liên hệ
                            </h3>
                        </div>
                        <Row gutter={16} className="mt-10" justify={"end"}>
                            <Col span={12} className="table me-5">
                                <div className="m-8">
                                    <Row>
                                        <p className="text-sm text-[gray]">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit.
                                            Suspendisse ac mollis justo. Etiam
                                            volutpat tellus quis risus volutpat,
                                            ut posuere ex facilisis.{" "}
                                        </p>
                                        <img
                                            src={alex}
                                            alt=""
                                            className="scale-50 absolute  -translate-x-64 -translate-y-28"
                                        />
                                    </Row>
                                    <Row className="mt-5" gutter={20}>
                                        <Col span={10}>
                                            <Input
                                                placeholder="Họ và tên"
                                                name="name"
                                                value={contact.name}
                                                onChange={handleChange}
                                            />
                                        </Col>
                                        <Col span={14}>
                                            <Input
                                                placeholder="Email"
                                                name="email"
                                                value={contact.email}
                                                onChange={handleChange}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="mt-4" gutter={24}>
                                        <Col span={10}>
                                            <Input
                                                placeholder="Số điện thoại"
                                                name="phone"
                                                value={contact.phone}
                                                onChange={handleChange}
                                            />
                                        </Col>
                                        <Col span={14}>
                                            <Input
                                                placeholder="Địa chỉ"
                                                name="address"
                                                value={contact.address}
                                                onChange={handleChange}
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="mt-4">
                                        <Col span={24}>
                                            <TextArea
                                                name="message"
                                                value={contact.message}
                                                onChange={handleChange}
                                                autoSize={{
                                                    minRows: 4,
                                                    maxRows: 4,
                                                }}
                                                className="resize-none"
                                                placeholder="Lời nhắn"
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="mt-4" justify={"center"}>
                                        {contextHolder}
                                        <Button
                                            className=" text-white btn-color px-10"
                                            onClick={sendEmail}
                                        >
                                            <span className="font-koni">
                                                Gửi liên hệ
                                            </span>
                                        </Button>
                                    </Row>
                                </div>
                            </Col>
                            <Space direction="vertical">
                                <Col span={20} className="table">
                                    <Row
                                        justify={"center"}
                                        align={"middle"}
                                        className="m-8 "
                                    >
                                        <Space direction="horizontal">
                                            <Image
                                                width={50}
                                                src={dc}
                                                preview={false}
                                                className=""
                                            />
                                            <Space
                                                direction="vertical"
                                                className="ms-3"
                                            >
                                                <p className="text-sm font-bold">
                                                    Địa chỉ:
                                                </p>
                                                <p className="text-xs text-[gray]">
                                                    86/33 Âu Cơ, Phường 9, Quận
                                                    Tân Bình, TP. Hồ Chí Minh
                                                </p>
                                            </Space>
                                        </Space>
                                    </Row>
                                </Col>
                                <Col span={20} className="table w-full ">
                                    <Row
                                        justify={"center"}
                                        align={"middle"}
                                        className="m-8 justify-start"
                                    >
                                        <Space direction="horizontal">
                                            <Image
                                                width={50}
                                                src={email}
                                                preview={false}
                                                className=""
                                            />
                                            <Space
                                                direction="vertical"
                                                className="ms-3"
                                            >
                                                <p className="text-sm font-bold">
                                                    Email:
                                                </p>
                                                <p className="text-xs text-[gray]">
                                                    thanhhk333@gmail.com
                                                </p>
                                            </Space>
                                        </Space>
                                    </Row>
                                </Col>
                                <Col span={20} className="table w-full">
                                    <Row
                                        justify={"center"}
                                        align={"middle"}
                                        className="m-8 justify-start"
                                    >
                                        <Space direction="horizontal">
                                            <Image
                                                width={50}
                                                src={phone}
                                                preview={false}
                                                className=""
                                            />
                                            <Space
                                                direction="vertical"
                                                className="ms-3"
                                            >
                                                <p className="text-sm font-bold">
                                                    Điện thoại:
                                                </p>
                                                <p className="text-xs text-[gray]">
                                                    +84 145 689 798
                                                </p>
                                            </Space>
                                        </Space>
                                    </Row>
                                </Col>
                            </Space>
                        </Row>
                    </>
                }
            />
        </>
    );
};
export default Contact;
