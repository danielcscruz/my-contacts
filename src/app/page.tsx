'use client'

import { Provider } from 'react-redux'
import store from './store'
import List from './components/List'
import ContactCard from './components/ContactCard'
import Buttons from './components/Buttons'
import { MainPage } from './styles'



export default function Home() {
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
