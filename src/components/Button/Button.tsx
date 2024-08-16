import classNames from "classnames";

type Props = {
    title: string;
    className?: string;
    variant?: 'light' | 'dark';
    onClick?: (title: any) => void;
}

export function Button({ title, className, variant='dark', onClick }: Props){
    return(
        <button className={classNames([
            'bg-evergreen-light font-medium px-6 py-2 rounded-lg shadow mt-3',
            variant === 'dark' && 'bg-evergreen-light text-white',
            variant === 'light' && 'bg-white border-2 border-evergreen-light text-evergreen-light',
            className
        ])} onClick={onClick}>
            {title}
        </button>
    )
}