import { Txt, Lbl, Radio, Radios, Container } from "./styles"
import { useDispatch } from "react-redux"
import { updateSelectedContact } from "../../store/reducers/contact"

const Form = () => {
    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        dispatch(updateSelectedContact({ [name]: value }));
    };

    return (
        <>
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
        </>
    )
}

export default Form