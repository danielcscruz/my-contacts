import Link from "next/link";
import { Button, ButtonCont } from "./styles"
import { deselectContact, removeContact } from '../../store/reducers/contact'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";

const Buttons = () => {
    const dispatch = useDispatch()
    const selectedContact = useSelector((state: RootState) => state.contact.selectedContact);

    const isDisabled = selectedContact === null;

    return (
        <ButtonCont>
            <Link href="/new" passHref onClick={() => dispatch(deselectContact())}>
                <Button>Adicionar</Button>
            </Link>
            <Link href="/edit" passHref>
                <Button disabled={isDisabled}>Editar</Button>
            </Link>
            <Link href="/" passHref>
                <Button disabled={isDisabled} onClick={() => {
                    if (selectedContact) {
                        dispatch(removeContact(selectedContact.id));
                    }
                }}>Remover</Button>
            </Link>
        </ButtonCont>
    )
}

export default Buttons