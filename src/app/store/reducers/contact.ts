import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models'
import { contacts } from './data/contactData'

type contactState = {
    contacts: Contact[],
    selectedContact: Contact | null;
}

const initialState: contactState = {
    contacts: contacts,
    selectedContact: null,
}

const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        setContacts: (state, action: PayloadAction<Contact[]>) => {
            state.contacts = action.payload;
        },
        selectContact: (state, action: PayloadAction<Contact>) => {
            state.selectedContact = action.payload;
        },
        updateSelectedContact: (state, action: PayloadAction<Partial<Contact>>) => {
            if (state.selectedContact) {
                state.selectedContact = { ...state.selectedContact, ...action.payload };
            } else {
                state.selectedContact = { id: 0, name: "", email: "", phone: 0, category: "" , ...action.payload };
            }
        },
        deselectContact: (state) => {
            state.selectedContact = null;
        },
        addContact: (state, action: PayloadAction<Contact>) => {
            state.contacts.push(action.payload);
        },
        removeContact: (state, action: PayloadAction<number>) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload);

            // If the removed contact was the selected one, clear the selection
            if (state.selectedContact?.id === action.payload) {
                state.selectedContact = null;
            }
        },
        updateContact: (state, action: PayloadAction<Contact>) => {
            const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
            if (index !== -1) {
                state.contacts[index] = action.payload; // ✅ Update existing contact
            }
        }
    }
})

export const { setContacts, selectContact, updateSelectedContact, deselectContact, addContact, removeContact, updateContact } = contactSlice.actions

export default contactSlice.reducer

