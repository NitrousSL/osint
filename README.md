# osint
OSINT modules fed into a fastify REST API

# Requirements

- python 3.10
- osint.ts

# Usage

## Categories

- [`/username`](https://api.nitrous-oxi.de/osint/username)
- [`/domain`](https://api.nitrous-oxi.de/osint/domain)
- [`/email`](https://api.nitrous-oxi.de/osint/email)
- [`/phone`](https://api.nitrous-oxi.de/osint/phone)
- [`/ip`](https://api.nitrous-oxi.de/osint/ip)

## Module Indexing

All modules can be indexed via the following endpoints:

`https://api.nitrous-oxi.de/osint/`  
`https://api.nitrous-oxi.de/osint/<category>/`

## Individual Module Queries

A single module can be queried via the following endpoint:

`https://api.nitrous-oxi.de/osint/<category>/<module>?query=`

## Categorized Queries

All modules within a category can be queried via the following endpoints:

`https://api.nitrous-oxi.de/osint/<category>?query=`

## Response Schema

```json
{ "status" : 200, "data" : {}   }
{ "status" : 404, "data" : null }
{ "status" : 500, "data" : null }
```
