import reflex as rx
from .components.footer import footer
from .components.navbar import navbar
from .views.headers.headers import header
from .views.links.links import links


class State(rx.State):
    pass


def index() -> rx.Component:
    return rx.vstack(
        navbar(),
        header(),
        links(),
        footer(),
        align="center" 
    )
            
app = rx.App()
app.add_page(index)