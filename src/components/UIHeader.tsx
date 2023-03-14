

export default function UIHeader() {
    const dateProcessor = (d: string): string => {
        let basic_date = d.trim().slice(0, 16);
        let time = d.trim().slice(16, 21);
        let hour = Number(time.slice(0, 2));
        let minute = Number(time.slice(3, 5));
        return `${basic_date} ${(hour > 12) ? hour - 12 : hour}:${minute} ${hour > 12 ? "PM" : "AM"}`
    }
    return (
        <div className="flex flex-row justify-end items-end w-full">
            <div className="flex flex-col justify-center items-start ">
                <p> Hello <strong> Username </strong> </p>
                <p> {dateProcessor(Date())} </p>
            </div>
        </div>
    )
}