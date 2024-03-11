import {useEffect, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
interface BannerSliderProps {
  images?: string[];
}

export const BannerSlider = ({images}: BannerSliderProps) => {
  return (
    <div className="w-[100svw] h-[100dvh] relative overflow-hidden overscroll-x-none">
      <Swiper
        modules={[Navigation]}
        className="w-full h-full"
        navigation={{
          nextEl: '.button-next',
          prevEl: '.button-prev',
        }}
        slidesPerView={1}
        loop={true}
        spaceBetween={100}
      >
        {images?.map((img, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`banner-${index}`}
                className={`w-full h-full object-cover object-center`}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <button className="button-prev hidden lg:flex lg:absolute bottom-8 left-8 z-10">
        {leftArrow()}
      </button>
      <button className="button-next hidden lg:flex lg:absolute bottom-8 right-8 z-10">
        {righArrow()}
      </button>

      <div className="absolute bottom-[35%] -left-8 lg:left-[15%] z-10 scale-75 lg:scale-100">
        {leftIcon()}
      </div>

      <div className="absolute top-[15%] -right-8 lg:right-[27.8%] z-10 scale-75 lg:scale-100">
        {rightIcon()}
      </div>

      <a
        href="mailto:hey@brandwithgaby.com"
        target="_blank"
        className="absolute bottom-8 right-8 z-10 lg:hidden"
        rel="noreferrer"
      >
        {messageIcon()}
      </a>
    </div>
  );
};

//Resources
const leftArrow = () => {
  return (
    <svg
      width="29"
      height="23"
      viewBox="0 0 29 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 22.5L1 11L14 1" stroke="black" />
      <line x1="1" y1="11" x2="29" y2="11" stroke="black" />
    </svg>
  );
};

const righArrow = () => {
  return (
    <svg
      width="29"
      height="23"
      viewBox="0 0 29 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15 1L28 12.5L15 22.5" stroke="black" />
      <line x1="28" y1="12.5" x2="-4.37112e-08" y2="12.5" stroke="black" />
    </svg>
  );
};

const leftIcon = () => {
  return (
    <svg
      width="78"
      height="78"
      viewBox="0 0 78 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M38.89 77.78C60.3684 77.78 77.78 60.3684 77.78 38.89C77.78 17.4116 60.3684 0 38.89 0C17.4116 0 0 17.4116 0 38.89C0 60.3684 17.4116 77.78 38.89 77.78Z"
        fill="#FBF9C6"
      />
      <path
        d="M29.4303 38.8901C29.4303 32.3301 33.3103 26.6901 38.9003 24.1101C36.8303 23.1501 34.5203 22.6201 32.0903 22.6201C23.1003 22.6201 15.8203 29.9101 15.8203 38.8901C15.8203 47.8701 23.1103 55.1601 32.0903 55.1601C34.5203 55.1601 36.8303 54.6201 38.9003 53.6701C33.3103 51.0901 29.4303 45.4501 29.4303 38.8901Z"
        stroke="black"
        strokeWidth="0.68"
        strokeMiterlimit="10"
      />
      <path
        d="M45.7006 22.6201C43.2706 22.6201 40.9606 23.1601 38.8906 24.1101C44.4806 26.6901 48.3606 32.3301 48.3606 38.8901C48.3606 45.4501 44.4806 51.0901 38.8906 53.6701C40.9606 54.6301 43.2706 55.1601 45.7006 55.1601C54.6906 55.1601 61.9706 47.8701 61.9706 38.8901C61.9706 29.9101 54.6806 22.6201 45.7006 22.6201Z"
        stroke="black"
        strokeWidth="0.68"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

const rightIcon = () => {
  return (
    <svg
      width="78"
      height="78"
      viewBox="0 0 78 78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M38.89 77.78C60.3684 77.78 77.78 60.3684 77.78 38.89C77.78 17.4116 60.3684 0 38.89 0C17.4116 0 0 17.4116 0 38.89C0 60.3684 17.4116 77.78 38.89 77.78Z"
        fill="black"
      />
      <path
        d="M58.8914 38.8399C58.8614 27.8399 49.9514 18.9199 38.9414 18.8899C39.6814 29.5699 48.2114 38.0999 58.8914 38.8399Z"
        stroke="#EBECE7"
        strokeWidth="0.68"
        strokeMiterlimit="10"
      />
      <path
        d="M38.8406 18.8899C27.8406 18.9199 18.9206 27.8299 18.8906 38.8399C29.5706 38.0999 38.1006 29.5699 38.8406 18.8899Z"
        stroke="#EBECE7"
        strokeWidth="0.68"
        strokeMiterlimit="10"
      />
      <path
        d="M18.8906 38.95C18.9206 49.95 27.8306 58.87 38.8406 58.9C38.1006 48.22 29.5706 39.69 18.8906 38.95Z"
        stroke="#EBECE7"
        strokeWidth="0.68"
        strokeMiterlimit="10"
      />
      <path
        d="M38.9512 58.8899C49.9512 58.8599 58.8712 49.9499 58.9012 38.9399C48.2212 39.6799 39.6912 48.2099 38.9512 58.8899Z"
        stroke="#EBECE7"
        strokeWidth="0.68"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

const messageIcon = () => {
  return (
    <svg
      width="71"
      height="71"
      viewBox="0 0 71 71"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="35.491" cy="35.491" r="35.491" fill="black" />
      <path
        d="M35.9662 54.0742C32.6654 54.0742 29.4242 53.197 26.5695 51.5317C25.276 51.5317 23.9973 51.6655 22.7484 51.9629C19.7748 52.4833 18.0501 52.736 17.3067 52.0372C16.2957 51.1006 17.4851 49.6881 18.7935 48.0377C19.4328 47.3687 19.9681 46.6104 20.4141 45.7926C14.7345 37.2584 17.0391 25.7207 25.5882 20.0262C34.1225 14.3317 45.6602 16.6512 51.3546 25.1855C57.0491 33.7346 54.7297 45.2723 46.1954 50.9519C43.1475 52.9888 39.5494 54.0742 35.8918 54.0742H35.981H35.9662ZM26.1681 50.0152C26.5695 49.9854 26.971 50.0747 27.3278 50.2531C35.4755 55.0406 45.9575 52.3197 50.7451 44.172C55.5326 36.0243 52.8117 25.5423 44.664 20.7548C36.5312 15.9524 26.0343 18.6881 21.2467 26.8358C17.9163 32.5154 18.1244 39.5926 21.7969 45.0492C22.4808 46.0603 21.3954 47.3687 20.0276 49.0042C19.4774 49.6286 18.9719 50.2828 18.5407 50.9965C19.8789 50.937 21.217 50.7735 22.5254 50.5058C23.7297 50.2531 24.9489 50.0895 26.1681 50.0152Z"
        fill="white"
      />
      <path
        d="M41.706 36.977C42.5274 36.977 43.1933 36.3111 43.1933 35.4897C43.1933 34.6683 42.5274 34.0024 41.706 34.0024C40.8846 34.0024 40.2188 34.6683 40.2188 35.4897C40.2188 36.3111 40.8846 36.977 41.706 36.977Z"
        fill="white"
      />
      <path
        d="M35.7568 36.977C36.5782 36.977 37.244 36.3111 37.244 35.4897C37.244 34.6683 36.5782 34.0024 35.7568 34.0024C34.9354 34.0024 34.2695 34.6683 34.2695 35.4897C34.2695 36.3111 34.9354 36.977 35.7568 36.977Z"
        fill="white"
      />
      <path
        d="M29.8095 36.977C30.6309 36.977 31.2968 36.3111 31.2968 35.4897C31.2968 34.6683 30.6309 34.0024 29.8095 34.0024C28.9881 34.0024 28.3223 34.6683 28.3223 35.4897C28.3223 36.3111 28.9881 36.977 29.8095 36.977Z"
        fill="white"
      />
    </svg>
  );
};
