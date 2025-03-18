'use client'

import { Provider } from 'react-redux'
import store from '../store'
import ContactCard from '../components/ContactCard'
import ButtonsR from '../components/ButtonsR'
import { MainPage } from '../styles'
import Form from '../components/Form'

export default function Home() {
  
  return (
    <Provider store={store}>
      <MainPage>
        <ContactCard />
        <Form />
        <ButtonsR />
      </MainPage>
    </Provider>
  )
}
