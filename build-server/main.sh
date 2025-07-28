#!/bin/bash

export GIT_REPOSITORY_URL="$GIT_REPOSITORY_URL"

git clone --branch "$BRANCH" --single-branch "$GIT_REPOSITORY_URL" /builder/output

exec node script.js