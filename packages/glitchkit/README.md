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

#### Import the specific HTTP error class

```javascript
import { GkBusinessLogicError } from 'glitchkit';
```

#### Instantiate the error with a meaningful message

```javascript
const gkError = new GkBusinessLogicError('Logical Error');
```

#### Optionally, assign a custom application error code

```javascript
gkError.withErrorCode(1001);
```

#### Enrich the error with structured metadata (category, context, tags, cause)

```javascript
gkError.metadata
  .withCategory('database') // Optional category
  .withInfo({ recordId: '12345', operation: 'fetch' }) // Optional metadata info
  .withContext({ context: 'Database query for record' }) // Optional metadata context
  .withTags(['database', 'not_found']) // Optional metadata tags
  .withCause('The requested record does not exist in the database.'); // Optional metadata cause
```

#### Add traceability information for better monitoring and observability

```javascript
gkError.traceability
  .withOperation('fetchRecord') // Optional operation name
  .withTraceId('trace-12345') // Optional trace ID
  .withReported(true) // Optional reported status
  .withSource('database-service'); // Optional source of the error
```

#### Serialize the error or check its type before throwing/logging

```javascript
console.log(gkError.toJSON());
console.log(GkBusinessLogicError.isInstance(gkError));
```

## Http Errors

GlitchKit HTTP Errors provide a fluent API to build rich, structured errors with metadata and traceability — ideal for microservices, observability platforms, and audit systems.

#### Import the specific HTTP error class and instantiate with a meaningful message

```javascript
import { GkNotFoundHttpError } from 'glitchkit';
const notFoundError = new GkNotFoundHttpError('Record not found');
```

#### Add request and response payloads for debugging or audit trails

```javascript
notFoundError.withRequest({ recordId: '12345' });
notFoundError.withResponse({ message: 'Requested record was not found.' });
```

### 🔄 4xx — Client Errors

| HTTP Code | Error Class                  | Description                                                         |
| --------- | ---------------------------- | ------------------------------------------------------------------- |
| 400       | `GkBadRequestHttpError`      | The server could not understand the request due to invalid syntax.  |
| 401       | `GkUnauthorizedHttpError`    | Authentication is required and has failed or has not been provided. |
| 402       | `GkPaymentRequiredHttpError` | Reserved for future use (e.g., digital payment systems).            |
| 403       | `GkForbiddenHttpError`       | Client does not have access rights to the content.                  |

This include all other 4xx errors.

### 🛠️ 5xx — Server Errors

| HTTP Code | Error Class                      | Description                                                  |
| --------- | -------------------------------- | ------------------------------------------------------------ |
| 500       | `GkInternalServerErrorHttpError` | Server encountered an unexpected condition.                  |
| 501       | `GkNotImplementedHttpError`      | Server does not support the functionality required.          |
| 502       | `GkBadGatewayHttpError`          | Server received an invalid response from an upstream server. |
| 503       | `GkServiceUnavailableHttpError`  | Server is currently unavailable.                             |

This include all other 5xx errors.

## Database

Initialize `GlitchKitDatabase` object

```javascript
const glitchKitDatabase: GlitchKitDatabase = new GlitchKitDatabase();
glitchKitDatabase.databaseName = DUMMY_DATABASE_NAME;
glitchKitDatabase.databaseUrl = DUMMY_DATABASE_URL;
glitchKitDatabase.databaseType = DUMMY_DATABASE_TYPE;
```

Attach it to `errorInstance` for enhanced traceability

```javascript
const errorInstance = new GlitchKitForeignKeyViolationError(DUMMY_ERROR_MESSAGE, DUMMY_ERROR_CODE);
errorInstance.withDatabase(glitchKitDatabase);
```

### 📊 Cloud Service Errors

These errors handle conditions related to system or subscription limits, as well as issues in data replication — useful for SaaS platforms and distributed systems.

| Error Class                | Description                                                                       |
| -------------------------- | --------------------------------------------------------------------------------- |
| `GkPlanLimitExceededError` | Raised when a user exceeds their current subscription or plan limits.             |
| `GkQuotaExceededError`     | Raised when API, storage, or usage quota has been surpassed.                      |
| `GkReplicaLagError`        | Raised when read replicas fall behind the primary source in a distributed system. |

### 🔌 Connection Errors

These errors represent common network-layer failures encountered in distributed applications, authentication flows, or when interfacing with external systems.

| Error Class                   | Description                                                               |
| ----------------------------- | ------------------------------------------------------------------------- |
| `GkAuthenticationFailedError` | Raised when user or service authentication fails.                         |
| `GkConnectionRefusedError`    | Raised when a network connection attempt is rejected by the target host.  |
| `GkSSLRequiredError`          | Raised when an operation requires SSL/TLS but the connection is insecure. |
| `GkTimeoutError`              | Raised when a network request or operation exceeds its time limit.        |
| `GkTooManyConnectionsError`   | Raised when connection pool limits are exceeded or rate limits are hit.   |

### 🗄️ Constraint Errors

These errors capture violations of common relational database constraints, making them valuable for backend validation, transaction handling, and ORM-level checks.

| Error Class                  | Description                                                                |
| ---------------------------- | -------------------------------------------------------------------------- |
| `GkCheckConstraintError`     | Raised when a database check constraint is violated.                       |
| `GkForeignKeyViolationError` | Raised when a foreign key constraint fails due to missing referenced data. |
| `GkNotNullConstraintError`   | Raised when a `NOT NULL` constraint is violated by a `NULL` value.         |
| `GkUniqueConstraintError`    | Raised when a duplicate value violates a `UNIQUE` constraint.              |

### 📐 Data Integrity Errors

These errors deal with issues related to data range, formatting, type enforcement, and truncation — commonly used in database operations, parsers, and form processing.

| Error Class               | Description                                                              |
| ------------------------- | ------------------------------------------------------------------------ |
| `GkDataTruncationError`   | Raised when data is truncated (e.g., a string exceeds the column limit). |
| `GkInvalidEnumValueError` | Raised when a value does not match any valid enum option.                |
| `GkOverflowError`         | Raised when a value exceeds the maximum allowed size or range.           |
| `GkUnderflowError`        | Raised when a value is smaller than the minimum allowed threshold.       |

### ⚙️ ORM & Migration Errors

These errors relate to issues that arise during ORM (Object-Relational Mapping) operations, schema migrations, or model synchronization — helpful in development and deployment pipelines.

| Error Class        | Description                                                                |
| ------------------ | -------------------------------------------------------------------------- |
| `GkDriverError`    | Raised when the underlying database driver throws an unexpected exception. |
| `GkMigrationError` | Raised when a database schema migration fails.                             |
| `GkModelSyncError` | Raised when model definitions cannot be properly synchronized with the DB. |

### 🧾 Query & Schema Errors

These errors help identify problems in database queries and schema references, enabling robust handling of malformed queries, misconfigurations, or type mismatches.

| Error Class              | Description                                                        |
| ------------------------ | ------------------------------------------------------------------ |
| `GkInvalidColumnError`   | Raised when referencing a non-existent or misspelled column.       |
| `GkInvalidDataTypeError` | Raised when the data type does not match the expected schema type. |
| `GkInvalidTableError`    | Raised when a query refers to a non-existent table.                |
| `GkQueryTimeoutError`    | Raised when a database query exceeds the allocated execution time. |
| `GkSyntaxError`          | Raised when a query contains invalid SQL or syntactic mistakes.    |

### 🔒 Transaction & Concurrency Errors

These errors are crucial for identifying and debugging issues related to database transactions, deadlocks, and concurrency control in multi-user environments.

| Error Class                   | Description                                                                  |
| ----------------------------- | ---------------------------------------------------------------------------- |
| `GkDeadlockDetectedError`     | Raised when a deadlock situation is detected and one transaction is aborted. |
| `GkLockWaitTimeoutError`      | Raised when a transaction waits too long for a lock and times out.           |
| `GkSerializationFailureError` | Raised when a serialization anomaly is detected (e.g., phantom reads).       |
| `GkTransactionAbortedError`   | Raised when a transaction fails and is rolled back due to internal reasons.  |

## 📁 Filesystem Errors

GlitchKit includes specialized errors for file and directory operations, helping developers handle edge cases related to existence, permissions, and I/O consistency.

| Error Class                  | Description                                                           |
| ---------------------------- | --------------------------------------------------------------------- |
| `GkDirectoryFoundError`      | Raised when a directory exists but shouldn't (e.g., during creation). |
| `GkDirectoryNotFoundError`   | Raised when a required directory cannot be found.                     |
| `GkDirectoryPermissionError` | Raised when directory access is denied due to permission issues.      |
| `GkFileExistsError`          | Raised when a file already exists and overwrite is not allowed.       |
| `GkFileNotFoundError`        | Raised when the specified file path does not exist.                   |
| `GkFilePermissionError`      | Raised when file read/write operations are blocked by permissions.    |

## 🧠 Memory Errors

These errors help diagnose and classify memory-related issues such as overflows, allocation failures, and memory quota breaches — vital for performance-sensitive or resource-constrained applications.

| Error Class                      | Description                                                                 |
| -------------------------------- | --------------------------------------------------------------------------- |
| `GkBadAllocError`                | Raised when dynamic memory allocation fails (e.g., `new` or `malloc`).      |
| `GkBufferOverflowError`          | Raised when a buffer exceeds its bounds and corrupts memory.                |
| `GkGpuMemoryOverflowError`       | Raised when GPU memory is exhausted during compute or rendering.            |
| `GkHeapOverflowError`            | Raised when heap memory usage exceeds limits or leaks occur.                |
| `GkMemoryQuotaExceededError`     | Raised when an application exceeds its allowed memory allocation.           |
| `GkOOMKilledError`               | Raised when the process is killed by the OS due to Out-of-Memory condition. |
| `GkOutOfMemoryError`             | General OOM error, triggered when no memory can be allocated.               |
| `GkProcessMemoryExceededError`   | Raised when a process exceeds its assigned memory budget.                   |
| `GkStackOverflowError`           | Raised when the call stack exceeds its limit due to excessive recursion.    |
| `GkVirtualMemoryExhaustionError` | Raised when the system exhausts its virtual memory space.                   |

## 💀 Process & Exit Errors

These errors capture various failure modes of application and system processes. Useful for monitoring, graceful shutdowns, and diagnosing abnormal terminations.

| Error Class                     | Description                                                                   |
| ------------------------------- | ----------------------------------------------------------------------------- |
| `GkCrashLoopError`              | Raised when a service crashes repeatedly in a short span (crash loop).        |
| `GkDependencyFailureExitError`  | Raised when a process exits due to a missing or failed dependency.            |
| `GkGeneralProcessError`         | Generic process-level error, useful as a fallback when no specific type fits. |
| `GkOOMKilledProcessError`       | Raised when a process is terminated by the OS due to out-of-memory issues.    |
| `GkSegmentationFaultError`      | Raised when a segmentation fault (e.g., invalid memory access) occurs.        |
| `GkSigintProcessError`          | Raised when a process receives a SIGINT (e.g., Ctrl+C termination).           |
| `GkSigkillProcessError`         | Raised when a process receives a SIGKILL signal (force kill).                 |
| `GkSigtermProcessError`         | Raised when a process receives a SIGTERM signal (graceful termination).       |
| `GkSystemShutdownExitError`     | Raised when a system shutdown causes the process to exit.                     |
| `GkTimeoutExitError`            | Raised when a process exceeds its allowed execution time and times out.       |
| `GkUnexpectedSuccessExitError`  | Raised when a process unexpectedly succeeds when failure was expected.        |
| `GkUnhandledExceptionExitError` | Raised when an unhandled exception causes process termination.                |
| `GkZombieProcessCleanupError`   | Raised when a zombie (defunct) process cleanup fails or is mishandled.        |

## 🧪 Validation Errors

GlitchKit provides fine-grained validation error classes for attribute-level and schema-level validation. Ideal for form validation, API contracts, and dynamic schema enforcement.

| Error Class                         | Description                                                           |
| ----------------------------------- | --------------------------------------------------------------------- |
| `GkArrayAttributeValidationError`   | Raised when an array attribute fails validation rules.                |
| `GkBooleanAttributeValidationError` | Raised when a boolean attribute has an invalid or unexpected value.   |
| `GkDateAttributeValidationError`    | Raised for invalid or unparseable date values.                        |
| `GkNumericAttributeValidationError` | Raised when a number fails min/max or type validation.                |
| `GkObjectAttributeValidationError`  | Raised when an object field structure is incorrect.                   |
| `GkSchemaValidationError`           | Raised when the overall schema structure does not match expectations. |
| `GkStringAttributeValidationError`  | Raised when string attributes fail regex, length, or presence checks. |
