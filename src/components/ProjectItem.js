import React from 'react';
import {useNavigate, } from "react-router-dom";
import {Card, CardBody, CardFooter, Container, Heading, Image, Stack, Text} from "@chakra-ui/react";

const ProjectItem = ({id,title,description,src,technology}) => {
    const navigate=useNavigate()
    const handleClickLink = () => {
        navigate(`/projects/${id}`); // Переход по клику на карточку
    };
    return (
        <div>
            <Container width='1050px' margin={"5px auto"} centerContent>
                <Card
                    onClick={handleClickLink}
                    cursor={"pointer"}
                    width={"80vw"}
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    height={"30vh"}
                    className={"cardProjectItem"}
                >
                    <Image
                        objectFit="inherit"
                        boxSize={400}
                        src={src}
                        alt={title}
                    />
                    <Stack>
                        <CardBody>
                            <Heading size='md' textAlign={"center"}>{title}</Heading>
                            <Text py='2'>
                                {description}
                            </Text>
                            <Heading size={"sm"} >Технологии</Heading>
                            {technology.map(item=>
                            <Text key={item} >{item}</Text>)}
                        </CardBody>

                        <CardFooter>
                        </CardFooter>
                    </Stack>
                </Card>

            </Container>

        </div>
    );
};

export default ProjectItem;