export function Button({buttonText, onClick}) {
    return(
        <button class="but" onClick={onClick}>
            {buttonText}
        </button>
    )
}