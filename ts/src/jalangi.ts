declare global {
    const J$;
}

export interface Sandbox {
    analysis?: Analyzer;
    iidToLocation(iid: string): string;
}

export interface Analyzer {
    functionEnter(iid: string, func, receiver, args): void;
    endExecution(): void;
}
