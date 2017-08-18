#!/usr/bin/env bash
bower update -f
polymer build --js-minify --css-minify --html-minify --bundle
