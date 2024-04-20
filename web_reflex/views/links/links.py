import reflex as rx
from web_reflex.components.link_button import link_button

def links() -> rx.Component:
    return rx.chakra.vstack(
            link_button('Github', 'https://github.com/andreselcientifico'),
            link_button('linkedin', 'https://www.linkedin.com/in/andres-alfonso-569409128/'),
        )