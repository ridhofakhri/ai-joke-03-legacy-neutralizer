import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const joke = 'I asked my AI coding agent for a small refactor. It returned a pull request titled “Your legacy has been neutralized.”';
writeFileSync(join(outputDir, 'entry.txt'), joke);
