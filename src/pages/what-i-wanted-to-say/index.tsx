import { IconButton, Paper } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function WhatIWantedToSay() {
    return (
        <div className={'w-full h-full'}>
            <Link to={'/'}>
                <IconButton>
                    <ArrowBackIcon className="text-white" />
                </IconButton>
            </Link>
            <div className={'w-full h-full p-2'}>
                <div className="font-bold text-sm p-2 bg-white text-center">Pág. 1 de 1</div>
                <Paper className={'w-full h-full py-4'}>
                    <b className="font-bold text-xl px-4">CAPÍTULO 1</b>
                    <p className={'text-[15px] my-2 px-4'}>Se clara fosse uma música, ela definitivamente
                        seria <i>Alice Practice</i> do Crystal Castles.</p>
                    <div className={'grid grid-cols-12'}>
                        <div className="col-span-12 px-4">
                            <span className="text-3xl">L</span>iverpool, doze de março,
                            dois mil e seis - disse o locutor da rádio a qual minha mãe
                            deixou tocando enquanto faz faxina na casa, enquanto isso,
                            Não aguento mais passar minhas tardes em casa lendo revistinhas teens
                            de bandinhas pop-rock e de assistir novelas ridiculamente dramáticas.
                            Se ao menos eu estivesse escolhido ter ido pra faculdade e não
                            ter tirar um ano sabático após a formatura do ensino
                            médio provavelmente não estaria passando por esse tédio.
                        </div>
                    </div>
                    <hr className="my-2"/>
                    <div className="w-full flex items-center justify-between">
                        <IconButton size={'large'}>
                            <ArrowBackIosNewIcon className="" />
                        </IconButton>
                        <IconButton size={'large'}>
                            <ArrowForwardIosIcon className="" />
                        </IconButton>
                    </div>
                </Paper>
            </div>
        </div >
    )
}