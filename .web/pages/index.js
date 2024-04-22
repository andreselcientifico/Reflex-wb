/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Avatar, Box, Button, Center, Heading, HStack, Text, VStack } from "@chakra-ui/react"
import { Flex as RadixThemesFlex, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import { isTrue } from "/utils/state"
import NextLink from "next/link"
import { LinkIcon as LucideLinkIcon } from "lucide-react"
import NextHead from "next/head"



export function Link_f0cd62ad500cc8b05d1ca776019ca3a5 () {



  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "textDecoration": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://www.linkedin.com/in/andres-alfonso-569409128/`} passHref={true}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em", "color": "#C3C7CB", "backgroundColor": ["#171F26"], "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack>
  <LucideLinkIcon css={{"color": "var(--current-color)", "width": "2em", "height": "1em"}}/>
  <VStack alignItems={`start`}>
  <RadixThemesText as={`p`} css={{"fontSize": "1em"}}>
  {`linkedin`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontSize": "0.8em"}}>
  {`Mi curriculum principal`}
</RadixThemesText>
</VStack>
</HStack>
</Button>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_ea5e9bae1de975e98d52770aef380c15 () {



  return (
    <RadixThemesLink asChild={true} css={{"textDecoration": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://github.com/andreselcientifico`} passHref={true}>
  <LucideLinkIcon css={{"color": "var(--current-color)"}}/>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_4879e8bfd8ee5ab9029874faf224a11f () {



  return (
    <RadixThemesLink asChild={true} css={{"width": "100%", "textDecoration": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://github.com/andreselcientifico`} passHref={true}>
  <Button sx={{"width": "100%", "height": "100%", "display": "block", "padding": "0.5em", "borderRadius": "1em", "color": "#C3C7CB", "backgroundColor": ["#171F26"], "_hover": {"backgroundColor": "#087ec4"}}}>
  <HStack>
  <LucideLinkIcon css={{"color": "var(--current-color)", "width": "2em", "height": "1em"}}/>
  <VStack alignItems={`start`}>
  <RadixThemesText as={`p`} css={{"fontSize": "1em"}}>
  {`Github`}
</RadixThemesText>
  <RadixThemesText as={`p`} css={{"fontSize": "0.8em"}}>
  {`15+ Proyectos personales`}
</RadixThemesText>
</VStack>
</HStack>
</Button>
</NextLink>
</RadixThemesLink>
  )
}

export function Link_7018e39fc4944605798e36058bfc843b () {



  return (
    <RadixThemesLink asChild={true} css={{"fontSize": "0.8em", "textDecoration": "none", "&:hover": null}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://moure.dev/`} passHref={true}>
  {`© 2022-2024 with help and thanks to MoureDev.`}
</NextLink>
</RadixThemesLink>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Box sx={{"position": "relative"}}>
  <RadixThemesFlex align={`start`} css={{"position": "sticky", "background": "lightgray", "paddingInlineStart": "1em", "paddingInlineEnd": "1em", "paddingTop": "0.5em", "paddingBottom": "0.5em", "zIndex": "999", "top": "0"}} direction={`row`} gap={`2`}>
  <RadixThemesText as={`p`}>
  {`TheScientific`}
</RadixThemesText>
</RadixThemesFlex>
  <Center>
  <VStack sx={{"maxWidth": "560px", "width": "100%", "marginTop": "2em", "marginBottom": "2em"}}>
  <VStack alignItems={`start`} spacing={`2em`}>
  <HStack spacing={`1em`}>
  <Avatar name={`Andres Perez`} size={`xl`}/>
  <VStack alignItems={`start`}>
  <Heading size={`lg`} sx={{"color": "#F1F2F4"}}>
  {`ANDRES PEREZ`}
</Heading>
  <RadixThemesText as={`p`} css={{"marginTop": "0px !important", "color": "#C3C7CB"}}>
  {`@TheScientific`}
</RadixThemesText>
  <HStack>
  <Link_ea5e9bae1de975e98d52770aef380c15/>
  <Link_ea5e9bae1de975e98d52770aef380c15/>
  <Link_ea5e9bae1de975e98d52770aef380c15/>
</HStack>
</VStack>
</HStack>
  <RadixThemesFlex css={{"width": "100%"}}>
  <Box sx={{"fonrSize": "0.8em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`+2`}
</Text>
  {` años de experiencia`}
</Box>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <Box sx={{"fonrSize": "0.8em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`+15`}
</Text>
  {` aplicaciones creadas`}
</Box>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <Box sx={{"fonrSize": "0.8em", "color": "#C3C7CB"}}>
  <Text as={`span`} sx={{"fontWeight": "bold", "color": "#14A1F0"}}>
  {`+2`}
</Text>
  {` proyectos grupales`}
</Box>
</RadixThemesFlex>
  <RadixThemesText as={`p`} css={{"color": "#C3C7CB"}}>
  {`Soy desarrollador de software desde hace 2 años.
                Actualmente trabajo como freelance fullstack developer.
                !Bienvenid@!`}
</RadixThemesText>
</VStack>
  <VStack spacing={`0.8em`} sx={{"width": "100%"}}>
  <Heading size={`lg`} sx={{"width": "100%", "paddingTop": "1em", "color": "#F1F2F4"}}>
  {`MI PORTAFOLIO`}
</Heading>
  <Link_4879e8bfd8ee5ab9029874faf224a11f/>
  <Link_f0cd62ad500cc8b05d1ca776019ca3a5/>
  <Heading size={`lg`} sx={{"width": "100%", "paddingTop": "1em", "color": "#F1F2F4"}}>
  {`MI PORTAFOLIO`}
</Heading>
  <Link_4879e8bfd8ee5ab9029874faf224a11f/>
  <Link_f0cd62ad500cc8b05d1ca776019ca3a5/>
  <Heading size={`lg`} sx={{"width": "100%", "paddingTop": "1em", "color": "#F1F2F4"}}>
  {`MI PORTAFOLIO`}
</Heading>
  <Link_4879e8bfd8ee5ab9029874faf224a11f/>
  <Link_f0cd62ad500cc8b05d1ca776019ca3a5/>
</VStack>
</VStack>
</Center>
  <VStack sx={{"marginBottom": "2em", "paddingBottom": "2em", "bottom": 0, "color": "#A3ABB2"}}>
  <img src={`favicon.ico`}/>
  <Link_7018e39fc4944605798e36058bfc843b/>
  <RadixThemesText as={`p`} css={{"fontSize": "0.8em", "marginTop": "0px !important"}}>
  {`This website is made with ❤️ and ☕ by Andres Perez.`}
</RadixThemesText>
</VStack>
</Box>
  <NextHead>
  <title>
  {`Web Reflex | Index`}
</title>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
