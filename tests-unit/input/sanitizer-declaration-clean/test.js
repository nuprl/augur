const a = 2;

const sanitizedDeclaration = a;

// Untainted, because the value assigned to `z` passes through the sanitized declaration
const z = sanitizedDeclaration;
