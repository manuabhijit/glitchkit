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

## Http Errors 🔄 4xx — Client Errors

| HTTP Code | Error Class                                     | Description                                                                |
| --------- | ----------------------------------------------- | -------------------------------------------------------------------------- |
| 400       | `GlitchKitBadRequestHttpError`                  | The server could not understand the request due to invalid syntax.         |
| 401       | `GlitchKitUnauthorizedHttpError`                | Authentication is required and has failed or has not been provided.        |
| 402       | `GlitchKitPaymentRequiredHttpError`             | Reserved for future use (e.g., digital payment systems).                   |
| 403       | `GlitchKitForbiddenHttpError`                   | Client does not have access rights to the content.                         |
| 404       | `GlitchKitNotFoundHttpError`                    | The server cannot find the requested resource.                             |
| 405       | `GlitchKitMethodNotAllowedHttpError`            | The method is not allowed for the requested resource.                      |
| 406       | `GlitchKitNotAcceptableHttpError`               | Requested resource is only capable of generating unacceptable content.     |
| 407       | `GlitchKitProxyAuthenticationRequiredHttpError` | Authentication with a proxy is required.                                   |
| 408       | `GlitchKitRequestTimeoutHttpError`              | The server timed out waiting for the request.                              |
| 409       | `GlitchKitConflictHttpError`                    | Request conflicts with current state of the resource.                      |
| 410       | `GlitchKitGoneHttpError`                        | The resource requested is no longer available.                             |
| 411       | `GlitchKitLengthRequiredHttpError`              | Content-Length header is missing.                                          |
| 412       | `GlitchKitPreconditionFailedHttpError`          | Server does not meet preconditions in headers.                             |
| 413       | `GlitchKitPayloadTooLargeHttpError`             | The request is larger than the server is willing or able to process.       |
| 414       | `GlitchKitUriTooLongHttpError`                  | The URI provided was too long for the server to process.                   |
| 415       | `GlitchKitUnsupportedMediaTypeHttpError`        | Media type is not supported by the server.                                 |
| 416       | `GlitchKitRangeNotSatisfiableHttpError`         | Cannot fulfill range specified in the request.                             |
| 417       | `GlitchKitExpectationFailedHttpError`           | Expectation in the request could not be met.                               |
| 418       | `GlitchKitImATeapotHttpError`                   | Easter egg — server refuses to brew coffee in a teapot.                    |
| 421       | `GlitchKitMisdirectedRequestHttpError`          | Request was directed at a server not able to produce a response.           |
| 422       | `GlitchKitUnprocessableEntityHttpError`         | Server understands request but cannot process it.                          |
| 423       | `GlitchKitLockedHttpError`                      | The resource is locked.                                                    |
| 424       | `GlitchKitFailedDependencyHttpError`            | The request failed due to dependency on another request.                   |
| 425       | `GlitchKitTooEarlyHttpError`                    | The server is unwilling to process a request that's likely to be replayed. |
| 426       | `GlitchKitUpgradeRequiredHttpError`             | Client should switch to a different protocol.                              |
| 428       | `GlitchKitPreconditionRequiredHttpError`        | Origin server requires the request to be conditional.                      |
| 429       | `GlitchKitTooManyRequestsHttpError`             | The user has sent too many requests in a given time.                       |
| 431       | `GlitchKitRequestHeaderFieldsTooLargeHttpError` | Request headers too large for the server to process.                       |
| 451       | `GlitchKitUnavailableForLegalReasonsHttpError`  | Access to the resource is denied for legal reasons.                        |

## 🛠️ 5xx — Server Errors

| HTTP Code | Error Class                                       | Description                                                                  |
| --------- | ------------------------------------------------- | ---------------------------------------------------------------------------- |
| 500       | `GlitchKitInternalServerErrorHttpError`           | The server encountered an unexpected condition.                              |
| 501       | `GlitchKitNotImplementedHttpError`                | The server does not support the functionality required.                      |
| 502       | `GlitchKitBadGatewayHttpError`                    | The server received an invalid response from an upstream server.             |
| 503       | `GlitchKitServiceUnavailableHttpError`            | The server is currently unavailable.                                         |
| 504       | `GlitchKitGatewayTimeoutHttpError`                | The server did not receive a timely response from an upstream server.        |
| 505       | `GlitchKitHttpVersionNotSupportedHttpError`       | The server does not support the HTTP version used in the request.            |
| 506       | `GlitchKitVariantAlsoNegotiatesHttpError`         | Server has internal configuration error.                                     |
| 507       | `GlitchKitInsufficientStorageHttpError`           | Server is unable to store the representation needed to complete the request. |
| 508       | `GlitchKitLoopDetectedHttpError`                  | Server detected an infinite loop.                                            |
| 510       | `GlitchKitNotExtendedHttpError`                   | Further extensions to the request are required.                              |
| 511       | `GlitchKitNetworkAuthenticationRequiredHttpError` | Client must authenticate to gain network access.                             |
