import React, { useState } from "react";
import Layout from "../Layout/Layout";
import tritini from "../../assets/images/Trini.png";
import sadImoji from "../../assets/images/Pay/sad-emoji.png";
import {
    Row,
    Col,
    Input,
    Space,
    Button,
    DatePicker,
    Modal,
    notification,
} from "antd";
import calendar from "../../assets/images/home/calendar.png";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { addBooking } from "../../core/Redux/bookingSlice";
const Pay = () => {
    // get data from local storage
    const data = JSON.parse(localStorage.getItem("booking") || "{}");
    const [paymentInfo, setPaymentInfo] = useState({
        total: data.quantity * 25000 || "",
        quantity: data.quantity || "",
        date: data.dateUse || "",
        fullName: data.fullName || "",
        phone: data.phone || "",
        email: data.email || "",
        ccv: "",
        cardNumber: "",
        cardOwner: "",
        exp: "",
        codeArray: "",
    });
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    const handleCalendarClick = () => {
        isCalendarOpen ? setIsCalendarOpen(false) : setIsCalendarOpen(true);
    };
    const [errorModal, setErrorModal] = useState(false);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setPaymentInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
    };
    function generateRandomCode() {
        const characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const codeLength = 10;
        let code = "";
        for (let i = 0; i < codeLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            code += characters.charAt(randomIndex);
        }
        return code;
    }

    function generateRandomCodes(quantity: number) {
        const codes = [];
        for (let i = 0; i < quantity; i++) {
            const code = generateRandomCode();
            codes.push(code);
        }
        return codes.join(",");
    }
    const codeArray = generateRandomCodes(paymentInfo.quantity);
    React.useEffect(() => {
        // Kiểm tra nếu codeArray đã được thiết lập thì không cần gán lại
        if (!paymentInfo.codeArray) {
            setPaymentInfo((prevInfo) => ({ ...prevInfo, codeArray }));
        }
    }, [paymentInfo.codeArray, codeArray]);
    const navigate = useNavigate();
    const dispath = useDispatch();
    const handleCheck = () => {
        if (
            paymentInfo.ccv === "" ||
            paymentInfo.cardNumber === "" ||
            paymentInfo.cardOwner === "" ||
            paymentInfo.exp === ""
        ) {
            setErrorModal(true);
        } else {
            notification.success({
                message: "Thanh toán thành công",
                description: "Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi",
            });
            localStorage.setItem("booking", JSON.stringify(paymentInfo));
            dispath(addBooking(paymentInfo) as any);
            navigate("/pay_success");
        }
    };

    return (
        <>
            <Layout
                content={
                    <>
                        <Row className="mt-[100px] relative" justify={"center"}>
                            <p className="font-koni text-white text-5xl">
                                Thanh Toán
                            </p>
                        </Row>

                        <Row className="mt-5">
                            <Col span={24}>
                                <Row className="" justify={"center"}>
                                    <Col
                                        span={12}
                                        className="table relative transform translate-x-5"
                                    >
                                        <Row
                                            className="transform -translate-y-4"
                                            justify={"start"}
                                        >
                                            <p
                                                className="font-koni text-white ml-32 bg-btn text-xl"
                                                style={{
                                                    padding: "13px 20px",
                                                }}
                                            >
                                                VÉ CỔNG - VÉ GIA ĐÌNH
                                            </p>
                                        </Row>
                                        <div className="-translate-y-4 ml-32 font-semibold space-y-3">
                                            <Row className="mt-3 space-x-8">
                                                <Col span={6}>
                                                    <Space
                                                        direction="vertical"
                                                        className="w-full"
                                                    >
                                                        <p className="leading-3">
                                                            Số tiền thanh toán
                                                        </p>
                                                        <Input
                                                            size="large"
                                                            value={
                                                                paymentInfo.total +
                                                                " VND"
                                                            }
                                                            placeholder="360.000 VNĐ"
                                                        />
                                                    </Space>
                                                </Col>
                                                <Col span={4}>
                                                    <Space
                                                        direction="vertical"
                                                        className="w-full"
                                                    >
                                                        <p className="leading-3">
                                                            Số lượng vé
                                                        </p>
                                                        <Space
                                                            size="middle"
                                                            direction="horizontal"
                                                        >
                                                            <Input
                                                                size="large"
                                                                value={
                                                                    paymentInfo.quantity
                                                                }
                                                            />
                                                            <p className="font-normal leading-3">
                                                                vé
                                                            </p>
                                                        </Space>
                                                    </Space>
                                                </Col>
                                                <img
                                                    src={tritini}
                                                    alt=""
                                                    className="absolute scale-75 -translate-x-80 -translate-y-36"
                                                />
                                                <Col span={6}>
                                                    <Space
                                                        direction="vertical"
                                                        className="w-full"
                                                    >
                                                        <p className="leading-3">
                                                            Ngày sử dụng
                                                        </p>
                                                        <Input
                                                            size="large"
                                                            value={
                                                                paymentInfo.date
                                                            }
                                                            placeholder="07/07/2023"
                                                        />
                                                    </Space>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col span={10}>
                                                    <Space
                                                        direction="vertical"
                                                        className="w-full"
                                                    >
                                                        <p className="leading-3">
                                                            Thông tin liên hệ
                                                        </p>
                                                        <Input
                                                            size="large"
                                                            value={
                                                                paymentInfo.fullName
                                                            }
                                                            className="w-full"
                                                        />
                                                    </Space>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col span={7}>
                                                    <Space
                                                        direction="vertical"
                                                        className="w-full"
                                                    >
                                                        <p className="leading-3">
                                                            Số điện thoại
                                                        </p>
                                                        <Input
                                                            size="large"
                                                            value={
                                                                paymentInfo.phone
                                                            }
                                                            className="w-full"
                                                            placeholder="012367218"
                                                        />
                                                    </Space>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col span={10}>
                                                    <Space
                                                        direction="vertical"
                                                        className="w-full"
                                                    >
                                                        <p className="leading-3">
                                                            Email:
                                                        </p>
                                                        <Input
                                                            size="large"
                                                            value={
                                                                paymentInfo.email
                                                            }
                                                            className="w-full"
                                                            placeholder="thanhhk333@gmail.com"
                                                        />
                                                    </Space>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                    <Col span={1} className="middleTable"></Col>
                                    <Col
                                        span={7}
                                        className="table w-full h-full relative transform -translate-x-8"
                                    >
                                        <Row
                                            className="transform -translate-y-4"
                                            justify={"center"}
                                        >
                                            <p
                                                className="font-koni text-white bg-btn text-xl"
                                                style={{
                                                    padding: "15px 30px",
                                                }}
                                            >
                                                Thông tin thanh toán
                                            </p>
                                        </Row>
                                        <div className="-translate-y-4 mx-3 font-semibold space-y-3">
                                            <Row className="mt-3 space-x-8">
                                                <Col span={20}>
                                                    <Space
                                                        direction="vertical"
                                                        className="w-full"
                                                    >
                                                        <p className="leading-3">
                                                            Số thẻ
                                                        </p>
                                                        <Input
                                                            size="large"
                                                            name="cardNumber"
                                                            required
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />
                                                    </Space>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col span={20}>
                                                    <Space
                                                        direction="vertical"
                                                        className="w-full"
                                                    >
                                                        <p className="leading-3">
                                                            Họ tên chủ thẻ
                                                        </p>
                                                        <Input
                                                            size="large"
                                                            name="cardOwner"
                                                            onChange={
                                                                handleChange
                                                            }
                                                            className="w-full"
                                                            required
                                                        />
                                                    </Space>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col span={20}>
                                                    <Space direction="vertical">
                                                        <p className="leading-3">
                                                            Ngày hết hạn
                                                        </p>
                                                        <Space>
                                                            <DatePicker
                                                                format={
                                                                    "DD/MM/YYYY"
                                                                }
                                                                className="w-full"
                                                                size="large"
                                                                placeholder="Ngày hết hạn"
                                                                suffixIcon={
                                                                    false
                                                                }
                                                                open={
                                                                    isCalendarOpen
                                                                }
                                                                placement="bottomLeft"
                                                                onChange={(
                                                                    e
                                                                ) => {
                                                                    handleChange(
                                                                        {
                                                                            target: {
                                                                                name: "exp",
                                                                                value: e
                                                                                    ? dayjs(
                                                                                          e
                                                                                      ).format(
                                                                                          "DD/MM/YYYY"
                                                                                      )
                                                                                    : "",
                                                                            },
                                                                        }
                                                                    );
                                                                    setIsCalendarOpen(
                                                                        false
                                                                    );
                                                                }}
                                                            />
                                                            <img
                                                                src={calendar}
                                                                alt=""
                                                                className="scale-75 cursor-pointer h-[50px] w-[47px]"
                                                                onClick={
                                                                    handleCalendarClick
                                                                }
                                                            />
                                                        </Space>
                                                    </Space>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col span={5}>
                                                    <Space direction="vertical">
                                                        <p className="leading-3">
                                                            CVV/CVC:
                                                        </p>
                                                        <Input
                                                            size="large"
                                                            name="ccv"
                                                            type="password"
                                                            placeholder="****"
                                                            required
                                                            onChange={
                                                                handleChange
                                                            }
                                                        />
                                                    </Space>
                                                </Col>
                                            </Row>
                                            <Row
                                                style={{
                                                    margin: "1rem 4.5rem 1rem 4.5rem",
                                                }}
                                            >
                                                <Col
                                                    span={20}
                                                    className="flex justify-center"
                                                >
                                                    <Button
                                                        className=" h-10 px-14 btn-color text-white font-semibold"
                                                        onClick={handleCheck}
                                                    >
                                                        <p className="font-koni text-lg">
                                                            Thanh toán
                                                        </p>
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Modal
                            centered
                            open={errorModal}
                            closeIcon={false}
                            footer={null}
                            onCancel={() => setErrorModal(false)}
                            title={
                                <>
                                    <div className="bg-[#ff8b15] h-[60px] ">
                                        <img
                                            src={sadImoji}
                                            alt=""
                                            className="scale-75 -translate-y-20 mx-auto"
                                        />
                                    </div>
                                </>
                            }
                        >
                            <Row
                                className=""
                                justify={"center"}
                                align={"middle"}
                            >
                                <Col span={20}>
                                    <p className="">
                                        Hình như đã có lỗi xảy ra khi thanh
                                        toán... <br />
                                        Vui lòng kiểm tra lại thông tin liên hệ,
                                        thông tin thẻ và thử lại.
                                    </p>
                                </Col>
                            </Row>
                        </Modal>
                    </>
                }
            />
        </>
    );
};
export default Pay;
