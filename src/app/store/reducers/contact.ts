import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contact from '../../models'

type contactState = {
    contacts: Contact[],
    selectedContact: Contact | null;
}

const initialState: contactState = {
    contacts: [
        {id: 1, name: 'Daniel Cruz', email: 'danielcscruz@gmail.com', phone: 71999575989, category: 'amigos'},
        {id: 2, name: 'Lucas Oliveira', email: 'lucas.oliveira@email.com', phone: 11987654321, category: 'trabalho'},
        {id: 3, name: 'Mariana Souza', email: 'mariana.souza@email.com', phone: 21998765432, category: 'amigos'},
        {id: 4, name: 'Fernanda Lima', email: 'fernanda.lima@email.com', phone: 31991234567, category: 'comercio'},
        {id: 5, name: 'Gabriel Santos', email: 'gabriel.santos@email.com', phone: 41993456789, category: 'spam'},
        {id: 6, name: 'Amanda Ribeiro', email: 'amanda.ribeiro@email.com', phone: 51994567890, category: 'trabalho'},
        {id: 7, name: 'Ricardo Almeida', email: 'ricardo.almeida@email.com', phone: 61995678901, category: 'amigos'},
        {id: 8, name: 'Juliana Ferreira', email: 'juliana.ferreira@email.com', phone: 71996789012, category: 'comercio'},
        {id: 9, name: 'Thiago Costa', email: 'thiago.costa@email.com', phone: 81997890123, category: 'spam'},
        {id: 10, name: 'Carla Mendes', email: 'carla.mendes@email.com', phone: 11998901234, category: 'trabalho'},
        {id: 11, name: 'Felipe Barbosa', email: 'felipe.barbosa@email.com', phone: 21999012345, category: 'amigos'},
        {id: 12, name: 'Larissa Rocha', email: 'larissa.rocha@email.com', phone: 31990123456, category: 'comercio'},
        {id: 13, name: 'Pedro Henrique', email: 'pedro.henrique@email.com', phone: 41991234567, category: 'spam'},
        {id: 14, name: 'Beatriz Nunes', email: 'beatriz.nunes@email.com', phone: 51992345678, category: 'trabalho'},
        {id: 15, name: 'André Silva', email: 'andre.silva@email.com', phone: 61993456789, category: 'amigos'},
        {id: 16, name: 'Isabela Gomes', email: 'isabela.gomes@email.com', phone: 71994567890, category: 'comercio'},
        {id: 17, name: 'Rafael Carvalho', email: 'rafael.carvalho@email.com', phone: 81995678901, category: 'spam'},
        {id: 18, name: 'Vanessa Pereira', email: 'vanessa.pereira@email.com', phone: 11996789012, category: 'trabalho'},
        {id: 19, name: 'Eduardo Martins', email: 'eduardo.martins@email.com', phone: 21997890123, category: 'amigos'},
        {id: 20, name: 'Camila Araújo', email: 'camila.araujo@email.com', phone: 31998901234, category: 'comercio'},
        {id: 21, name: 'José Antunes', email: 'jose.antunes@email.com', phone: 41999012345, category: 'spam'},
        {id: 22, name: 'Tatiane Duarte', email: 'tatiane.duarte@email.com', phone: 51990123456, category: 'trabalho'},
        {id: 23, name: 'Rodrigo Paiva', email: 'rodrigo.paiva@email.com', phone: 61991234567, category: 'amigos'},
        {id: 24, name: 'Paula Monteiro', email: 'paula.monteiro@email.com', phone: 71992345678, category: 'comercio'},
        {id: 25, name: 'Diego Freitas', email: 'diego.freitas@email.com', phone: 81993456789, category: 'spam'},
        {id: 26, name: 'Simone Vieira', email: 'simone.vieira@email.com', phone: 11994567890, category: 'trabalho'},
        {id: 27, name: 'João Pedro', email: 'joao.pedro@email.com', phone: 21995678901, category: 'amigos'},
        {id: 28, name: 'Ana Beatriz', email: 'ana.beatriz@email.com', phone: 31996789012, category: 'comercio'},
        {id: 29, name: 'Marcelo Borges', email: 'marcelo.borges@email.com', phone: 41997890123, category: 'spam'},
        {id: 30, name: 'Luana Castilho', email: 'luana.castilho@email.com', phone: 51998901234, category: 'trabalho'},
        {id: 31, name: 'Gustavo Ramos', email: 'gustavo.ramos@email.com', phone: 61999012345, category: 'amigos'},
        {id: 32, name: 'Renata Farias', email: 'renata.farias@email.com', phone: 71990123456, category: 'comercio'},
        {id: 33, name: 'Bruno Mendonça', email: 'bruno.mendonca@email.com', phone: 81991234567, category: 'spam'},
        {id: 34, name: 'Elaine Correia', email: 'elaine.correia@email.com', phone: 11992345678, category: 'trabalho'},
        {id: 35, name: 'Victor Assis', email: 'victor.assis@email.com', phone: 21993456789, category: 'amigos'},
        {id: 36, name: 'Mirella Fonseca', email: 'mirella.fonseca@email.com', phone: 31994567890, category: 'comercio'},
        {id: 37, name: 'Alex Nascimento', email: 'alex.nascimento@email.com', phone: 41995678901, category: 'spam'},
        {id: 38, name: 'Patrícia Moreira', email: 'patricia.moreira@email.com', phone: 51996789012, category: 'trabalho'},
        {id: 39, name: 'Fernando Bastos', email: 'fernando.bastos@email.com', phone: 61997890123, category: 'amigos'},
        {id: 40, name: 'Caroline Teixeira', email: 'caroline.teixeira@email.com', phone: 71998901234, category: 'comercio'},
        {id: 41, name: 'Henrique Mattos', email: 'henrique.mattos@email.com', phone: 81999012345, category: 'spam'},
        {id: 42, name: 'Daniela Ramos', email: 'daniela.ramos@email.com', phone: 11990123456, category: 'trabalho'},
        {id: 43, name: 'Leonardo Xavier', email: 'leonardo.xavier@email.com', phone: 21991234567, category: 'amigos'},
        {id: 44, name: 'Sabrina Vasconcelos', email: 'sabrina.vasconcelos@email.com', phone: 31992345678, category: 'comercio'},
        {id: 45, name: 'Hugo Medeiros', email: 'hugo.medeiros@email.com', phone: 41993456789, category: 'spam'},
        {id: 46, name: 'Tatiana Brito', email: 'tatiana.brito@email.com', phone: 51994567890, category: 'trabalho'},
        {id: 47, name: 'Carlos Eduardo', email: 'carlos.eduardo@email.com', phone: 61995678901, category: 'amigos'},
        {id: 48, name: 'Bruna Santana', email: 'bruna.santana@email.com', phone: 71996789012, category: 'comercio'},
        {id: 49, name: 'Fábio Almeida', email: 'fabio.almeida@email.com', phone: 81997890123, category: 'spam'},
        {id: 50, name: 'Regina Lopes', email: 'regina.lopes@email.com', phone: 11998901234, category: 'trabalho'}
    ],
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
        }
    }
})

export const { setContacts, selectContact, updateSelectedContact } = contactSlice.actions

export default contactSlice.reducer

