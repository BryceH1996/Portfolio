"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Controller, Navigation, Pagination } from 'swiper/modules';
import { type Swiper as SwiperTypes } from 'swiper';
import { portfolioData } from "../../../json/portfolio-data";
import { useState } from "react";
import Image from "next/image";
import PrimaryButton from "../button/primary-button";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'

export default function SliderBottom() {
  
  const [firstSwiper, setFirstSwiper] = useState<SwiperTypes | null>(null);
  const [secondSwiper, setSecondSwiper] = useState<SwiperTypes | null>(null);

  return (
    <div className="container mx-auto flex w-full flex-row xl:pt-6 xl:pb-12 pt-4 pb-8">
      <div className="lg:w-6/12 xl:pr-16 pr-12 -top-24 relative -mb-24">
        <Swiper 
          modules={[Controller]}
          onSwiper={setFirstSwiper}
          controller={{ control: secondSwiper }}>
          {portfolioData.map((data, key) => {
            return (
              <SwiperSlide key={key}>
                <Image
                  className="relative"
                  src={data.mainImage}
                  alt="Portrait photo"
                  width={0}
                  height={0}
                  style={{ width: '100%', height: 'auto' }}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <div className="lg:w-6/12 xl:pl-16 pl-12">
        <h2 className="xl:text-4xl text-3xl font-bold text-secondary">Favourite Projects</h2>
        <Swiper         
          modules={[Controller, Pagination, Navigation, Autoplay]}
          onSwiper={setSecondSwiper}
          controller={{ control: firstSwiper }}
          autoHeight={true}
          loop={true}
          autoplay={{delay: 10000}}
          navigation
          pagination={{type: 'fraction',
            renderFraction: (currentClass, totalClass) => {
              return '<span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + totalClass + '"></span>'
              }
          }}>
          {portfolioData.map((data, key) => {
            return (
              <SwiperSlide key={key}>
              <div className="text-secondary">
                <div className="flex flex-row justify-between items-center">
                  <h3 className="font-bold text-md mt-4 mb-4">Project: {data.project}</h3>
                  <Link href={data.websiteURL} target='_blank'><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></Link>
                </div>
                <p className="text-sm whitespace-pre-line">
                  {data.shortDescription}
                </p>
              </div>
              </SwiperSlide>
            )
          })}
          <PrimaryButton className="inline-block mt-6" text="View portfolio" url="/portfolio"/>
        </Swiper>
      </div>
    </div>
  )
}