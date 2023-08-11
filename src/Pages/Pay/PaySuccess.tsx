import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { Row, Col, Button, QRCode, notification } from "antd";
import { Card } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import alvin from "../../assets/images/Alvin_Arnold_Votay1 1.png";
import { Carousel, CarouselItem } from "../Components/Carousel";
import emailjs from "@emailjs/browser";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
const PaySuccess = () => {
    const paymentInfo = JSON.parse(localStorage.getItem("booking") || "{}");
    console.log(paymentInfo.email);
    const randomCodes = paymentInfo?.codeArray;
    const initialTickets: any[] = [];
    const codeArray = randomCodes.split(",");
    codeArray.forEach((code: any, index: number) => {
        initialTickets.push({
            id: index + 1,
            code: code,
            type: "VÉ CỔNG",
            date: "01/01/2023",
        });
    });
    console.log(paymentInfo);
    const sendEmail = () => {
        if (paymentInfo) {
            const templateParams = {
                to_email: paymentInfo.email,
                to_name: paymentInfo.fullName,
                total: `Tổng tiền:  ${paymentInfo.total} VNĐ`,
                dateUse: `Ngày sử dụng: ${paymentInfo.date}`,
                message: `Cảm ơn bạn đã mua vé của chúng tôi. Đây là mã code của bạn: ${paymentInfo.codeArray}`,
            };

            // Gửi email sử dụng emailjs
            emailjs
                .send(
                    "service_2qciagy",
                    "template_0fcxcxn",
                    templateParams,
                    "WlIgr0x1ZOJsSscaD"
                )
                .then((response) => {
                    console.log("Email sent successfully:", response);
                })
                .catch((error) => {
                    console.error("Error sending email:", error);
                });
            notification.success({
                message: "Gửi email thành công",
                description: "Vui lòng kiểm tra email để nhận vé",
            });
        } else {
            console.log("Payment info not found in localStorage.");
        }
    };
    const downloadPDF = async () => {
        const carouselItems = document.querySelectorAll("#carousel-item");

        const pdf = new jsPDF("portrait", "mm", "a4");

        const itemsPerRow = 4;
        const spacing = 10;

        const imgWidth =
            (pdf.internal.pageSize.getWidth() - (itemsPerRow - 1) * spacing) /
            itemsPerRow;
        const imgHeight = imgWidth;

        let x = 5;
        let y = 10;

        for (let i = 0; i < carouselItems.length; i++) {
            const item = carouselItems[i];

            const actualHeight = item.clientHeight;

            const paddedHeight = actualHeight + 20; // You can adjust this value

            const canvas = await html2canvas(item as HTMLElement, {
                height: paddedHeight,
            });
            const imgData = canvas.toDataURL("image/png");

            pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);

            x += imgWidth + spacing;

            if ((i + 1) % itemsPerRow === 0) {
                x = 5;
                y += imgHeight + spacing;
            }
        }

        pdf.save("download.pdf");
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
                                Thanh toán thành công
                            </h3>
                        </div>
                        <Row className="mt-5" justify={"center"}>
                            <Col span={20} className="table">
                                <Row
                                    gutter={10}
                                    justify={"center"}
                                    style={{ padding: "25px 5px 20px 10px" }}
                                >
                                    <div className="justify-start">
                                        <img
                                            src={alvin}
                                            alt=""
                                            className=" absolute -translate-x-72 scale-75 -translate-y-28"
                                        />
                                    </div>
                                    <Col span={20} className="max-w-[1100px]">
                                        <Carousel
                                            pagination={true}
                                            items={initialTickets}
                                            renderItem={({
                                                item,
                                                isSnapPoint,
                                            }) => (
                                                <CarouselItem
                                                    key={item.id}
                                                    isSnapPoint={isSnapPoint}
                                                >
                                                    <Col span={23}>
                                                        <Card id="carousel-item">
                                                            <div className="flex flex-col items-center justify-center space-y-2">
                                                                <QRCode
                                                                    value={
                                                                        item.code
                                                                    }
                                                                />
                                                                <h3 className="font-bold text-2xl ">
                                                                    {item.code}
                                                                </h3>
                                                                <p
                                                                    className="text-base text-[#FFC226]"
                                                                    style={{
                                                                        fontWeight: 700,
                                                                    }}
                                                                >
                                                                    VÉ CỔNG
                                                                </p>
                                                                <p className="text-xs">
                                                                    Ngày sử
                                                                    dụng:{" "}
                                                                    {item.date}
                                                                </p>
                                                                <span className="mr-2 w-9 h-9 rounded-full flex items-center justify-center transform bg-[#44C4A1] ">
                                                                    <CheckOutlined className="text-white text-lg" />
                                                                </span>
                                                            </div>
                                                        </Card>
                                                    </Col>
                                                </CarouselItem>
                                            )}
                                        />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="mt-2 justify-center">
                            <div className="" style={{ display: "none" }}>
                                <form>
                                    <input
                                        type="hidden"
                                        name="to_email"
                                        value={paymentInfo.email}
                                    />
                                    <input
                                        type="hidden"
                                        name="to_name"
                                        value={paymentInfo.fullName}
                                    />
                                    <input
                                        type="hidden"
                                        name="message"
                                        value={`Mã vé: ${paymentInfo.codeArray}`}
                                    />
                                </form>
                            </div>
                            <Button
                                className="btn-color text-white px-10"
                                onClick={downloadPDF}
                            >
                                <span className="font-koni">Tải về</span>
                            </Button>
                            <Button
                                className="btn-color text-white px-10 ms-5"
                                onClick={sendEmail}
                            >
                                <span className="font-koni">Gửi mail</span>
                            </Button>
                        </Row>
                    </>
                }
            />
        </>
    );
};
export default PaySuccess;
