import {InputWrapper, InputStyled, Label, Error} from './InputStyles'

const Input = ({isError, title, type, value, handleOnChange, errorMessage, typeData, isRequired}) => {

    return (
        <InputWrapper>
            <Label>
                {title}
            </Label>
            <InputStyled
                required={isRequired}
                type={type} 
                value={value} 
                onChange={(e) => handleOnChange(e.target.value, typeData)}
            />
            <Error isError={isError}>
                {errorMessage}
            </Error>
        </InputWrapper>
    )
}

export default Input
