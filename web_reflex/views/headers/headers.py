import reflex as rx
from web_reflex.components.icon import icon
from web_reflex.components.info_text import info_text
from web_reflex.styles.styles import Size as size
from web_reflex.styles.colors import *
from web_reflex.Constans import *

def header() -> rx.Component:
    return rx.chakra.vstack(
        rx.chakra.hstack(
            rx.chakra.avatar(name= "Andres Perez", size='xl'),
            rx.chakra.vstack(
                rx.chakra.heading(
                    'ANDRES PEREZ',
                    color= TextColor.HEADER.value, 
                    size= "lg"
                ),
                rx.text(
                    '@TheScientific',
                    margin_top=size.ZERO.value,
                    color = TextColor.BODY.value,
                ),
                rx.chakra.hstack(
                    icon("https://github.com/andreselcientifico"),
                    icon("https://github.com/andreselcientifico"),
                    icon("https://github.com/andreselcientifico"),
                ),
                align_items='start',
            ),
            spacing= size.DEFAULT.value,
        ),
        rx.flex(
            info_text(
                "+2",
                "años de experiencia",
            ),
            rx.spacer(),
            info_text(
                "+15",
                "aplicaciones creadas",
            ),
            rx.spacer(),
            info_text(
                "+2",
                "proyectos grupales",
            ),
            width="100%",
        ),
        rx.text(f'''Soy desarrollador de software desde hace {EXPERIENCIA_LINK} años.
                Actualmente trabajo como freelance fullstack developer.
                !Bienvenid@!''',
                color = TextColor.BODY.value,
                ),
        spacing=size.BIG.value,
        align_items='start',
    )