import reflex as rx
import web_reflex.styles.styles as styles
from .components.footer import footer
from .components.navbar import navbar
from .views.headers.headers import header
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
                    max_width=styles.MAX_WITDTH,
                    width="100%",
                    margin_y=styles.Spacer.BIG,
                ), 
            ),
            footer(),
        )
            
app = rx.App(
    style=styles.BASE_STYLES,
)
app.add_page(index)