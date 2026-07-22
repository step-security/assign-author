import { vi } from 'vitest';

process.stdout.write = vi.fn() as unknown as typeof process.stdout.write;

process.env.GITHUB_ACTOR = 'octocat';
process.env.GITHUB_PATH = '/home/runner/work/_temp/_runner_file_commands/add_path_aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee';
process.env.GITHUB_ENV = '/home/runner/work/_temp/_runner_file_commands/set_env_aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee';
process.env.GITHUB_STEP_SUMMARY = '/home/runner/work/_temp/_runner_file_commands/step_summary_aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee';
process.env.GITHUB_STATE = '/home/runner/work/_temp/_runner_file_commands/save_state_aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee';
process.env.GITHUB_OUTPUT = '/home/runner/work/_temp/_runner_file_commands/set_output_aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee';
