# Flat Data - Ja3er

This demo is part of a larger Flat Data project created by [GitHub OCTO](https://octo.github.com/). Read more about the project [here](https://octo.github.com/projects/flat-data).

## What this demo does

This repository uses a [Flat Data Action](https://github.com/githubocto/flat) to fetch the the User agents and Ja3s [from Ja3er.com](https://ja3er.com/downloads.html) and commits a filtered version of the data to `ja3er-postprocessed.json`. This runs on a cron job every day. 

Filtering Occurs in the following manner, 

Only User-Agents that occur more than `10` times are included, 

Blank user agents are stripped

We match the `md5` hash from the UserAgent object to the Ja3 object and return `ja3er-postprocessed.json`
