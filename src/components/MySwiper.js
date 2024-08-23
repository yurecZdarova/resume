import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import "../App.css";

// import required modules
import { Navigation } from 'swiper/modules';
import {Box, Card, Image} from "@chakra-ui/react";

export default function MySwiper({mass,mTop}) {
    return (
        <>
            <Box w={"80%"}  m={"auto"} mt={mTop}>
            <Swiper  navigation={true} modules={[Navigation]} mod className="mySwiper">

                {mass.map(foto=>
                    <SwiperSlide>

                    <div key={foto} style={{width:"80%" ,height:"45vh",margin:"auto"}}>
                        <Card
                            overflow='hidden'
                            variant='outline'

                        >
                            <Image w={"100px"}   src={foto}/>
                        </Card>
                        </div>

                    </SwiperSlide>
                )}


            </Swiper>
            </Box>
        </>
    );
}
