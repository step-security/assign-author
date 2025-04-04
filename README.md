# Assign Author

[![CI Status](https://github.com/step-security/assign-author/workflows/CI/badge.svg)](https://github.com/step-security/assign-author/actions)
[![codecov](https://codecov.io/gh/step-security/assign-author/branch/main/graph/badge.svg)](https://codecov.io/gh/step-security/assign-author)
[![CodeFactor](https://www.codefactor.io/repository/github/step-security/assign-author/badge)](https://www.codefactor.io/repository/github/step-security/assign-author)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/step-security/assign-author/blob/main/LICENSE)

*Read this in other languages: [English](README.md), [日本語](README.ja.md).*

`GitHub Actions` to assign author to issue or PR.  

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<details>
<summary>Details</summary>

- [Screenshot](#screenshot)
- [Installation](#installation)
- [Action event details](#action-event-details)
  - [Target events](#target-events)
- [Author](#author)

</details>
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation
1. Setup workflow  
   e.g. `.github/workflows/pull_request.yml`
   ```yaml
   on:
     pull_request:
       types: [opened]
   name: Pull Request
   jobs:
     assignAuthor:
       name: Assign author to PR
       runs-on: ubuntu-latest
       steps:
         - name: Assign author to PR
           uses: step-security/assign-author@v1
   ```
   e.g. `.github/workflows/issues.yml`
   ```yaml
   on:
     issues:
       types: [opened]
   name: Issues
   jobs:
     assignAuthor:
       name: Assign author to issue
       runs-on: ubuntu-latest
       steps:
         - name: Assign author to issue
           uses: step-security/assign-author@v1
   ```

## Action event details
### Target events
| eventName | action |
|:---:|:---:|
|pull_request, pull_request_target|opened, reopened|
|issues|opened, reopened|
