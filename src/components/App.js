import React, {useState} from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import theme from './ui/Theme';

import Header from './ui/Header';
import Footer from './ui/Footer';
import LandingPage from './LanddingPage';
import Services from './Services';
import CustomSoftware from './CustomSoftware';

function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header 
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route
            exact path="/" 
            render={props =>
              <LandingPage 
                {...props}
                setValue={setValue} 
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route 
            exact path="/services" 
            render={props =>
              <Services 
                {...props}
                setValue={setValue} 
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route 
            exact path="/customsoftware" 
            render={props =>
              <CustomSoftware 
                {...props}
                setValue={setValue} 
                setSelectedIndex={setSelectedIndex}
              />
            }
          />
          <Route 
            exact path="/mobileapps" 
            component={() => <div>Mobile Apps</div> }>
          </Route>
          <Route 
            exact path="/websites" 
            component={() => <div>Websites</div> }>
          </Route>
          <Route 
            exact path="/revolution" 
            component={() => <div>Revolution</div> }>
          </Route>
          <Route 
            exact path="/about" 
            component={() => <div>About</div> }>
          </Route>
          <Route 
            exact path="/contact" 
            component={() => <div>Contact Us</div> }>
          </Route>
          <Route 
            exact path="/estimate" 
            component={() => <div>Estimate</div> }>
          </Route>
        </Switch>
        <Footer 
          setValue={setValue}
          setSelectedIndex={setSelectedIndex}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
