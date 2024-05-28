import './styles/InputMenu.css';
import InputMenuButton from './InputMenuButton';

export default function InputMenu(){

    return <>
        <div className='inputMenu'>
            <div>
                <InputMenuButton
                    inputType = {'Table'}
                />
                <div className='inputMenuSeparador'></div>
                <InputMenuButton
                    inputType = {'Equation'}
                />
            </div>
        </div>
    </>
}