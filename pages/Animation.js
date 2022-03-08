import React from 'react';
import { Flex } from '@chakra-ui/react';
import Cards from '../components/Cards';
import data from '../data.json';

function Animation() {
    console.log();
    return (
        <Flex flexWrap={'wrap'} justifyContent={'space-around'} mt={[20, 20, 5, 5]} bg={'gray.800'} >
            {/* {data.Animation = (el => {
                return <Cards key={el.id} name={el.name} link={el.link} detail={el.detail} url={el.url} />
            })} */}
            {/* <Cards key={data.Animation.id} name={data.Animation.name} link={data.Animation.link} detail={data.Animation.detail} url={data.Animation.url} /> */}
            {data.Illustrations && data.Animation.map(el => {
                return <Cards key={el.id} name={el.name} link={el.link} detail={el.detail} url={el.url} />
            })}
        </Flex>
    )
}

export default Animation