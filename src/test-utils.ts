import type { Context } from '@actions/github/lib/context';
import fs from 'fs';
import { EOL } from 'os';
import path from 'path';
import { expect, vi } from 'vitest';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getContext = (override: Record<string, any> = {}): Context => Object.assign({
  payload: { action: '' },
  eventName: '',
  sha: '',
  ref: '',
  workflow: '',
  action: '',
  actor: '',
  issue: { owner: '', repo: '', number: 1 },
  repo: { owner: '', repo: '' },
  job: '',
  runNumber: 1,
  runId: 1,
  apiUrl: 'https://api.github.com',
  serverUrl: 'https://github.com',
  graphqlUrl: 'https://api.github.com/graphql',
}, override) as Context;

export const getApiFixture = (rootDir: string, name: string) =>
  JSON.parse(fs.readFileSync(path.resolve(rootDir, `${name}.json`)).toString());

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const spyOnStdout = (): ReturnType<typeof vi.fn> => process.stdout.write as any;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const stdoutCalledWith = (spy: ReturnType<typeof vi.fn>, messages: string[]) => {
  expect(spy).toBeCalledTimes(messages.length);
  messages.forEach((message, index) => {
    expect(spy.mock.calls[index]?.[0]).toBe(message + EOL);
  });
};
