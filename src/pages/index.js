import * as React from "react"
import "../components/layout.css"
import github from "../images/GitHub-Mark-32px.png"
import linkedinImage from "../images/LI-In-Bug.png"
import profile from "../images/profile.png"

// styles
const imagesStyle = {
  textAlign: "centre"
}

const pageStyles = {
  color: "#232129",
  paddingTop: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  textAlign: "center"
}
const headingStyles = {
  color: "#8954A8"
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: "300",
  fontSize: "24px",
  maxWidth: "560px",
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: "16px",
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const linkedIn = {
  height: "32px",
  padding: "5px"
}

const image = {
  padding: "5px"
}

const descriptionStyle = {
  color: "#232129",
  fontSize: "14px",
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const profileStyle = {
  borderRadius: "50%",
  height: "100px",
  width: "100px"
}
// data
const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#000000",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <img
        alt="Profile picture"
        src={profile}
        style={profileStyle}
      />
      <h1 style={headingStyles}>
        Sean Onslow
      </h1>
      <div style={imagesStyle}>
        <a href="https://www.github.com/seanmonslow">
          <img alt="github" style={image} src={github} />
        </a>
        <a href="https://www.linkedin.com/in/sean-onslow-391086152/">
          <img alt="linkedin" style={linkedIn} src={linkedinImage} />
        </a>
      </div>
      <p style={paragraphStyles}>
        Software developer based in Liverpool.
      </p>
    </main>
  )
}

export default IndexPage
