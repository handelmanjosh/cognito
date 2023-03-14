
type SuggestionProps = {
    text: string;
}
export default function Suggestion({text}: SuggestionProps) {
    return (
        <div className="border-2 border-gray-400 rounded-xl px-2">
            <p className="text-gray-400">
                {text}
            </p>
        </div>
    )
}