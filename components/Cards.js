import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Image,
    Button,
    Icon,
    Link
} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const MotionCenter = motion(Center);

const Variants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition:{
            duration: 2
        }
    }
}

export default function Cards({ name, link, detail, url }) {
    return (
        <AnimatePresence key='link'>
            <MotionCenter py={12} m={5} initial="hidden" variants={Variants} whileInView="visible" exit="hidden">
                <Box
                    role={'group'}
                    p={6}
                    maxW={'330px'}
                    minH={'500px'}
                    w={'full'}
                    rounded={'lg'}
                    pos={'relative'}
                    border={'1px'}
                    borderColor={'white'}
                    zIndex={1}>
                    <Box
                        rounded={'xl'}
                        mt={-12}
                        pos={'relative'}
                        height={'250px'}
                        bg={'white'}
                    >
                        <Center height={'100%'}>
                            <Image
                                objectFit={'contain'}
                                src={url}
                                alt="Banner"
                            />
                        </Center>
                    </Box>
                    <Stack pt={10}>
                        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500} color={'white'}>
                                {name}
                            </Heading>
                            <Link href={link} isExternal>
                                <Button pr={0} _focus={{ textDecoration: 'none' }} bg={'transparent'}>
                                    <Icon
                                        mr="4"
                                        fontSize="24"
                                        as={FiExternalLink}
                                    />
                                </Button>
                            </Link>
                        </Stack>
                        <Text fontWeight={400} fontSize={'lg'} color={'white'}>
                            {detail}
                        </Text>
                    </Stack>
                </Box>
            </MotionCenter>
        </AnimatePresence>
    );
}