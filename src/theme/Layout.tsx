import { useState } from "react";
import NavBar from "../components/NavBar";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export default function Layout({ children }: any) {
    const [isDark, setIsDark] = useState(false);

    return (
        <div className={`w-full h-full relative flex flex-col ${isDark ? 'bg-gray-900 text-white' : 'bg-gradient-to-b from-cyan-600 via-purple-600 to-green-400 text-black'} gap-8 items-center`}>
            <NavBar>
                <div className='italic font-bold p-2 text-white rounded-full bg-black'>
                  Utilies/Library
                </div>
                <div>
                    {isDark ?
                        <LightModeIcon
                            className={'cursor-pointer text-28 rounded-full shadow-lg'}
                            onClick={() => setIsDark(!isDark)} />
                        :
                        <DarkModeIcon
                            className={'cursor-pointer text-28 rounded-full shadow-lg'}
                            onClick={() => setIsDark(!isDark)} />}
                </div>
            </NavBar>
            {children}
        </div>
    )
}