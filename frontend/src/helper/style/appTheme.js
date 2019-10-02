import { createMuiTheme } from '@material-ui/core/styles'
import { primary_color, secondary_color, accent_color } from './_color'

export default createMuiTheme({
  typography: {
    // TODO: should remove in next version
    useNextVariants: true,
  },
  palette: {
    primary: {
      light: accent_color,
      main: secondary_color,
      dark: primary_color,
      contrastText: '#fff',
    },
    secondary: {
      light: '#000000',
      main: '#000000',
      dark: '#000000',
      contrastText: '#fff',
    },
  },
  overrides: {
    MuiButton: {
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none',
        },
      },
    },
    MuiExpansionPanelDetails: {
      root: {
        padding: 0,
      },
    },
    MuiExpansionPanelSummary: {
      root: {
        padding: 0,
      },
      content: {
        margin: '0 !important',
        transition: 'none !important',
      },
      '&$expanded': {
        margin: 0,
      },
    },
    MuiTypography: {
      body1: {
        fontFamily: 'iranyekan',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        direction: 'rtl',
      },
      caption: {
        fontFamily: 'iranyekan',
        fontWeight: 'bold',
        letterSpacing: 0,
        direction: 'rtl',
        color: '#ccc',
        marginBottom: '-10px',
        fontSize: '10px',
      },
      h4: {
        color: '#000000',
        fontWeight: '500',
      },
      h3: {
        fontWeight: '100',
        color: primary_color,
      },
      h5: {
        direction: 'rtl',
        fontFamily: 'iranyekan',
        color: 'white',
        fontSize: '18px',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'left',
      },
    },
    MuiPaper: {
      rounded: { borderRadius: 25 },
    },
    MuiDialog: {
      root: {
        display: 'flex',
        flexDirection: 'column',
        top: '50px',
      },
    },
    MuiToolbar: {
      root: {
        justifyContent: 'space-between',
      },
      regular: {
        minHeight: '45px',
      },
    },
    MuiFormLabel: {
      root: {
        fontFamily: 'iranyekan',
      },
    },
    MuiInput: {
      underline: {
        '&::before': {
          display: 'none',
        },

        '&::after': {
          display: 'none',
        },
      },
    },
    MuiInputBase: {
      root: {
        fontSize: '16px',
        fontFamily: 'iranyekan',
      },
    },
    MuiList: {
      root: {
        margin: '0px',
      },
    },
    MuiFab: {
      root: {
        backgroundColor: primary_color,
        color: 'white',
        height: '60px',
        width: '60px',
      },
    },
    MuiIconButton: {
      root: {
        height: '30px',
        width: '30px',
        padding: '0',
      },
    },
    MuiTab: {
      root: {
        height: '50px',
        width: '50%',
      },
      wrapper: {
        flexDirection: 'row',
      },
    },
    // MuiSvgIcon: {
    //   root: {
    //     marginBottom: 0,
    //     marginLeft: 6,
    //   }
    // },
    MuiTabIndicator: {
      root: {
        height: '5px',
      },
    },
    MuiCircularProgress: {
      colorPrimary: {
        color: 'white',
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: '#000000',
      },
      light: {
        backgroundColor: accent_color,
      },
      inset: {
        marginRight: '20px',
        marginLeft: '20px',
      },
    },
    MuiListItem: {
      default: {
        paddingTop: '0px',
        paddingBottom: '0px',
      },
      dense: {
        paddingLeft: '10px',
      },
    },
    MuiListItemSecondaryAction: {
      root: {
        paddingRight: '10px',
      },
    },
    MuiBadge: {
      badge: {
        backgroundColor: '#a3cb38',
        color: '#3d3d3d',
      },
    },
    MuiModal: {
      root: {
        zIndex: '0',
      },
    },
  },
})
