'use client'

import { Provider } from 'react-redux'
import { usePathname } from "next/navigation";
import store from './store'
import ContactCard from './components/ContactCard'
import Buttons from './components/Buttons'
import { MainPage } from './styles'
import Index from './pages/'
import Register from './pages/'


export default function Home() {
  const pathname = usePathname();
  
  return (
    <Provider store={store}>
      <MainPage>
        <ContactCard />
        {pathname === "/" && <Index/>}
        {pathname === "/new" && <Register/>}
        <Buttons />
      </MainPage>
    </Provider>
  )
}
