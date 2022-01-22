#!/usr/bin/env bash
wget -nv https://files.stork-search.net/releases/v1.4.0/stork-ubuntu-20-04
chmod +x stork-ubuntu-20-04
./stork-ubuntu-20-04 build --input public/search.toml --output public/search-index.st
cat public/search.toml
rm public/search.toml
