import React, {useState, useEffect} from 'react';

import { Container } from './styles'
import LeftColumn from '../LeftColumn';
import MiddleColumn from '../MiddleColumn';
import RightColumn from '../RightColumn';
import MobileHeader from '../MobileHeader';
import Header from '../DesktopHeader';
import AdBanner from '../AdBanner';

const Layout = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Container>
        <MobileHeader />
        <Header />

        <span>
          <AdBanner />
        </span>

        <main>
          <LeftColumn isLoading={isLoading}/>
          <MiddleColumn isLoading={isLoading}/>
          <RightColumn isLoading={isLoading}/>
        </main>
    </Container>
  );
}

export default Layout;
