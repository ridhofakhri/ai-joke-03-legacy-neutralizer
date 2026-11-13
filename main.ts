import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const joke = 'I asked my AI coding agent for a small refactor. It replied, “Sure—should I preserve the code or just the commit history?”';
writeFileSync(join(outputDir, 'entry.txt'), joke);
