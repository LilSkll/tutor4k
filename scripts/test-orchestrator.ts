// Quick standalone test of the AI orchestrator + domain guard.
// Run with: npx tsx scripts/test-orchestrator.ts
import { generateAIResponse } from "../src/server/ai/orchestrator";

async function main() {
  console.log("\n=== TEST 1: Off-topic question (should be refused by guard) ===");
  const offTopic = await generateAIResponse({
    messages: [{ role: "user", content: "Как приготовить борщ?" }],
    language: "ru",
  });
  console.log("refused:", offTopic.refused);
  console.log("content:", offTopic.content);

  console.log("\n=== TEST 2: Valid Spanish question (should call Groq) ===");
  const valid = await generateAIResponse({
    messages: [
      {
        role: "user",
        content:
          "Explica brevemente cuándo uso ser y cuándo estar, con un ejemplo de cada uno.",
      },
    ],
    level: "A1",
    language: "es",
  });
  console.log("provider:", valid.provider, "| model:", valid.model);
  console.log("usage:", valid.usage);
  console.log("content:\n", valid.content);

  console.log("\n=== TEST 3: Homework request (should guide, not solve) ===");
  const hw = await generateAIResponse({
    messages: [
      { role: "user", content: "Haz este ejercicio por mí: Yo ___ estudiante (ser)." },
    ],
    level: "A1",
    language: "es",
  });
  console.log("provider:", hw.provider);
  console.log("content:\n", hw.content);
}

main().catch((e) => {
  console.error("TEST FAILED:", e);
  process.exit(1);
});
