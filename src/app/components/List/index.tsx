import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { Names, NamesLI, NamesUL, Search } from './styles'
import { selectContact } from '../../store/reducers/contact'
import Contact from '@/app/models'

const List = () => {
    const dispatch = useDispatch()
    const contacts = useSelector((state: RootState) => state.contact.contacts)

    const handleSelectContact = (contact: Contact) => {
        dispatch(selectContact(contact))
        console.log('Contato selecionado: ', contact)
    }

    return (
        <>
        <Search type="text" placeholder="Buscar..."/>
        <Names>
            <NamesUL>
                {contacts.map((contact) => (
                    <NamesLI 
                        key={contact.id}
                        onClick={() => handleSelectContact(contact)}
                    >
                        {contact.name}
                    </NamesLI>
                ))}
            </NamesUL>
        </Names>
        
        </>
    )
} 

export default List