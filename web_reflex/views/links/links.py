import reflex as rx
from web_reflex.components.title import title
from web_reflex.components.link_button import link_button
from web_reflex.styles.styles import Size as size

def links() -> rx.Component:
    return rx.chakra.vstack(
            title("MI PORTAFOLIO"),
            link_button('Github', '15+ Proyectos personales', 'https://github.com/andreselcientifico'),
            link_button('linkedin', 'Mi curriculum principal', 'https://www.linkedin.com/in/andres-alfonso-569409128/'),
            width = "100%",
            spacing= size.MEDIUM.value,
        )