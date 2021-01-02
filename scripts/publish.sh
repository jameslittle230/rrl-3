#!/usr/bin/env bash
wget https://files.stork-search.net/releases/latest/stork-ubuntu-latest
chmod +x stork-ubuntu-latest

npm run build && npm run export && npm run build
./stork-ubuntu-latest --build public/search.toml

npm run build && npm run export
