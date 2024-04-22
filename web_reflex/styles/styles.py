import reflex as rx
from enum import Enum
from .colors import *

# Constants
MAX_WIDTH = "560px"

# Sizes
class Size(Enum):
    SMALL = "0.5em"
    MEDIUM = "0.8em"
    DEFAULT = "1em"
    BIG = "2em"

# Styles

BASE_STYLES = {
    "background_color" : Color.BACKGROUND.value, 
    rx.chakra.button : {
        "width": "100%",
        "height": "100%",
        "display": "block",
        "padding": Size.SMALL.value,
        "borderRadius": Size.DEFAULT.value,
        "color" : TextColor.BODY.value,
        "background_color" : Color.CONTENT.value,
        "_hover" : {
            "background_color" : Color.SECONDARY.value,
        }
    },
    rx.link: {
        "text_decoration" : "none",
        "_hover" : {}
    },
}

title_style = dict(
    width = "100%",
    padding_top = Size.DEFAULT.value,
    color = TextColor.HEADER.value,
)

button_title_style = dict(
    font_size= Size.DEFAULT.value
)

button_body_style = dict(
    font_size= Size.MEDIUM.value
)