# Third-party notices

## pokemon-showdown

Pokémon Manzana uses `pokemon-showdown` as a backend battle simulator. The installed package declares the MIT license. This notice applies to that software dependency, not to Pokémon trademarks, sprite files, cries, music, or other media assets stored or referenced by this application.

Source: https://github.com/smogon/pokemon-showdown

The MIT License (MIT)

Copyright (c) 2011-2026 Guangcong Luo and other contributors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Pokémon cries

Battle cries are streamed directly from [PokeAPI/cries](https://github.com/PokeAPI/cries) using the Pokédex number and the repository's `latest` audio file. The application does not serve or package local files from `Cries/`. PokeAPI audio is separate from the Pokémon Showdown license above; review PokeAPI's current terms before relying on or redistributing those files.

## Local media asset inventory

| Resource | Location | Source/license status |
|---|---|---|
| Pokémon sprites and animations | `models/` | The project owner reports these are from Pokémon Showdown and covered by its MIT license. |
| Items, sprites, and battle effects | `items/`, `public/`, `fx/` | The project owner reports these are from Pokémon Showdown and covered by its MIT license. The move-effectiveness GIFs were designed by the project owner. |
| Logos, maps, and other images | `src/assets/` | Reported as original project assets. |
| Pokémon cries | Remote PokeAPI URLs | Loaded directly from [PokeAPI/cries](https://github.com/PokeAPI/cries); local `Cries/` files are no longer used or required for deployment. Review PokeAPI's current terms separately. |

This inventory records the provenance reported by the project owner and does not extend any license. The MIT license for Pokémon Showdown does not grant rights to Pokémon trademarks or other intellectual property.
