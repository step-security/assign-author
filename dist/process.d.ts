import type { getOctokit } from '@actions/github';
import type { Context } from '@actions/github/lib/context';
export declare const execute: (octokit: ReturnType<typeof getOctokit>, context: Context) => Promise<void>;
