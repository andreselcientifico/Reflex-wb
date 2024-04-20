/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Box as RadixThemesBox, Flex as RadixThemesFlex, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import { Avatar, Button, HStack, VStack } from "@chakra-ui/react"
import { isTrue } from "/utils/state"
import NextLink from "next/link"
import { LinkIcon as LucideLinkIcon } from "lucide-react"
import NextHead from "next/head"



export function Link_83137a5174dca28cd342143aba72fa24 () {



  return (
    <RadixThemesLink asChild={true} css={{"width": "100%"}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://github.com/andreselcientifico`} passHref={true}>
  <Button sx={{"width": "100%", "height": "100%"}}>
  <HStack>
  <LucideLinkIcon css={{"color": "var(--current-color)"}}/>
  <VStack>
  <RadixThemesText as={`p`}>
  {`Github`}
</RadixThemesText>
  <RadixThemesText as={`p`}>
  {`Github`}
</RadixThemesText>
</VStack>
</HStack>
</Button>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_7a5da96b8b0095ff9f359ca73931b635 () {



  return (
    <RadixThemesLink asChild={true} css={{"width": "100%"}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.linkedin.com/in/andres-alfonso-569409128/`} passHref={true}>
  <Button sx={{"width": "100%", "height": "100%"}}>
  <HStack>
  <LucideLinkIcon css={{"color": "var(--current-color)"}}/>
  <VStack>
  <RadixThemesText as={`p`}>
  {`linkedin`}
</RadixThemesText>
  <RadixThemesText as={`p`}>
  {`linkedin`}
</RadixThemesText>
</VStack>
</HStack>
</Button>
</NextLink>
</RadixThemesLink>
  )
}

export default function Component() {

  return (
    <Fragment>
  <RadixThemesBox>
  <HStack sx={{"positions": "sticky", "background": "Blue", "paddingInlineStart": "16px", "paddingInlineEnd": "16px", "paddingTop": "8px", "paddingBottom": "8px", "zIndex": "999"}}>
  <RadixThemesText as={`p`} css={{"color": "white", "height": "50px"}}>
  {`TheScientific`}
</RadixThemesText>
</HStack>
  <RadixThemesFlex css={{"display": "flex", "alignItems": "center", "justifyContent": "center"}}>
  <VStack sx={{"maxWidth": "560px", "width": "100%", "marginTop": "2em", "marginBottom": "2em"}}>
  <VStack>
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
</VStack>
  <VStack>
  <Link_83137a5174dca28cd342143aba72fa24/>
  <Link_7a5da96b8b0095ff9f359ca73931b635/>
</VStack>
</VStack>
</RadixThemesFlex>
  <VStack sx={{"align": "center"}}>
  <img src={`favicon.ico`}/>
  <RadixThemesLink>
  {`© 2022-2024 by Andres Perez, with help and thanks to MoureDev.`}
</RadixThemesLink>
</VStack>
</RadixThemesBox>
  <NextHead>
  <title>
  {`Web Reflex | Index`}
</title>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
