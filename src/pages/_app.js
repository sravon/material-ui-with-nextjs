import Layout from '@/components/layout'
import { colors, createTheme, ThemeProvider } from '@mui/material';
import '@/styles/globals.css'

const theme = createTheme({
  palette:{
    primary:{
      main: colors.yellow[500]
    },
    secondary:{
      main: colors.purple[500]
    }
  },
  
})

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
