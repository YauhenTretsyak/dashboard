import Button from '@mui/material/Button'

const ButtonElement = ({buttonVariant='contained', color='green', title, handleOnClick, styles, type, isDisabled}) => {
    return (
        <Button
            disabled={isDisabled}
            type={type ?? null}
            variant={buttonVariant}
            onClick={handleOnClick}
            sx={{ 
                backgroundColor: color,
                textTransform: 'none',
                '&:hover': {
                    backgroundColor: color,
                  },
                ...styles,
            }}
        >
            {title}
        </Button>
    )
}

export default ButtonElement
