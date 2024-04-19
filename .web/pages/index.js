/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Button as RadixThemesButton, Flex as RadixThemesFlex, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import { Avatar } from "@chakra-ui/react"
import { isTrue } from "/utils/state"
import NextLink from "next/link"
import NextHead from "next/head"



export function Link_5919eef53b9c64c51379d61eda404eb0 () {



  return (
    <RadixThemesLink asChild={true} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://github.com/andreselcientifico`} passHref={true}>
  <RadixThemesButton>
  {`Github`}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_0cb7bdbd4b9a5fb989cc933f2e47e83e () {



  return (
    <RadixThemesLink asChild={true} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.linkedin.com/in/andres-alfonso-569409128/`} passHref={true}>
  <RadixThemesButton>
  {`linkedin`}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export default function Component() {

  return (
    <Fragment>
  <RadixThemesFlex align={`center`} direction={`column`} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"positions": "sticky", "background": "Blue", "paddingInlineStart": "16px", "paddingInlineEnd": "16px", "paddingTop": "8px", "paddingBottom": "8px", "zIndex": "999"}} direction={`row`} gap={`2`}>
  <RadixThemesText as={`p`} css={{"color": "white", "height": "50px"}}>
  {`TheScientific`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex align={`center`} direction={`column`} gap={`2`}>
  <Avatar name={`Andres Perez`} size={`xl`}/>
  <RadixThemesText as={`p`} color={`gray`}>
  {`@TheScientific`}
</RadixThemesText>
  <RadixThemesText as={`p`}>
  {`Hola mi nombre es ANDRES PEREZ`}
</RadixThemesText>
  <RadixThemesText as={`p`}>
  {`Soy desarrollador de software desde hace 2 años.
                Actualmente trabajo como freelance fullstack developer.
                !Bienvenid@!`}
</RadixThemesText>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} direction={`column`} gap={`2`}>
  <Link_5919eef53b9c64c51379d61eda404eb0/>
  <Link_0cb7bdbd4b9a5fb989cc933f2e47e83e/>
</RadixThemesFlex>
  <RadixThemesFlex align={`center`} direction={`column`} gap={`2`}>
  <img src={`favicon.ico`}/>
  <RadixThemesLink>
  {`© 2022-2024 by Andres Perez, with help and thanks to MoureDev.`}
</RadixThemesLink>
</RadixThemesFlex>
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
