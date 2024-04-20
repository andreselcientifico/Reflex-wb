import reflex as rx
from web_reflex.components.icon import icon
from web_reflex.components.info_text import info_text
from web_reflex.styles.styles import Size as size

def header() -> rx.Component:
    return rx.chakra.vstack(
        rx.chakra.hstack(
            rx.chakra.avatar(name= "Andres Perez", size='xl'),
            rx.chakra.vstack(
                rx.chakra.heading(
                    'ANDRES PEREZ',
                    color='gray', 
                    size= "lg"
                ),
                rx.text(
                    '@TheScientific',
                    margin_top="0px !important",
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
        rx.text('''Soy desarrollador de software desde hace 2 años.
                Actualmente trabajo como freelance fullstack developer.
                !Bienvenid@!'''),
        spacing=size.BIG.value,
        align_items='start',
    )