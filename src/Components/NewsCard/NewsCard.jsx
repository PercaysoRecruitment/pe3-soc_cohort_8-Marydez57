import { useState, useEffect, createRef } from 'react';
import useStyles from './styles'
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from '@mui/material';


const NewsCard = ({ article: { description, publishedAt, content, source, title, url, urlToImage }, i, activeArticle }) => {
    
    const [elRefs, setElRefs] = useState([]);
    const classes = useStyles()


const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50); //to scroll to the top of the article card.

    useEffect(() => {
      //this is called  at the start to set the refernce to the active article.
        
    // window.scroll(0, 0);

    setElRefs((refs) => Array(10).fill().map((_, j) => refs[j] || createRef()));
  }, []);

    useEffect(() => {
     //this is called when the active article changes.
     //it scrolls to the active article.   
    if (i === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [i, activeArticle, elRefs]);

    return (
        <Card ref={elRefs[i]} className={ activeArticle === i ? classes.activeCard : classes.card}>
            <CardActionArea href={url} target='_blank'>
                <CardMedia className={classes.media} image ={urlToImage || 'https://www.arcenergyinstitute.com/wp-content/uploads/ARC-Energy-Institute-In-the-News.png' } title={title} />
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h2">{ (new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant="body2" color="textSecondary" component="h2">{ source.name}</Typography>
                    <Typography variant="body2" color="textSecondary" component="h2">{ source.url}</Typography>

                </div>
                <Typography className={classes.title} gutterBottom variant="h5">{title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">{content}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions classname={classes.cardActions}>
                <Button size="small" color="primary">Learn More</Button>
                <Typography variant="h5" color="textSecondary" >{i + 1}</Typography>
            </CardActions>

        </Card>
    )
}


export default NewsCard