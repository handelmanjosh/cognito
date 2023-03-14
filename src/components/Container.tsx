
type ContainerProps = {
    color?: string;
    children: React.ReactNode
}
export default function Container({ color, children}: ContainerProps) {
    return (
        <div 
            className={`w-[25%] h-full p-4 rounded-xl`}
            style={{backgroundColor: color ?? "#061b1e"}}
        >
            {children}
        </div>
    )

}