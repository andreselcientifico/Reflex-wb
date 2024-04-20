import reflex as rx
from enum import Enum

# Constants
MAX_WITDTH = "560px"

# Sizes
class Spacer(Enum):
    SMALL = "0.5em"
    DEFAULT = "1em"
    BIG = "2em"

# Styles

BASE_STYLES = {
    rx.chakra.button : {
        "width": "100%",
        "height": "100%",
    }
}