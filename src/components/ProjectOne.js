import React from 'react';
import { useParams} from "react-router-dom";
import {project} from "../const/const";
import {Card, CardBody, CardFooter, Heading, Text,Link, Container} from "@chakra-ui/react";
import MySwiper from "./MySwiper";

const ProjectOne = () => {
    const{id}=useParams()
    const projectFound = project.find(item => item.id === parseInt(id));

    return (
        <div>

            <Container width='1050px' margin={"5px auto"} centerContent>
            <Card
                width={"80vw"}
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                height={"30vh"}
            >
                    <CardBody >
                        <Heading  textAlign={"center"} size='md'>{projectFound.title}</Heading>

                        <Text py='2'>
                            {projectFound.description}
                        </Text>

                        <Heading size={"sm"}>Технологии</Heading>

                        {projectFound.technology.map(technology=>
                            <Text key={technology} >{technology}</Text>
                        )}
                    </CardBody>

                    <CardFooter>
                        <Link href={projectFound.srcOpenProject} isExternal>
                            Запустить проект
                        </Link>

                    </CardFooter>

            </Card>
            </Container>
            <MySwiper mTop={"3%"}  mass={projectFound.srcMassOpen}/>

        </div>
    );
};

export default ProjectOne;