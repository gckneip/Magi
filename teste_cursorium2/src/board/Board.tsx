import InputEquation from "./components/InputEquation/InputEquation";
import InputTable from "./components/InputTable/InputTable";
import InputMenu from "./components/inputMenu/InputMenu"
import { Dispatch, SetStateAction, useState } from "react"
import './Board.css';

type inputType = 'None' | 'Table' | 'Equation';

export default function Board(){
    const [showWitchInputType, setShowWitchInputType]:
    [inputType, Dispatch<SetStateAction<inputType>>] = 
    useState<inputType>('None');

    const renderInput = () => {
        switch (showWitchInputType) {
          case 'Table':
            return <InputTable/>;
          case 'Equation':
            return <InputEquation />;
          case 'None':
          default:
            return <>{">:("}</>;
        }
      };

    return <>
    <div className="InputMenu">

        <InputMenu
        setShowWitchInputType = {setShowWitchInputType}
        />
    </div>
        <div className="Input">
            {renderInput()}
        </div>
    </>
}