import { Dispatch, SetStateAction } from "react";

interface Props {
    inputType: 'Table' | 'Equation';
    setShowWitchInputType: Dispatch<SetStateAction<'None' | 'Table' | 'Equation'>>;
}

export default function InputMenuButton(props: Props) {
    function handleMenuButtonClick() {
        props.setShowWitchInputType(props.inputType);
    }

    return (
        <button
            type="button"
            className="inputMenuButton"
            disabled={false}
            onClick={() => handleMenuButtonClick()}
        >
            {props.inputType}
        </button>
    );
}