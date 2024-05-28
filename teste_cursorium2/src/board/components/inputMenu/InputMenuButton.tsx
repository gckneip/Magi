interface Props {
    inputType: 'Table' | 'Equation';
}

export default function InputMenuButton(props: Props) {
    function handleMenuButtonClick() {
        console.log(props.inputType);
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