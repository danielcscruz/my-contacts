'use client'

import { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import ContactCard from './components/ContactCard'
import Buttons from './components/Buttons'
import { MainPage } from './styles'
import List from './components/List';


export default function Home() {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Delay rendering until styles are loaded
    const timeout = setTimeout(() => setIsClient(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  if (!isClient) return null; // Prevent rendering until the delay is over

  return (
    <Provider store={store}>
      <MainPage>
        <ContactCard />
          <List />
        <Buttons />
      </MainPage>
    </Provider>
  )
}
