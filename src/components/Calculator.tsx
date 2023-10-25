import BackspaceIcon from '@mui/icons-material/Backspace';
import { useState } from "react";

interface IProps {
    isDark?: boolean;
}

export default function Calculator({ isDark }: IProps) {
    const numbers = [
        1,
        2,
        3,
        '+',
        4,
        5,
        6,
        '-',
        7,
        8,
        9,
        '*',
        '.',
        0,
        '=',
        '/'
    ];

    const [math, setMath] = useState<string | number>('');
    const [result, setResult] = useState<string | number>('');


    function handleTheEquacion(value: string | number) {
        switch (value) {
            case '=':
                console.log(math.toString())
                break;
            case '+':
                const ns = math.toString().split('+');
                let res = ns.reduce((accumulator, currentValue) => parseFloat(accumulator.toString()) + parseFloat(currentValue), 0)
                setResult(res);
                break;
            case '-':
                const nsMinus = math.toString().split('-');
                let resMinus = nsMinus.reduce((accumulator, currentValue) => parseFloat(accumulator.toString()) - parseFloat(currentValue), 0)
                setResult(resMinus);
                break;
            case '*':
                const nsEex = math.toString().split('*');
                const resEx: number = nsEex.reduce((accumulator, currentValue) => parseFloat(accumulator.toString()) - parseFloat(currentValue), 0)
                setResult(resEx);
                break;
            case '/':
                console.log(math.toString().split('/'));
                break;

            default:
                break;
        }
        setMath(math.toString() + value.toString());
    }

    function onDelete() {
        setMath(math.toString().slice(0, -1))
    }

    return (
        <div className={'w-10/12 p-10 flex items-center justify-center'}>
            <div className="w-full grid grid-cols-12 shadow-lg gap-2 max-w-[450px] p-2">
                <div className={'col-span-12'}>
                    <div className={`${isDark ? 'bg-blue-900' : 'bg-orange-900'} py-8 rounded `}>
                        {result}
                    </div>
                </div>
                <div className={'col-span-9'}>
                    <input
                        className={'w-full bg-black p-2 text-white rounded'}
                        onChange={(evt) => setMath(evt.target.value)}
                        value={math}
                    />
                </div>
                <div onClick={onDelete} className={'col-span-3 cursor-pointer flex items-center justify-center h-full w-full'}>
                    <BackspaceIcon />
                </div>
                {numbers.map((item) => (
                    <input
                        onClick={() => handleTheEquacion(item)}
                        className={`col-span-3 text-center hover:shadow-2xl p-2 cursor-pointer ${isDark ? 'bg-cyan-800' : 'bg-yellow-500'} rounded shadow-lg`}
                        value={item}
                        key={item}
                        readOnly
                    />
                ))}
            </div>
        </div>
    )
}