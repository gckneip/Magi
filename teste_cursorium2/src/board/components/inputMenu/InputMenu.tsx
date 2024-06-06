import './styles/InputMenu.css';
import InputMenuButton from './InputMenuButton';
import { Dispatch, SetStateAction } from 'react';

interface props{
    setShowWitchInputType: Dispatch<SetStateAction<'None' | 'Table' | 'Equation'>>;
}

export default function InputMenu(props: props){

    return <>
        <div className='inputMenu'>
            <div>
                <InputMenuButton
                    inputType = {'Table'}
                    setShowWitchInputType ={props.setShowWitchInputType}

                />
                <div className='inputMenuSeparador'></div>
                <InputMenuButton
                    inputType = {'Equation'}
                    setShowWitchInputType ={props.setShowWitchInputType}
                />
            </div>
        </div>
    </>
}