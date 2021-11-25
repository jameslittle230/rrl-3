#!/usr/bin/env bash
wget -nv https://files.stork-search.net/releases/v1.3.0/stork-ubuntu-20-04
chmod +x stork-ubuntu-20-04
./stork-ubuntu-20-04 build --input public/search.toml --output public/search-index.st
