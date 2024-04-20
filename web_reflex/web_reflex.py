import reflex as rx
import web_reflex.styles.styles as styles
from .components.footer import footer
from .components.navbar import navbar
from .views.headers.headers import header
from web_reflex.styles.styles  import Size as size
from .views.links.links import links


class State(rx.State):
    pass


def index() -> rx.Component:
    return rx.box(
            navbar(),
            rx.center(
                rx.chakra.vstack(   
                    header(),
                    links(),
                    links(),
                    links(),
                    max_width = styles.MAX_WITDTH,
                    width="100%",
                    margin_y = size.BIG.value,
                ), 
            ),
            footer(),
        )
            
app = rx.App(
    style=styles.BASE_STYLES,
)
app.add_page(index)