import React from "react";
import { cardDetails } from "./carousel-config";
import CarouselItem from "./CarouselItem";

export default function AutoplayCarousel() {
    return (
        <div className=" w-full overflow-hidden">
            <div className="items-center flex gap-4 w-fit animate-carouselSlide ">
                {Object.keys(cardDetails).map((detailKey) => {
                    return (
                        <CarouselItem
                            imgUrl={cardDetails[detailKey].imgUrl}
                            imgTitle={cardDetails[detailKey].title}
                        ></CarouselItem>
                    );
                })}
                {Object.keys(cardDetails).map((detailKey) => {
                    return (
                        <CarouselItem
                            imgUrl={cardDetails[detailKey].imgUrl}
                            imgTitle={cardDetails[detailKey].title}
                        ></CarouselItem>
                    );
                })}
            </div>
        </div>
    );
}