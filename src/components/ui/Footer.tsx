import { createStyles, makeStyles, Typography } from "@material-ui/core";
import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";

const useStyles = makeStyles((theme) => createStyles({
  footer: {
    marginTop: theme.spacing(3),
    "& *": {
      fontSize: `${theme.typography.fontSize * 0.7}px`,
      textDecoration: "none",
      color: theme.palette.text.primary,
    },
    "& a:hover": {
      textDecoration: "underline",
    },
    "& a:visited": {
      color: theme.palette.text.hint,
    },
    "& a": {
      marginRight: theme.spacing(0.5),
    }
  }
}));

export default function Footer() {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
      query {
        allJacdacTsJson {
          nodes {
            version
          }
        }
      }
    `)

  const  packageJson = data.allJacdacTsJson.nodes[0]
  return <footer role="contentinfo" className={classes.footer}>
    <a target="_blank" rel="noopener noreferrer" href={`https://github.com/microsoft/jacdac-ts/tree/v${packageJson?.version}`}>Jacdac-TS v{packageJson?.version}</a>
    <a href="https://makecode.com/privacy" target="_blank" rel="noopener noreferrer">Privacy &amp; Cookies</a>
    <a href="https://makecode.com/termsofuse" target="_blank" rel="noopener noreferrer">Terms Of Use</a>
    <a href="https://makecode.com/trademarks" target="_blank" rel="noopener noreferrer">Trademarks</a>
    <Typography component="span" variant="inherit">
      © {new Date().getFullYear()} Microsoft Corporation
    </Typography>
  </footer>
}