import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import Grid from '@mui/material/Grid';
import '../../App.css'
const data =[
    {
        image:"/static/images/cards/contemplative-reptile.jpg",
        name:"green iguana",
        matter:`Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctic`,
        code:true,
        deployed:true
    },
    {
        image:"/static/images/cards/contemplative-reptile.jpg",
        name:"green iguana",
        matter:`Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctic`,
        code:true,
        deployed:true
    },
    {
        image:"/static/images/cards/contemplative-reptile.jpg",
        name:"green iguana",
        matter:`Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctic`,
        code:true,
        deployed:true
    },
    {
        image:"/static/images/cards/contemplative-reptile.jpg",
        name:"green iguana",
        matter:`Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctic`,
        code:true,
        deployed:true
    },
]
const Projects = ()=>{
    return (
        <div className="prjoects">
            <h1>My Personal Projects</h1>
            <span>
              <Grid sx={{ flexGrow: 1 }} container spacing={2} style={{justifyContent:'center'}}>
                <Grid item xs={10}>
                  <Grid container justifyContent="center" style={{rowGap:'50px',columnGap:'30px'}}>
                    {data && data.map((ele)=>{
                      return MediaCard(ele.image,ele.name,ele.matter,ele.code,ele.deployed);
                    })}
                  </Grid>
                </Grid>
              </Grid>
            </span>
        </div>
    );
}


export function MediaCard(image,title,data,code,deployed) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data}
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent:'center'}}>
        {code && <Button variant='outlined'><GitHubIcon />Git Hub</Button>}
        {deployed && <Button variant="contained">Deploment Link</Button>}
      </CardActions>
    </Card>
  );
}

export default Projects;