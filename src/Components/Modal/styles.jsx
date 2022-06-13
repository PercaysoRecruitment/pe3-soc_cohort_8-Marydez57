import { makeStyles } from "@mui/styles";


export default makeStyles({
  paper: {
    position: 'absolute',
    boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)',
    padding: '2rem',
    
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    overflow: 'scroll',
    height: '60%',
  },
  infoContainer: {
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'center',
    padding: '25px 0',
  },
  containerWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingLeft: '25px',
    // width: '50%',
  },
  trySaying: {
    marginBottom: '25px',
  },
  wrap: {
    margin: '5px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
});