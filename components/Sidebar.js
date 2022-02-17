import {
    IconButton,
    Box,
    CloseButton,
    Flex,
    Icon,
    useColorModeValue,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link'
import {
    FiHome,
    FiMenu,
} from 'react-icons/fi';
import { BsVectorPen } from 'react-icons/bs';
import { VscSymbolColor } from 'react-icons/vsc';
import { FaIcons } from 'react-icons/fa'
import { useRouter } from 'next/router';

const LinkItems = [
    { name: 'Home', icon: FiHome, href: "/" },
    { name: 'Illustration', icon: VscSymbolColor, href: "/illustrations" },
    { name: 'Icon', icon: FaIcons, href: "/icons" },
    { name: 'Vector / Svg', icon: BsVectorPen, href: "/vectors" },
];

export default function Sidebar({ children }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    console.log(isOpen);
    return (
        <Box>
            <SidebarContent
                onClose={() => onClose}
                display={{ base: 'none', md: 'block' }}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full">
                <DrawerContent bg={'transparent'}>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            <MobileNav display={{ md: 'none', base: (!isOpen ? 'flex' : 'none') }} onOpen={onOpen} position={'fixed'} zIndex={2} w={"100%"} bg={'transparent'} style={{ backdropFilter: "blur(5px)" }} />
            <Box ml={{ base: 0, md: 60 }}>
                {children}
            </Box>
        </Box>
    );
}

const SidebarContent = ({ onClose, ...rest }) => {
    return (
        <Flex
            bg={'gray.900'}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}    
            pos="fixed"
            h="full"
            flexDir={'column'}
            justifyContent={'space-between'}
            {...rest}
        >
            <Box>
                <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                    <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" color={'white'}>
                        DevStuff
                    </Text>
                    <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
                </Flex>
                {LinkItems.map((link) => (
                    <NavItem key={link.name} icon={link.icon} href={link.href} onClick={onClose}>
                        {link.name}
                    </NavItem>
                ))}
            </Box>
            {/* <Text textAlign={'center'} fontFamily={'monospace'} fontSize={'md'}>Made with ❤️ by&nbsp;
                <Text as="u" textUnderlineOffset={'2px'} fontWeight={'bold'}
                    _hover={{
                        textDecoration: "underline wavy"
                    }}>
                    <a href="https://github.com/Harsh2220" target="_blank" rel="noreferrer">Harsh</a>
                </Text>
            </Text> */}
        </Flex>
    );
};

const NavItem = ({ icon, children, href, ...rest }) => {
    const router = useRouter();
    return (
        <Link href={href} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }} passHref>
            <Flex
                align="center"
                p="4"
                mx="4"
                my="2"
                borderRadius="lg"
                fontSize="md"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: 'white',
                    color: 'black',
                }}
                bg={router.pathname == href ? 'white' : 'transparent'}
                color={router.pathname == href ? 'black' : 'white'}
                {...rest}>
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="18"
                        _hover={{
                            color: 'black',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    );
};

const MobileNav = ({ onOpen, ...rest }) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 24 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent="flex-start"
            {...rest}>
            <IconButton
                variant="outline"
                onClick={onOpen}
                aria-label="open menu"
                icon={<FiMenu />}
            />
            <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
                DevStuff
            </Text>
        </Flex>
    );
};