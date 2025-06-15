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

## Http Errors

GlitchKit HTTP Errors provide a fluent API to build rich, structured errors with metadata and traceability — ideal for microservices, observability platforms, and audit systems.

#### Import the specific HTTP error class

```javascript
import { GkNotFoundHttpError } from 'glitchkit';
```

#### Instantiate the error with a meaningful message

```javascript
const notFoundError = new GkNotFoundHttpError('Record not found');
```

#### Optionally, assign a custom application error code

```javascript
// Optional: Add request and response details
notFoundError.withErrorCode(1001);
```

#### Add request and response payloads for debugging or audit trails

```javascript
// Optional: Add request and response details
notFoundError.withRequest({ recordId: '12345' });
notFoundError.withResponse({ message: 'Requested record was not found.' });
```

#### Enrich the error with structured metadata (category, context, tags, cause)

```javascript
// Optional: Add structured metadata
notFoundError.metadata
  .withCategory('database') // Optional category
  .withInfo({ recordId: '12345', operation: 'fetch' }) // Optional metadata info
  .withContext({ context: 'Database query for record' }) // Optional metadata context
  .withTags(['database', 'not_found']) // Optional metadata tags
  .withCause('The requested record does not exist in the database.'); // Optional metadata cause
```

#### Add traceability information for better monitoring and observability

```javascript
// Optional: Add traceability details for observability

notFoundError.traceability
  .withOperation('fetchRecord') // Optional operation name
  .withTraceId('trace-12345') // Optional trace ID
  .withReported(true) // Optional reported status
  .withSource('database-service'); // Optional source of the error
```

#### Serialize the error or check its type before throwing/logging

```javascript
// Convert to JSON for structured logging or API response
console.log(notFoundError.toJSON());

// Type checking
console.log(GkNotFoundHttpError.isInstance(notFoundError));
```

### 🔄 4xx — Client Errors

| HTTP Code | Error Class                  | Description                                                         |
| --------- | ---------------------------- | ------------------------------------------------------------------- |
| 400       | `GkBadRequestHttpError`      | The server could not understand the request due to invalid syntax.  |
| 401       | `GkUnauthorizedHttpError`    | Authentication is required and has failed or has not been provided. |
| 402       | `GkPaymentRequiredHttpError` | Reserved for future use (e.g., digital payment systems).            |
| 403       | `GkForbiddenHttpError`       | Client does not have access rights to the content.                  |
| 404       | `GkNotFoundHttpError`        | The server cannot find the requested resource.                      |

This include all other 4xx errors.

### 🛠️ 5xx — Server Errors

| HTTP Code | Error Class                      | Description                                                      |
| --------- | -------------------------------- | ---------------------------------------------------------------- |
| 500       | `GkInternalServerErrorHttpError` | The server encountered an unexpected condition.                  |
| 501       | `GkNotImplementedHttpError`      | The server does not support the functionality required.          |
| 502       | `GkBadGatewayHttpError`          | The server received an invalid response from an upstream server. |
| 503       | `GkServiceUnavailableHttpError`  | The server is currently unavailable.                             |

This include all other 4xx errors.
