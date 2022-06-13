
import  useStyles from './styles'
import alanBtn from '@alan-ai/alan-sdk-web';
import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
// import NewsCards from './Components/NewsCards/NewsCards';
import { NewsCards, Modal } from './Components/assets';
import wordsToNumbers from 'words-to-numbers'; //this is used to pass the article number to words



const alanKey ='4ea0bcb6c329c71946f3089a37c699512e956eca572e1d8b807a3e2338fdd0dc/stage'

function App() {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const[isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: alanKey,
      //define a command function for the alan button
      onCommand: ({ command, articles, number }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles);
          setActiveArticle(-1); //reset the active article number when new headlines are loaded
        } else if (command === 'instructions') {
          setIsOpen(true);
        } else if (command === 'hightlight') {
          //set a call back function to highlight the active article and change the state.
          //increment the active article by 1
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
          
        } else if (command === 'open') {
          //set a call back function to open the active article in a new tab
          console.log(number)
          // window.open(articles[number].url, '_blank');
          const parsedNumber = number.length > 2 ? wordsToNumbers(number, { fuzzy: true }) : number;
          const article = articles[parsedNumber - 1];
          if (parsedNumber > 10) {
            alanBtn.playText('Please try that again...');
          } else if (article) {
            window.open(article.url, '_blank');
            alanBtn.playText('opening');
          } else {
            alanBtn.playText('Please try that again...');
          }
          
        }
      }
      
    })
  })
  return (
    <div>
      <div className={classes.logoContainer}>
        {newsArticles.length ? (
          <div className={classes.infoContainer}>
            <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Open article number [4]</Typography></div>
            <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Go back</Typography></div>
          </div>
        ) : null}
        <img src ='https://voicebot.ai/wp-content/uploads/2019/10/alan.jpg' alt='logo' className={classes.logo} />

      </div>
     {/*pass the news articles to the headlines component*/}
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
      {/* <SearchNews />
      <Headlines /> */}
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
      {!newsArticles.length ? (
        <div className={classes.footer}>
          <Typography variant="body1" component="h2">
            Created by
            <a className={classes.link} href="https://www.linkedin.com/in/mary-chukwuma-5b1b8584/"> Mary Chukwuma</a> -
            <a className={classes.link} href="https://github.com/Marydez57"> Mary Chukwuma</a>
          </Typography>
        </div>
      ) : null}
      
    </div>
  );
}

export default App;
