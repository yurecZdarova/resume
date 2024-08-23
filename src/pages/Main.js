import React from 'react';
import {Box, Heading, Text} from "@chakra-ui/react";
import {screenSwiperFoto} from "../const/SwiperStart";
import MySwiper from "../components/MySwiper";

const Main = () => {
    return (
        <div>
            <Heading textAlign={"center"}>Я рад приветсвовать вас на моем сайт-резюме</Heading>
            <Box w={"80%"} ml={"10%"}>
            <Text textAlign={"center"} >Здесь вы найдете для себя много интересного </Text>
            <Text textAlign={"center"} >здесь собраны все мои основные проекты , можно ознакомится с
                моей биографией в которой вы найдете и информацию о стаже программирования и мои увлечения
                ,для того чтобы перейти во вкладку "Биография" кликните на нее в шапке сайта либо введите в адресную строку "/biography"
                чтобы перейти в раздел "Проекты" кликните по соответсвующей ссылке в шапке сайта или добавьте в адресную строку "/projects"
            </Text>
                <MySwiper mTop={"10%"} mass={screenSwiperFoto}></MySwiper>
            </Box>

        </div>
    );
};

export default Main;