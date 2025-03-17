import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { Names, NamesLI, NamesUL, Search, Container } from './styles'
import { selectContact } from '../../store/reducers/contact'
import { changeName } from '@/app/store/reducers/filter'
import Contact from '@/app/models'

const List = () => {
    const dispatch = useDispatch()
    const contacts = useSelector((state: RootState) => state.contact.contacts)
    const { name } = useSelector ((state: RootState) => state.filter)

    const handleSelectContact = (contact: Contact) => {
        dispatch(selectContact(contact))
        console.log('Contato selecionado: ', contact)
    }

    const filteredContacts = contacts.filter(contact => 
        contact.name.toLowerCase().includes(name.toLowerCase())
    )

    return (
        <Container>
            <Search 
                type="text" 
                placeholder="Buscar..."
                value={name}
                onChange={(evento => dispatch(changeName(evento.target.value)))}
                />
            <Names>
                <NamesUL>
                    {filteredContacts.map((contact) => (
                        <NamesLI 
                            key={contact.id}
                            onClick={() => handleSelectContact(contact)}
                        >
                            {contact.name}
                        </NamesLI>
                    ))}
                </NamesUL>
            </Names>
        </Container>
    )
} 

export default List