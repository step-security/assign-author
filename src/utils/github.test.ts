/* eslint-disable no-magic-numbers */
import path from 'path';
import { describe, expect, it, vi } from 'vitest';
import { getApiFixture, getContext, spyOnStdout, stdoutCalledWith } from '../test-utils';
import { addAssignees } from './github';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const makeOctokit = (impl: ReturnType<typeof vi.fn>): any => ({
  rest: { issues: { addAssignees: impl } },
});

describe('addAssignees', () => {
  it('should do nothing 1', async() => {
    const fn = vi.fn();
    await addAssignees(false, makeOctokit(fn), getContext({
      repo: { owner: 'hello', repo: 'world' },
    }));
    expect(fn).not.toBeCalled();
  });

  it('should do nothing 2', async() => {
    const fn = vi.fn();
    await addAssignees([], makeOctokit(fn), getContext({
      repo: { owner: 'hello', repo: 'world' },
    }));
    expect(fn).not.toBeCalled();
  });

  it('should do nothing 3', async() => {
    const fn         = vi.fn().mockRejectedValue(new Error('Resource not accessible by integration'));
    const mockStdout = spyOnStdout();

    await addAssignees(['test'], makeOctokit(fn), getContext({
      repo: { owner: 'hello', repo: 'world' },
    }));

    expect(fn).toBeCalledTimes(1);
    stdoutCalledWith(mockStdout, [
      'Adding assignees',
      'test',
      '::warning::Resource not accessible by integration',
    ]);
  });

  it('should do nothing 4', async() => {
    const fn         = vi.fn().mockRejectedValue(new Error('test'));
    const mockStdout = spyOnStdout();

    await expect(addAssignees(['test'], makeOctokit(fn), getContext({
      repo: { owner: 'hello', repo: 'world' },
    }))).rejects.toThrow(new Error('test'));

    expect(fn).toBeCalledTimes(1);
    stdoutCalledWith(mockStdout, [
      'Adding assignees',
      'test',
    ]);
  });

  it('should add assignees', async() => {
    const fixture = getApiFixture(path.resolve(__dirname, '../fixtures'), 'repos.issues.assignees');
    const fn      = vi.fn().mockResolvedValue({ data: fixture });

    await addAssignees(['test'], makeOctokit(fn), getContext({
      repo: { owner: 'hello', repo: 'world' },
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
