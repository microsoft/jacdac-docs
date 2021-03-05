import { Grid } from "@material-ui/core";
import React from "react";
import GithubRepositoryCard from "./GithubRepositoryCard";

export default function GithubRepositoryList(props: { repos: string[], showDescription?: boolean, showRelease?: boolean }) {
    const { repos, ...others } = props;
    return <Grid container spacing={2}>
        {repos.map(repo => <Grid item xs={12} key={repo}>
            <GithubRepositoryCard slug={repo} {...others} />
        </Grid>)}
    </Grid>
}