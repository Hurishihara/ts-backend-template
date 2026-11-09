export function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet(process.env.NODE_ENV ?? "world"));
