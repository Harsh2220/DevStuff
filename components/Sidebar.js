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
    FiCompass,
    FiMenu,
} from 'react-icons/fi';
import { BsVectorPen } from 'react-icons/bs';
import { VscSymbolColor } from 'react-icons/vsc';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const MotionBox = motion(Box);

const LinkItems = [
    { name: 'Home', icon: FiHome, href: "/" },
    { name: 'Illustration', icon: VscSymbolColor, href: "/illustrations" },
    { name: 'Icon', icon: FiCompass, href: "/icons" },
    { name: 'Vector / Svg', icon: BsVectorPen, href: "/vectors" },
];

export default function Sidebar({ children }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3 }}>
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
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
            <Box ml={{ base: 0, md: 60 }}>
                {children}
            </Box>
        </MotionBox>
    );
}

const SidebarContent = ({ onClose, ...rest }) => {
    return (
        <Box
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
                    DevStuff
                </Text>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            {LinkItems.map((link) => (
                <NavItem key={link.name} icon={link.icon} href={link.href}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    );
};

const NavItem = ({ icon, children, href, ...rest }) => {
    const router = useRouter();
    return (
        <Link href={href} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
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