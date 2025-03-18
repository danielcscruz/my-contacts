import Link from "next/link";
import { Button, ButtonX, ButtonCont } from "./styles"
import { useDispatch, useSelector } from "react-redux";
import { deselectContact, addContact, updateContact } from "@/app/store/reducers/contact";
import { RootState } from '../../store/'

const Buttons = () => {
    const dispatch = useDispatch()
    const form = useSelector((state: RootState) => state.contact.selectedContact)

    const isFormValid = form && form.name.trim() !== "" && form.email.trim() !== "" && form.phone !== 0 && form.category.trim() !== ""

    const handleSave = () => {
        if (!isFormValid) return;

        if (form.id) {
            // Editing an existing contact (assuming `id` exists)
            dispatch(updateContact(form));
            console.log("Updated contact:", form);
        } else {
            // Adding a new contact
            dispatch(addContact(form));
            console.log("Added new contact:", form);
    }}


    return (
        <ButtonCont>
            <Link href="/" passHref>
                <Button disabled={!isFormValid} onClick={handleSave}>    
                    Salvar                
                    </Button>
            </Link>
            <Link href="/" passHref onClick={() => dispatch(deselectContact())}>
                <ButtonX>Cancelar</ButtonX>
            </Link>
        </ButtonCont>
    )
}

export default Buttons