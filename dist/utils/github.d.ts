import type { getOctokit } from '@actions/github';
import type { Context } from '@actions/github/lib/context';
export declare const addAssignees: (assignees: string[] | false, octokit: ReturnType<typeof getOctokit>, context: Context) => Promise<void>;
