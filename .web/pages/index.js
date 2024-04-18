/** @jsxImportSource @emotion/react */


import { Fragment, useEffect } from "react"
import { Button as RadixThemesButton, Flex as RadixThemesFlex, Text as RadixThemesText, ThemePanel as RadixThemesThemePanel } from "@radix-ui/themes"
import NextHead from "next/head"



export default function Component() {
  
            useEffect(() => {
                if (typeof window !== 'undefined') {
                    window.onbeforeunload = () => {
                        localStorage.removeItem('chakra-ui-color-mode');
                    }
                    window.onbeforeunload();
                }
            }, [])

  return (
    <Fragment>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <RadixThemesThemePanel defaultOpen={true}/>
  <RadixThemesText as={`p`} css={{"color": "blue", "fontSize": "3.5rem"}}>
  {`Hola Reflex!, Como estas?`}
</RadixThemesText>
  <RadixThemesButton css={{"color": "blue"}}>
  {`submit`}
</RadixThemesButton>
</RadixThemesFlex>
  <NextHead>
  <title>
  {`Web Reflex | Index`}
</title>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
