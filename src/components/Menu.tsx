import bookOne from './../assets/menu/bookone.jpg';
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <div className={'w-full h-full grid grid-cols-3 md:grid-cols-12 gap-4 p-10'}>
            {/* <Link className={'col-span-3'} to={'calculator'}>
                <Paper className={'w-full shadow rounded-lg flex flex-col p-4 hover:shadow-xl'}>
                    <div>image</div>
                    <div className="h-1/6 py-4 text-lg font-bold ">Calculator</div>
                    <div className="py-4 text-gray-800 text-md">Shows a regular and normal calculator :/</div>
                </Paper>
            </Link> */}
            <Link className={'col-span-3'} to={'what-i-wanted-to-say'}>
                <Paper className={'w-full shadow rounded-lg flex flex-col p-4 hover:shadow-xl'}>
                    <div><img className='rounded' src={bookOne} /></div>
                    <div className="h-1/6 py-4 text-lg font-bold ">O que sempre quis dizer, mas...</div>
                    <div className="pb-4 text-gray-800 text-md">
                        <i>
                            "Conviver com Clara e sentir o pico do efeito de cocaína é a
                            mesma coisa dependendo da proximidade com a qual você tinha
                            com ela".
                        </i>
                        A história prestes a ser contada descreve a vida de uma
                        jovem/adulta com problemas de obcessão, depressão e uma
                        sensibilidade em níveis severos.
                    </div>
                </Paper>
            </Link>
        </div>
    )
}