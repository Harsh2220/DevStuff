import { Flex } from '@chakra-ui/react';
import Cards from '../components/Cards';
import data from '../data.json';

function Illustrations() {
    return (
        <Flex flexWrap={'wrap'} justifyContent={'space-around'} mt={[20,20,5,5]}>
            {data.Illustrations && data.Illustrations.map(el => {
                return <Cards key={el.id} name={el.name} link={el.link} detail={el.detail} url={el.url} />
            })}
        </Flex>
    )
}

export default Illustrations