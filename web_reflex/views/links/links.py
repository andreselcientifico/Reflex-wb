import reflex as rx
from web_reflex.components.title import title
from web_reflex.components.link_button import link_button
from web_reflex.styles.styles import Size as size
from web_reflex.Constans import *

def links() -> rx.Component:
    return rx.chakra.vstack(
            title("MI PORTAFOLIO"),
            link_button('Github', '15+ Proyectos personales', GITHUB_LINK),
            link_button('linkedin', 'Mi curriculum principal', LINKEDIN_LINK),
            title("MI PORTAFOLIO"),
            link_button('Github', '15+ Proyectos personales', GITHUB_LINK),
            link_button('linkedin', 'Mi curriculum principal', LINKEDIN_LINK),
            title("MI PORTAFOLIO"),
            link_button('Github', '15+ Proyectos personales', GITHUB_LINK),
            link_button('linkedin', 'Mi curriculum principal', LINKEDIN_LINK),
            width = "100%",
            spacing= size.MEDIUM.value,
        )