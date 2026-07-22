import type { Context } from '@actions/github/lib/context';
import { vi } from 'vitest';
export declare const getContext: (override?: Record<string, any>) => Context;
export declare const getApiFixture: (rootDir: string, name: string) => any;
export declare const spyOnStdout: () => ReturnType<typeof vi.fn>;
export declare const stdoutCalledWith: (spy: ReturnType<typeof vi.fn>, messages: string[]) => void;
