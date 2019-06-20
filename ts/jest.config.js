module.exports = {
    "roots": [
        // "<rootDir>/src",
        "<rootDir>/tests"
    ],
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    // "testRegex": "(/__tests__/.*|(\\\\.|/)(test|spec))\\\\.[jt]sx?$",
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    "setupFilesAfterEnv": ["./tests/setup.ts"]
}