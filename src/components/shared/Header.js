import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headingImg from '@/assets/The Dragon News.png'
import { CurrentDate } from "@/utils/currentDate";

const Header = () => {
    const currentDate = CurrentDate()
    return (
        <Box className="w-full my-5">
            <Container>
                <Image src={headingImg} alt="heading image" width={500} height={500} className="mx-auto"/>
            </Container>
            <Typography variant="body2" color={'gray'} textAlign={'center'} className="my-2">
                Jurnalism without fear of favour
            </Typography>
            <Typography variant="body2" textAlign={'center'}>
                {currentDate}
            </Typography>
        </Box>
    );
};

export default Header;