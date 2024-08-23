import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    useDisclosure,
    useColorModeValue,
    Stack,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const linkInfo=[
    {
    title:"Биография",
    src:"/biography"
},
    {
    title:"Проекты",
    src:"/projects"
},
]
function Navbar() {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const navBg = useColorModeValue("gray.100", "gray.900");
    const navColor = useColorModeValue("gray.700", "gray.200");


    return (
        <Box bg={navBg} px={4} py={4} shadow="md" position="relative" top={0} width="100%">
            <Flex align="center" justify="space-between">
                <Link href={"/"} className={"linkLogo"} fontSize={"26px"} color={navColor}>
                    Yurec_Zdarova
                </Link>

                {/* Кнопка меню для мобильных устройств */}
                <IconButton
                    size="md"
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    aria-label="Open Menu"
                    onClick={isOpen ? onClose : onOpen}
                />

                {/* Меню для больших экранов */}
                <HStack display={{ base: "none", md: "flex" }} spacing={8} alignItems="center">

                    {linkInfo.map(({src,title})=>
                        <Link key={src} onClick={onClose} href={src}>{title}</Link>
                    )}

                </HStack>

                {/* Drawer для мобильного меню */}
                <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Меню</DrawerHeader>
                        <DrawerBody>
                            <Stack spacing={4} mt={4}>
                                <Link href="/" onClick={onClose}>
                                    Домой
                                </Link>
                                {linkInfo.map(({src,title})=>
                                    <Link key={src} onClick={onClose} href={src}>{title}</Link>
                                )}

                            </Stack>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Flex>
        </Box>
    );
}

export default Navbar;