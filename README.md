# GlitchKit

GlitchKit is a lightweight TypeScript toolkit for creating and managing expressive, structured, and reusable error types. It is designed for APIs, services, and any application that needs robust error handling and traceability.

## Features

- **Rich Error Hierarchy:** Predefined error classes for databases, filesystems, HTTP, memory, process exits, and validation.
- **Extensible:** Easily create your own error types by extending base classes.
- **Metadata & Traceability:** Attach context, tags, categories, and trace information to errors.
- **TypeScript Native:** Full type safety and autocompletion.
- **Reusable & Testable:** Designed for modularity and easy unit testing.

## Installation

```sh
npm install glitchkit
```

## Usage

```javascript
import { GlitchKitFileNotFoundError } from 'glitchkit';

try {
  throw new GlitchKitFileNotFoundError('File missing', 404, '/path/to/file');
} catch (err) {
  if (GlitchKitFileNotFoundError.isInstance(err)) {
    console.error('File not found:', err.path);
  }
}
```
