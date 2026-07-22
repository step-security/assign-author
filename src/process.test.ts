/* eslint-disable no-magic-numbers */
import path from 'path';
import { describe, expect, it, vi } from 'vitest';
import { execute } from './process';
import { getApiFixture, getContext } from './test-utils';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const makeOctokit = (impl: ReturnType<typeof vi.fn>): any => ({
  rest: { issues: { addAssignees: impl } },
});

describe('execute', () => {
  it('should add assignees', async() => {
    const fixture = getApiFixture(path.resolve(__dirname, 'fixtures'), 'repos.issues.assignees');
    const fn      = vi.fn().mockResolvedValue({ data: fixture });

    await execute(makeOctokit(fn), getContext({
      repo: {
        owner: 'hello',
        repo: 'world',
      },
      eventName: 'pull_request',
      payload: {
        sender: {
          type: 'User',
          login: 'test',
        },
        'pull_request': {
          assignees: [],
        },
      },
    }));

    expect(fn).toBeCalledTimes(1);
    expect(fn).toBeCalledWith({
      owner: 'hello',
      repo: 'world',
      'issue_number': 1,
      assignees: ['test'],
    });
  });
});
