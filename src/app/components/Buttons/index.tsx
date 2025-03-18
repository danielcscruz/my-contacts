import Link from "next/link";
import { Button, ButtonCont } from "./styles"

const Buttons = () => {

    return (
        <ButtonCont>
            <Link href="/new" passHref>
                <Button>Adicionar</Button>
            </Link>
            <Link href="/" passHref>
                <Button>Editar</Button>
            </Link>
            <Link href="/" passHref>
                <Button>Remover</Button>
            </Link>
        </ButtonCont>
    )
}

export default Buttons