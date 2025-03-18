import Link from "next/link";
import { Button, ButtonX, ButtonCont } from "./styles"

const Buttons = () => {

    return (
        <ButtonCont>
            <Link href="/" passHref>
                <Button>Salvar</Button>
            </Link>
            <Link href="/" passHref>
                <ButtonX>Cancelar</ButtonX>
            </Link>
        </ButtonCont>
    )
}

export default Buttons