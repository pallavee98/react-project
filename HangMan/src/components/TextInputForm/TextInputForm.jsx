import { useState } from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({onSubmit}){

    const [value, setValue] = useState('');
    const [inputType, setInputType ] = useState('password');



    function handleFormSubmit(event){
        event.preventDefault();
        console.log('Form submitted', value);
        onSubmit ?.(value);
    }

    function handleTextInputChange(event){
        console.log('text input change');
        console.log(event.target.value);
        setValue(event.target.value);
    }
    return(
        <form className="flex" onSubmit={handleFormSubmit}>
            <div className="mr-2 flex-1">
                <TextInput
                label="enter a word"
                type= {inputType}
                onChange={handleTextInputChange}
                />
                
            </div>
            <div>
                <Button
                type="submit"
                text={inputType ==='password'? 'show':'hide'}
                />
            </div>
            <div className="flex ">
                    <Button
                     text="ok"
                     type="submit"
                    />
                </div>
        </form>
    )
}

export default TextInputForm;