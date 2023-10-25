import { IconButton, Paper, Slide } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useState } from "react";

function PageOne() {
    return (
        <Slide direction={'right'} timeout={100}>
            <>
                <b className="font-bold text-xl px-4">CAPÍTULO 1</b>
                <p className={'text-[15px] my-2 px-4'}>Se clara fosse uma música, ela definitivamente
                    seria <i>Alice Practice</i> do Crystal Castles.</p>
                <div className=" px-4">
                    <span className="text-3xl">L</span>iverpool, doze de março,
                    dois mil e seis - disse o locutor da rádio a qual minha mãe
                    deixou tocando enquanto faz faxina na casa.
                    Não paro de pensar em como eu não aguento mais passar minhas tardes em casa lendo revistinhas teens
                    de bandinhas pop-rock e de assistir novelas ridiculamente dramáticas.
                    Se ao menos eu tivesse escolhido ter ido pra faculdade e não
                    ter tirado um ano sabático após a formatura do ensino
                    médio provavelmente não estaria passando por esse tédio.
                </div>
            </>
        </Slide>
    )
}
function PageTwo() {
    return (
        <div className="w-full px-4">
            Sinceramente, não sei o que fazer, estou quase desintegrando - quase 
            pegando todas as minhas coisas, colocar numa mala e ir viajar pro sul
            da África.
            
        </div>
    )
}

export default function WhatIWantedToSay() {
    const [page, setPage] = useState(1);
    const pages = [1, 2];

    return (
        <div className={'w-full h-full'}>
            <Link to={'/'}>
                <IconButton>
                    <ArrowBackIcon className="text-white" />
                </IconButton>
            </Link>
            <div className={'w-full h-full p-2'}>
                <div className="font-bold text-sm p-2 bg-white text-center">Pág. {page} de {pages?.length}</div>
                <Paper className={'w-full h-full py-4'}>
                    {page == 1 ?
                        <PageOne />
                        :
                        <PageTwo />
                    }

                    <hr className="my-2" />
                    <div className="w-full flex items-center justify-between">
                        <IconButton disabled={page == 1} onClick={() => setPage(page - 1)} size={'large'}>
                            <ArrowBackIosNewIcon className="" />
                        </IconButton>
                        <IconButton disabled={pages.length == page} onClick={() => setPage(page + 1)} size={'large'}>
                            <ArrowForwardIosIcon className="" />
                        </IconButton>
                    </div>
                </Paper>
            </div>
        </div >
    )
}