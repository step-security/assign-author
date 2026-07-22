import type { getOctokit } from '@actions/github';
import type { Context } from '@actions/github/lib/context';
import * as core from '@actions/core';

export const addAssignees = async(assignees: string[] | false, octokit: ReturnType<typeof getOctokit>, context: Context): Promise<void> => {
  if (false === assignees) {
    core.warning('Invalid target.');
    return;
  }

  core.info('Adding assignees');
  assignees.forEach(a => core.info(a));

  if (!assignees.length) {
    core.info('do nothing...');
    return;
  }

  try {
    await octokit.rest.issues.addAssignees({
      owner: context.repo.owner,
      repo: context.repo.repo,
      'issue_number': context.issue.number,
      assignees: assignees,
    });
  } catch (error: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
    if ('Resource not accessible by integration' === error.message) {
      core.warning(error.message);
    } else {
      throw error;
    }
  }
};
