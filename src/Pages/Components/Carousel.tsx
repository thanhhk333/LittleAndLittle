// Carousel.tsx
import React, { CSSProperties } from "react";
import { useSnapCarousel } from "react-snap-carousel";
import prev_btn from "../../assets/images/events/previous-btn.png";
import next_btn from "../../assets/images/events/next-btn.png";
import { Col, Row } from "antd";

const styles = {
    root: {},
    scroll: {
        position: "relative",
        display: "flex",
        overflow: "hidden",
        scrollSnapType: "x mandatory",
        scrollBehavior: "smooth",
    },
    item: {
        display: "flex",
        width: "25%",
        height: "auto",
        flexShrink: 0,
        justifyContent: "space-around",
        scrollSnapAlign: "center",
    },
    itemSnapPoint: {
        scrollSnapAlign: "start",
    },
    controls: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    nextPrevButton: {},
    nextPrevButtonDisabled: { opacity: 0.3 },
    pagination: {
        display: "flex",
    },
    paginationButton: {
        margin: "10px",
    },
    paginationButtonActive: { opacity: 0.3 },
    pageIndicator: {
        display: "flex",
        justifyContent: "center",
    },
} satisfies Record<string, CSSProperties>;

interface CarouselProps<T> {
    readonly items: T[];
    readonly renderItem: (
        props: CarouselRenderItemProps<T>
    ) => React.ReactElement<CarouselItemProps>;
    pagination: boolean;
}

interface CarouselRenderItemProps<T> {
    readonly item: T;
    readonly isSnapPoint: boolean;
}

export const Carousel = <T extends any>({
    items,
    renderItem,
    pagination = false,
}: CarouselProps<T>) => {
    const { scrollRef, prev, next, snapPointIndexes } = useSnapCarousel();
    const [activePage, setActivePage] = React.useState(1);
    const totalPages = Math.ceil(items.length / 4);
    const handleNext = () => {
        next();
        setActivePage((prev) => Math.min(prev + 1, totalPages));
    };
    const handlePrev = () => {
        prev();
        setActivePage((prev) => Math.max(prev - 1, 1));
    };
    return (
        <div style={styles.root}>
            <img
                src={prev_btn}
                alt=""
                onClick={handlePrev}
                className="flex justify-center items-center absolute top-1/2 transform -translate-x-[70px] -translate-y-1/2 cursor-pointer"
            />

            <ul style={styles.scroll} ref={scrollRef}>
                {items.map((item, i) =>
                    renderItem({
                        item,
                        isSnapPoint: snapPointIndexes.has(i),
                    })
                )}
            </ul>
            {pagination === true && (
                <Row className="my-3 font-light" style={styles.pageIndicator}>
                    <Col span={22} className="flex justify-between">
                        <p className="ms-28">Số lượng vé: {items.length} vé</p>
                        <p className="font-extralight">
                            {" "}
                            Trang {activePage} / {totalPages}
                        </p>
                    </Col>
                </Row>
            )}

            <img
                src={next_btn}
                alt=""
                onClick={handleNext}
                className="flex justify-center items-center absolute top-1/2 right-[-60px] transform -translate-y-1/2 cursor-pointer"
            />

            {/* <Button
                className={
                    "px-[11px] py-[20px] border-0 flex justify-center items-center custom-button rounded-lg absolute top-1/2 right-[-43px] transform -translate-y-1/2"
                }
                type="primary"
                htmlType="button"
                onClick={() => next()}
                // disabled={currentPage === 1}
            >
                <CaretLeftOutlined style={{ transform: "rotate(180deg)" }} />
            </Button> */}

            {/* <div style={styles.controls} aria-hidden>
                <button
                    style={{
                        ...styles.nextPrevButton,
                        ...(activePageIndex <= 0
                            ? styles.nextPrevButtonDisabled
                            : {}),
                    }}
                    onClick={() => prev()}
                >
                    Prev
                </button>
                {pages.map((_, i) => (
                    <button
                        key={i}
                        style={{
                            ...styles.paginationButton,
                            ...(activePageIndex === i
                                ? styles.paginationButtonActive
                                : {}),
                        }}
                        onClick={() => goTo(i)}
                    >
                        {i + 1}
                    </button>
                ))}
                <button
                    style={{
                        ...styles.nextPrevButton,
                        ...(activePageIndex === pages.length - 1
                            ? styles.nextPrevButtonDisabled
                            : {}),
                    }}
                    onClick={() => next()}
                >
                    Next
                </button>
            </div>
            <div style={styles.pageIndicator}>
                {activePageIndex + 1} / {pages.length}
            </div> */}
        </div>
    );
};

interface CarouselItemProps {
    readonly isSnapPoint: boolean;
    readonly children?: React.ReactNode;
}

export const CarouselItem = ({ isSnapPoint, children }: CarouselItemProps) => (
    <li
        style={{
            ...styles.item,
            ...(isSnapPoint ? styles.itemSnapPoint : {}),
        }}
    >
        {children}
    </li>
);
