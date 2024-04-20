import reflex as rx
import web_reflex.styles.styles as styles

def icon(url : str) -> rx.Component:
    return rx.link(
        rx.icon(
            tag= 'link',
        ),
        href= url,
        is_external=True,
    )