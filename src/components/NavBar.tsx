interface IProps {
    children: any
}

export default function NavBar({ children }: IProps) {
    return (
        <div className={'w-full h-min p-4 gap-4 flex items-center flex-row justify-between'}>
            {children}
        </div>
    )
}