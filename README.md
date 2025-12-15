# Hello-World-MCP-Server

MCP Server that sends string: "Hello World !"

## Description

This is a simple Model Context Protocol (MCP) server that provides a tool which returns the greeting "Hello World !".

## Installation

```bash
npm install
```

## Build

```bash
npm run build
```

## Usage

### Running the Server

```bash
npm start
```

Or for development with auto-reload:

```bash
npm run dev
```

### Using with MCP Clients

Add this server to your MCP client configuration (e.g., Claude Desktop, Cursor, or other MCP-compatible applications):

```json
{
  "mcpServers": {
    "hello-world": {
      "command": "node",
      "args": ["/path/to/Hello-World-MCP-Server/dist/index.js"]
    }
  }
}
```

### Available Tools

- **hello**: Returns the greeting "Hello World !"
  - Takes no parameters
  - Returns: "Hello World !"

## Development

This server is built with:
- TypeScript
- @modelcontextprotocol/sdk
- Node.js

## License

MIT
