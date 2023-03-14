import { useState } from "react";
import Suggestion from "./Suggestion";


export default function SearchBar() {
    const [text, setText] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (text === "") return;

      console.log(text);
      setText("");
    };
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value);
    };
  
    return (
        <div className="w-full flex flex-row items-start justify-start bg-[#061b1e] rounded-2xl px-[4.5rem] py-[5.5rem]">
            <div className="w-[70%]">
                <form onSubmit={handleSubmit}>
                    <label>
                    <strong> Effortless Interaction: </strong>
                    <p> Intuitive natural language processing </p>
                    <div className="flex flex-row rounded-xl p-2  bg-black w-full">
                        <input 
                            type="text" 
                            value={text} 
                            onChange={handleInputChange} 
                            className="border-none bg-transparent outline-none w-[80%] text-[#48676c]"
                            placeholder="Type something..."
                        
                        />
                        <div className="flex flex-row items-center justify-end w-[20%]">
                            <button type="submit" className=" flex flex-row justify-center items-center group bg-[#061b1e] hover:bg-[#308a8d] border-2 border-[#308a8d] rounded-lg w-[30px] h-[30px]"> 
                                <div className="rounded-full w-[5px] h-[5px] bg-[#308a8d] group-hover:bg-[#061b1e]"></div>
                            </button>
                        </div>
                    </div>
                    </label>
                </form>
                <div className="flex flex-row items-center justify-end gap-4 mt-2">
                    <strong> Suggestions: </strong>
                    {/* normally these would be iterated over given server data */}
                    <Suggestion text="placeholder" />
                    <Suggestion text="placeholder2" />
                </div>
            </div>
        </div>
    );
}