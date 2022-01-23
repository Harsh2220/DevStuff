import { Flex } from '@chakra-ui/react';
import Cards from '../components/Cards';
import data from '../data.json';

function Illustrations() {
    console.log();
    return (
        <Flex flexWrap={'wrap'} justifyContent={'space-around'}>
            {data.Illustrations && data.Illustrations.map(el => {
                return <Cards key={el.id} name={el.name} link={el.link} detail={el.detail} url={el.url} />
            })}
        </Flex>
    )
}

export default Illustrations