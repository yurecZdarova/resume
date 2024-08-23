import React from 'react';
import ProjectItem from "./ProjectItem";
import {project} from "../const/const";
import {Card, Heading} from "@chakra-ui/react";

const ProjectList = () => {

    return (
        <Card
            overflow='hidden'
            variant='outline'
        >

            <Heading mt={10} textAlign={"center"}>Проекты</Heading>
            {project.map(item=>
            <ProjectItem
                id={item.id}
                title={item.title}
                src={item.src}
                description={item.description}
                technology={item.technology}
            />
            )}

        </Card>
    );
};

export default ProjectList;