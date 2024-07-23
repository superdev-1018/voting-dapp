import { createContext } from "react";

const FontContext = createContext("font-[Rubik,sans-self]");

const FontProvider = (props:any) => {
    return (
        <FontContext.Provider value="font-[Rubik,sans-self]">
            {props.children}
        </FontContext.Provider>
    )
}
export {FontContext,FontProvider}