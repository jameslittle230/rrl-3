#!/usr/bin/env bash
wget https://files.stork-search.net/releases/v1.3.0/stork-ubuntu-20-04
chmod +x stork-ubuntu-20-04

npm run build && npm run export && npm run build
./stork-ubuntu-20-04 build --input public/search.toml --output public/search-index.st
rm -rf .next
rm -rf out
npm run build && npm run export
