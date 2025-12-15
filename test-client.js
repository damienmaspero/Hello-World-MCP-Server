import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

async function testServer() {
  console.log("🚀 Starting MCP client test...\n");

  // Create client and connect to server
  const transport = new StdioClientTransport({
    command: "node",
    args: ["dist/index.js"],
  });

  const client = new Client(
    {
      name: "test-client",
      version: "1.0.0",
    },
    {
      capabilities: {},
    }
  );

  await client.connect(transport);
  console.log("✅ Connected to server\n");

  // List available tools
  const tools = await client.listTools();
  console.log("📋 Available tools:");
  console.log(JSON.stringify(tools, null, 2));
  console.log("");

  // Call the hello tool
  console.log("🔧 Calling hello tool...");
  const result = await client.callTool({
    name: "hello",
    arguments: {},
  });
  console.log("📨 Result:");
  console.log(JSON.stringify(result, null, 2));
  console.log("");

  // Close connection
  await client.close();
  console.log("👋 Test completed successfully!");
}

testServer().catch((error) => {
  console.error("❌ Error:", error);
  process.exit(1);
});
