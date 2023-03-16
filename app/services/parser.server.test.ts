import { describe, expect, it } from '@jest/globals';

import { parse } from './parser.server';

describe('parser', () => {
  it('parses', async () => {
    const result = parse('<html />');
    expect(result).toBeDefined();
  });
})