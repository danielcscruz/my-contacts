import { Txt, Lbl, Radio, Radios, Container, Title, ContactForm } from "./styles"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { updateSelectedContact, addContact  } from "../../store/reducers/contact"
import { RootState } from "../../store"


const Form = () => {
    const dispatch = useDispatch();
    const selectedContact = useSelector((state: RootState) => state.contact.selectedContact);
    const form = useSelector(( state: RootState) => state.contact.selectedContact)
    const contacts = useSelector((state: RootState) => state.contact.contacts)

    const [formData, setFormData] = useState({
        id: contacts.length + 1, // Assign a new ID
        name: "",
        phone: 0,
        email: "",
        category: "amigos", // Default category
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        dispatch(updateSelectedContact({ [name]: value }));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        console.log("Dispatching new contact:", formData);
        dispatch(addContact(formData))

        // Clear form after submission
        setFormData({
            id: contacts.length + 2,
            name: "",
            phone: 0,
            email: "",
            category: "amigos",
        })
    }

    return (
        <>
        {selectedContact ? (
      <ContactForm>
        <Title>EDIT CONTACT</Title>
        <Lbl>Nome</Lbl>
        <Txt type="text" name="name" value={selectedContact.name} onChange={handleChange} />
        
        <Lbl>Telefone</Lbl>
        <Txt type="text" name="phone" value={selectedContact.phone} onChange={handleChange} />
        
        <Lbl>Email</Lbl>
        <Txt type="text" name="email" value={selectedContact.email} onChange={handleChange} />
        
        <Container>
          <Lbl>Categoria</Lbl>
          <Radios onChange={handleChange}>
            <label><Radio type="radio" name="category" value="amigos" checked={selectedContact.category === "amigos"} /> Amigos</label>
            <label><Radio type="radio" name="category" value="trabalho" checked={selectedContact.category === "trabalho"} /> Trabalho</label>
            <label><Radio type="radio" name="category" value="comercio" checked={selectedContact.category === "comercio"} /> Comercio</label>
            <label><Radio type="radio" name="category" value="spam" checked={selectedContact.category === "spam"} /> Spam</label>
          </Radios>
        </Container>
      </ContactForm>
    ) : (
        
        <ContactForm onSubmit={handleSubmit}>
        <Title>ADD NEW CONTACT</Title>
        <Lbl>Nome</Lbl><Txt type="text" name="name" onChange={handleChange} />
        <Lbl>Telefone</Lbl><Txt type="text" name="phone" onChange={handleChange} />
        <Lbl>Email</Lbl><Txt type="text" name="email" onChange={handleChange} />
        <Container>
            <Lbl>Categoria</Lbl>
            <Radios onChange={handleChange}>
                <label><Radio type="radio" name="category" value="amigos" /> Amigos</label>
                <label><Radio type="radio" name="category" value="trabalho" /> Trabalho</label>
                <label><Radio type="radio" name="category" value="comercio" /> Comercio</label>
                <label><Radio type="radio" name="category" value="spam" /> Spam</label>
            </Radios>
        </Container>
        </ContactForm>
    )}
    </>
)}

export default Form