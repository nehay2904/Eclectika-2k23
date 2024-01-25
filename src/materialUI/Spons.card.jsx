import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const SponsCard = ({img, name, branch, domain, mobile, email}) => {
  return (
    <Card className="spons_card">
        <CardMedia
          component="img"
          image={img}
          alt="green iguana"
          className="sponsimg"
        />
    
     
    </Card>
  );
};

export default SponsCard
