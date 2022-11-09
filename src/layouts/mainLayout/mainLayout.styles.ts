import { createStyles } from '@mantine/core';

import { colors } from '../../constants/colors';

export const useStyles = createStyles((theme) => ({
    active: {
       textDecoration: 'underline',
       textDecorationColor: `${colors.secondaryColor}`,
       textDecorationThickness: '4px',
       cursor: "default"
    },

    activeRequestdemo: {
        backgroundColor: theme.colors.gray[0],
        color: `${colors.primaryColor}`,
        cursor: "default"  
    },

    activeSignIn: {
        backgroundColor: `${colors.secondaryColor}`,
        color: theme.colors.gray[0],
        cursor: "default"
    },

    bodyBackground: {
        background: theme.colorScheme === 'light' ?  theme.colors.gray[0] : theme.colors.dark[7],
        margin: "0"
    },

    burger: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "120px",
        width: "100%",
        margin: 0
    },
    darkBackground: {
        background: theme.colors.dark[7],
        color: 'white'
    },

    goldText: {
        color: `${colors.secondaryColor}`
    },

    header: {
        display:"flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "120px",
        maxWidth: "1600px"
    },

    headerBackground: {
        background: theme.colors.gray[0],
        width: "100%",
        display:"flex",
        justifyContent: "center"
    },

    links: {
        margin: "0 45px",
        display: "flex",
        [theme.fn.smallerThan("sm")]: {
            display: "none"
        }
    },

    logo: {
        [theme.fn.smallerThan("sm")]: {
            display: "none"
        }
    },

    navbar: {
        [theme.fn.largerThan("sm")]: {
          display: "none"
        },

    },
    
    navitem: {
        margin: "0 15px",
        color: theme.colorScheme === 'dark' ?  theme.colors.gray[5] : theme.colors.dark[5],

        '&:hover': {
            textDecoration: 'underline',
            textDecorationColor: `${colors.secondaryColor}`,
            textDecorationThickness: '4px'
        }
    },

    requestdemo: {
        backgroundColor: `${colors.primaryColor}`,
        border: `2px solid ${colors.primaryColor}`,
        borderRadius: "10px",
        display: "inline-block",
        padding: "3px 10px",
        textAlign: "center",
        color: theme.colors.gray[0] ,
        [theme.fn.smallerThan("sm")]: {
            width: '150px',
            margin: '7px 7px'
        },

        '&:hover': {
            backgroundColor: `transparent`,
            color: `${colors.primaryColor}`,
            textDecoration: 'none'
        }, 
    },

    signin: {
        backgroundColor: "transaparent",
        border: `2px solid ${colors.secondaryColor}`,
        borderRadius: "10px",
        display: "inline-block",
        padding: "3px 10px",
        textAlign: "center",
        color:  `${colors.secondaryColor}`,

        [theme.fn.smallerThan("sm")]: {
          width: '150px',
          margin: '7px 7px'
        },
        '&:hover': {
            backgroundColor: `${colors.secondaryColor}`,
            color:  theme.colors.gray[0],
            
        }
    
    },

    wrapper: {
        position: 'absolute',
        zIndex: 100,
        top: 0,
        left: 0,
        height:950,
        [theme.fn.largerThan(1700)]: {
            height:1050
        },
        
    }

}))