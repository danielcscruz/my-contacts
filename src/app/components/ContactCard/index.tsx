import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { Contact } from '../../models'
import { Card, Title, Cat, Email, Phone } from './styles'

interface ContactCardProps {
    contact: Contact;
}

const ContactCard = () => {
    const selectedContact = useSelector((state: RootState) => state.contact.selectedContact)
    
    return (
        <Card>
            {
                selectedContact ?
                (
                    <>
                    <Title>{selectedContact.name}</Title>
                    <Cat>{selectedContact.category}</Cat>
                    <Email>{selectedContact.email}</Email>
                    <Phone>{selectedContact.phone}</Phone>
                    </>
                ) : 
                (
                    <>
                    <Title>My Contacts</Title>
                    <Cat>check this project repo on:</Cat>
                    <Email>github.com/danielcscruz/my-contacts</Email>
                    <Phone>:)</Phone>
                    </>
                )
            }
        
        </Card>
    )
}

export default ContactCard