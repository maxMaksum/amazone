
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay  } from 'swiper';
import SwiperCore from "swiper"
import 'swiper/swiper-bundle.css';
import Hero from '../Hero/Hero';

function Slider() {
    SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay ]);
    return (
        <div className="bg-green-300">
            <Swiper
                   
                    spaceBetween={100}
                 
                    slidesPerView={1}
                    // navigation 
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
            >
                  

                    <SwiperSlide >
                     <Hero/>
                    </SwiperSlide>
                    <SwiperSlide>
                     <Hero/>
                    </SwiperSlide>
                    <SwiperSlide>
                     <Hero/>
                    </SwiperSlide>

                   

                
                </Swiper>
               
        </div>
    )
}

export default Slider
