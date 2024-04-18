import reflex as rx

class State(rx.State):
    pass

def index() -> rx.Component:
    return rx.vstack( 
            rx.theme_panel(
                default_open=True
            ),
            rx.text('Hola Reflex!, Como estas?', color = "blue", font_size = "3.5rem"),
            rx.button('submit', color = 'blue'),
            
        )

app = rx.App()
app.add_page(index)