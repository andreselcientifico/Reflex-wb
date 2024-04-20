import reflex as rx

def header() -> rx.Component:
    return rx.chakra.vstack(
        rx.chakra.avatar(name= "Andres Perez", size='xl'),
        rx.text('@TheScientific', color_scheme='gray'),
        rx.text('Hola mi nombre es ANDRES PEREZ'),
        rx.text('''Soy desarrollador de software desde hace 2 años.
                Actualmente trabajo como freelance fullstack developer.
                !Bienvenid@!'''),
    )