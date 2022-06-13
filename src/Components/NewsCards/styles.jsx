import { makeStyles } from '@mui/styles';

export default makeStyles({
    container: {
        padding: '0.5%',
        width: '100%',
        margin: 0,
    },
    card: {
        display: 'flex',
        gap: 2,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        margin: '0.5%',
        width: '100%',
        height: '55vh',
        padding: '10%',
        borderRadius: 10,
        color: '#fff',
        
    },
    infoCard: {
        display: 'flex',
        gap: 1.5,
        flexDirection: 'column',
        textAlign: 'center',
    },
})

