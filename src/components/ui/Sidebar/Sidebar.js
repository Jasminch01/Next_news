"use client"
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Image from "next/image";
import sitenews from "@/assets/side-top-news.png";

const Sidebar = () => {
  return (
    <Box className="mt-5">
      <Card>
        <CardActionArea>
          <CardMedia>
            <Image src={sitenews} width={900} alt="card image" />
          </CardMedia>
          <CardContent>
            <p className="py-2 px-2 rounded bg-red-500 w-28 text-white ">
              Tachnology
            </p>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Sidebar;
