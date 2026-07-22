import type { getOctokit } from '@actions/github';
import type { Context } from '@actions/github/lib/context';
import { getAssignees } from './utils/context';
import { addAssignees } from './utils/github';

export const execute = async(octokit: ReturnType<typeof getOctokit>, context: Context): Promise<void> => addAssignees(getAssignees(context), octokit, context);
