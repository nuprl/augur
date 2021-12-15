const a = 2;

const sanitizedDeclaration = a;

// Tainted, because the value assigned to `z` doesn't pass through the sanitized declaration
const z = a;
