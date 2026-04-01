import chalk from "chalk";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const VERSION = require("../package.json").version;

// Color Palette from original banner.svg gradient
const violet = chalk.hex("#7c6af7");
const purple = chalk.hex("#a78bfa");
const lavender = chalk.hex("#c084fc");
const blue = chalk.hex("#60a5fa");
const green = chalk.hex("#34d399");
const white = chalk.white;
const whiteBold = chalk.white.bold;
const dim = chalk.gray;

export function showWelcome(serverUrl = "http://localhost:7823") {
  const cols = process.stdout.columns;
  const terminalWidth = (typeof cols === 'number' && cols > 0) ? cols : 80;

  console.log("");

  if (terminalWidth < 60) {
    // Fallback for very narrow terminals
    console.log(`  🪶  ${whiteBold("OpenJCK")} ${lavender(`v${VERSION}`)}`);
    console.log(`  ${green("✓")} Server ready   ${blue(serverUrl)}`);
    console.log(`  ${green("✓")} Traces synced  ${dim("~/.openjck/")}`);
    console.log("");
    console.log(`  Quick Start: ${blue(serverUrl)}`);
    console.log(`  Docs:        ${dim("https://openjck.dev")}`);
    console.log("");
    return;
  }

  // Full Box-drawn Banner (~75 chars wide)
  const banner = `
  ${violet("╭──────────────────────────────────────────────────────────────────────────╮")}
  ${violet("│")}                                                                          ${violet("│")}
  ${violet("│")}      ${purple("▄▀▀▀▄")}                                                               ${violet("│")}
  ${violet("│")}     ${purple("█  ◈  █▄▄▄▄")}                                                          ${violet("│")}
  ${violet("│")}      ${purple("▀▄▄▄▀▀▀▀▀▒░")}     ${whiteBold("O P E N J C K")}                                      ${violet("│")}
  ${violet("│")}                        ${lavender(`v${VERSION}`)}                                         ${violet("│")}
  ${violet("│")}                                                                          ${violet("│")}
  ${violet("│")}      ${white("Visual Debugger for AI Agent Loops")}                                  ${violet("│")}
  ${violet("│")}                                                                          ${violet("│")}
  ${violet("│")}   ${green("✓")}  ${white("Server listening")}    ${blue(serverUrl)}                            ${violet("│")}
  ${violet("│")}   ${green("✓")}  ${white("Database ready")}      ${dim("~/.openjck/openjck.db")}                       ${violet("│")}
  ${violet("│")}   ${green("✓")}  ${white("Dashboard loaded")}    ${white("React UI")}                                    ${violet("│")}
  ${violet("│")}                                                                          ${violet("│")}
  ${violet("│")}   ${whiteBold("Quick Start")}                                                        ${violet("│")}
  ${violet("│")}                                                                          ${violet("│")}
  ${violet("│")}    ${violet.bold("1")}  ${white("Open dashboard")}     ${blue(serverUrl)}                            ${violet("│")}
  ${violet("│")}    ${violet.bold("2")}  ${white("Instrument code")}    ${dim("from openjck import trace")}                   ${violet("│")}
  ${violet("│")}    ${violet.bold("3")}  ${white("Run your agent")}     ${white("Traces appear live")}                         ${violet("│")}
  ${violet("│")}                                                                          ${violet("│")}
  ${violet("│")}   ${dim("─────────────────────────────────────────────────")}                      ${violet("│")}
  ${violet("│")}   ${dim("Docs")}    ${blue("https://openjck.dev")}                                        ${violet("│")}
  ${violet("│")}   ${dim("GitHub")}  ${blue("github.com/RavaniRoshan/openjck")}                            ${violet("│")}
  ${violet("│")}   ${dim("─────────────────────────────────────────────────")}                      ${violet("│")}
  ${violet("│")}                                                                          ${violet("│")}
  ${violet("│")}   ${dim("Data stays local. Zero cloud dependencies.")}                             ${violet("│")}
  ${violet("│")}   ${dim("Press")} ${white("Ctrl+C")} ${dim("to stop.")}                                                  ${violet("│")}
  ${violet("│")}                                                                          ${violet("│")}
  ${violet("╰──────────────────────────────────────────────────────────────────────────╯")}
  `;

  // Remove the initial newline and trim trailing whitespace
  const formattedBanner = banner.replace(/^\n/, "").trimRight();
  console.log(formattedBanner);
  console.log("");
}
