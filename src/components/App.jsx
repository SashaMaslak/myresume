import { Body } from 'App';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

export const App = () => {
  return (
    <Body>
      <Header />
      <Main />
      <Footer />
    </Body>
  );
};

// style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
