import reflex as rx
from enum import Enum
from .colors import *
from .fonts import *

# Constants
MAX_WIDTH = "560px"

# Sizes
class Size(Enum):
    ZERO = "0PX  !important"
    SMALL = "0.5em"
    MEDIUM = "0.8em"
    DEFAULT = "1em"
    LARGE = "1.5em"
    BIG = "2em"

# Styles

BASE_STYLES = {
    "font_family" : Font.DEFAULT.value,
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

navbar_title_style = dict(
    font_family = Font.LOGO.value,
    font_size = Size.LARGE.value,
)

title_style = dict(
    width = "100%",
    font_family = Font.TITLE.value,
    padding_top = Size.DEFAULT.value,
    color = TextColor.HEADER.value,
)

button_title_style = dict(
    font_family = Font.TITLE.value,
    font_size= Size.DEFAULT.value,
    color = TextColor.HEADER.value,
)

button_body_style = dict(
    font_size= Size.MEDIUM.value,
    color = TextColor.BODY.value,
)