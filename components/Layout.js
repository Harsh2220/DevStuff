import { Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Loader from './Loader'
import Head from 'next/head';

function Layout({ children }) {

    const [Loading, setLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 5000);
    }, [])

    return (
        <>
            <Head>
                <title>DevStuff</title>
                <link rel="shortcut icon" href="/favicon.png" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Flex flexDir={['column', 'column', 'row']}>
                {!Loading ? <Loader /> :
                    <>
                        <Sidebar />
                        {children}
                    </>}
            </Flex>
        </>
    )
}

export default Layout