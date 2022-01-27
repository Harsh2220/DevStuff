import { Box, Heading, Text, Button, Center } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function NotFound() {

    const router = useRouter();

    return (
        <Center width={'100vw'} height={'100vh'}>
            <Box textAlign="center" py={10} px={6}>
                <Heading
                    display="inline-block"
                    as="h2"
                    fontSize="9xl"
                    color={'gray.100'}
                >
                    404
                </Heading>
                <Text fontSize="2xl" mt={3} mb={2} color={'gray.200'}>
                    Page Not Found
                </Text>
                <Text color={'gray.400'} mb={6} fontSize={'lg'}>
                    The page you are looking for does not seem to exist
                </Text>
                <Button
                    color="white"
                    variant="solid"
                    _focus={{
                        textdecoration: 'none'
                    }}
                    onClick={() => router.replace("/")}
                >
                    Go to Home
                </Button>
            </Box>
        </Center>
    );
}