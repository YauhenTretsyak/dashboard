import {SortButton} from './ButtonIconStyles'

const ButtonIcon = ({isReversData, handleOnclick, icon}) => (
    <SortButton
        isReversData={isReversData}
        onClick={() => handleOnclick()}
    >
        <img src={icon} alt='arrow'/>
    </SortButton>
)

export default ButtonIcon
