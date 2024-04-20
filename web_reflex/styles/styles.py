import reflex as rx
from enum import Enum

# Constants
MAX_WITDTH = "560px"

# Sizes
class Size(Enum):
    SMALL = "0.5em"
    MEDIUM = "0.8em"
    DEFAULT = "1em"
    BIG = "2em"

# Styles

BASE_STYLES = {
    rx.chakra.button : {
        "width": "100%",
        "height": "100%",
        "display": "block",
        "padding": Size.SMALL.value,
        "borderRadius": Size.DEFAULT.value,
    },
    rx.link: {
        "text_decoration" : "none",
        "_hover" : {}
    },
}

title_style = dict(
    width = "100%",
    padding_top = Size.DEFAULT.value,
)

button_title_style = dict(
    font_size= Size.DEFAULT.value
)

button_body_style = dict(
    font_size= Size.MEDIUM.value
)