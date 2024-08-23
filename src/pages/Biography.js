import React from 'react';
import {Box, Card, CardBody, CardFooter, Container, Heading, Image, Link, Stack, Text} from "@chakra-ui/react";
import myPhoto from "../assets/myPhoto.jpg"
const Biography = () => {
    return (



        <Box mt={10}>
            <Heading textAlign={"center"}>Биография</Heading>
            <Container w='1050px'  margin={"5px auto"} centerContent>
                <Card
                    cursor={"pointer"}
                    w={"80vw"}
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    h={"70vh"}
                >
                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '90%' }}
                        src={myPhoto}
                        alt='Caffe Latte'
                    />
                    <Stack>
                        <CardBody>
                            <Heading size='md'>Васильченко Юрий Юрьевич</Heading>


                            <Text py={"5"}>
                                Васильченко Юрий Юрьевич: 24 года, горю желанием стать вашим фронтенд-разработчиком!
                            </Text>
                            <Text py='2'>

                                Я, Юрий, программист с 2-летним опытом разработки на JavaScript и React. Мой путь в IT начался в 2019 году, когда я окончил Владивостокский государственный гуманитарно-технический колледж. С тех пор я постоянно развиваюсь и стремлюсь к новым знаниям.
                                Я не просто пишу код, я создаю решения, которые работают эффективно и приносят пользу. В своем портфолио я могу показать несколько проектов, которые разработал в свободное время. Я уверен, что мой опыт и энтузиазм помогут мне быстро адаптироваться к работе в команде и внести свой вклад в развитие вашего проекта.

                            </Text>
                            <Text py={"2"}>
                                В свободное время я отдаюсь своей страсти - хоккею. Этот вид спорта учит меня дисциплине, командной работе и умению быстро принимать решения - качества, которые незаменимы в мире программирования.
                                Я - профессионал, который не боится вызовов и готов к постоянному обучению. Мой энтузиазм и положительный настрой помогают мне решать любые задачи и добиваться отличных результатов.
                                Хотите создать уникальный и современный проект? Свяжитесь со мной - я с удовольствием расскажу о своем опыте и предложу интересные идеи!
                            </Text>
                            <Link display={"block"} href={"https://vk.com/yurec_zdarova"}>Страничка в VK</Link>
                            <Link href={"https://t.me/yurec_zdarova"}>Написать в телеграмм</Link>
                        </CardBody>

                        <CardFooter>
                        </CardFooter>
                    </Stack>
                </Card>

            </Container>

        </Box>





        // <div className={"container-page"}>
        //     <div className={"box-biography"}>
        //         <h2>заголовок</h2>
        //         <img className={"img-my-foto"} alt={"Мое фото "} width={400} height={550} src={"https://sun9-35.userapi.com/s/v1/ig2/Us2RA1i6ZVvV2QpE0VDGeKQ8KAAN-LX44DY1XkEeemXHu9j9nU1Q0ijR-bFqSBPxW5fNPxvXtq19FHb9_IF_bqXT.jpg?quality=95&as=32x53,48x80,72x120,108x180,160x267,240x400,360x601,480x801,540x901,609x1016&from=bu&u=MXqs91zDUeBR8dBLRfQjyzgQXtu0eqG1DcCE-NIGFZw&cs=320x534"}/>
        //         <p> kdnvksdnvfsfdvkkmvgmqwdqvwqdvfcwdqvcdnsdnjvkskdd
        //         sdvsavdsavsdadsnfnsdndsfsdndajnfjksdnjksndjkvnjksdnjvnj
        //             nasdjknasjkdsnjkasanjdnjksandjnjasnndjksandjnjkansjkdna
        //             kasnkjdnjkasndjknjasndjnjaskasnjkdnjknasjdnjnasjdnjnasd
        //             asndnasklndjnasndnassjandjnsjandklnasndklnas
        //             sandjknsjandjknklasndksajkdjkasndjnkandklnkla
        //             asjkncnasncjknaskncklnalsajkasndnklasndkvsdavsavdsdav</p>
        //     </div>
        // </div>
    );
};

export default Biography;