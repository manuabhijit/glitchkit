import GlitchKitBaseError from '../../baseGlitchKit/GlitchKitBaseError';
import GlitchKitBaseHttpError from '../../baseGlitchKit/GlitchKitBaseHttpError';
import { default as GlitchKitBadGatewayHttpError } from '../GlitchKitBadGatewayHttpError'; // 502
import { default as GlitchKitBadRequestHttpError } from '../GlitchKitBadRequestHttpError'; // 400
import { default as GlitchKitConflictHttpError } from '../GlitchKitConflictHttpError'; // 409
import { default as GlitchKitExpectationFailedHttpError } from '../GlitchKitExpectationFailedHttpError'; // 417
import { default as GlitchKitFailedDependencyHttpError } from '../GlitchKitFailedDependencyHttpError'; // 424
import { default as GlitchKitForbiddenHttpError } from '../GlitchKitForbiddenHttpError'; // 403
import { default as GlitchKitGatewayTimeoutHttpError } from '../GlitchKitGatewayTimeoutHttpError'; // 504
import { default as GlitchKitGoneHttpError } from '../GlitchKitGoneHttpError'; // 410
import { default as GlitchKitHttpVersionNotSupportedHttpError } from '../GlitchKitHttpVersionNotSupportedHttpError'; // 505
import { default as GlitchKitImATeapotHttpError } from '../GlitchKitImATeapotHttpError'; // 418
import { default as GlitchKitInsufficientStorageHttpError } from '../GlitchKitInsufficientStorageHttpError'; // 507
import { default as GlitchKitInternalServerErrorHttpError } from '../GlitchKitInternalServerErrorHttpError'; // 500
import { default as GlitchKitInternalServerHttpError } from '../GlitchKitInternalServerHttpError'; // 500
import { default as GlitchKitLengthRequiredHttpError } from '../GlitchKitLengthRequiredHttpError'; // 411
import { default as GlitchKitLockedHttpError } from '../GlitchKitLockedHttpError'; // 423
import { default as GlitchKitLoopDetectedHttpError } from '../GlitchKitLoopDetectedHttpError'; // 508
import { default as GlitchKitMethodNotAllowedHttpError } from '../GlitchKitMethodNotAllowedHttpError'; // 405
import { default as GlitchKitMisdirectedRequestHttpError } from '../GlitchKitMisdirectedRequestHttpError'; // 421
import { default as GlitchKitNetworkAuthenticationRequiredHttpError } from '../GlitchKitNetworkAuthenticationRequiredHttpError'; // 511
import { default as GlitchKitNotAcceptableHttpError } from '../GlitchKitNotAcceptableHttpError'; // 406
import { default as GlitchKitNotExtendedHttpError } from '../GlitchKitNotExtendedHttpError'; // 510
import { default as GlitchKitNotFoundHttpError } from '../GlitchKitNotFoundHttpError'; // 404
import { default as GlitchKitNotImplementedHttpError } from '../GlitchKitNotImplementedHttpError'; // 501
import { default as GlitchKitPayloadTooLargeHttpError } from '../GlitchKitPayloadTooLargeHttpError'; // 413
import { default as GlitchKitPaymentRequiredHttpError } from '../GlitchKitPaymentRequiredHttpError'; // 402
import { default as GlitchKitPreconditionFailedHttpError } from '../GlitchKitPreconditionFailedHttpError'; // 412
import { default as GlitchKitPreconditionRequiredHttpError } from '../GlitchKitPreconditionRequiredHttpError'; // 428
import { default as GlitchKitProxyAuthenticationRequiredHttpError } from '../GlitchKitProxyAuthenticationRequiredHttpError'; // 407
import { default as GlitchKitRangeNotSatisfiableHttpError } from '../GlitchKitRangeNotSatisfiableHttpError'; // 416
import { default as GlitchKitRequestHeaderFieldsTooLargeHttpError } from '../GlitchKitRequestHeaderFieldsTooLargeHttpError'; // 431
import { default as GlitchKitRequestTimeoutHttpError } from '../GlitchKitRequestTimeoutHttpError'; // 408
import { default as GlitchKitServiceUnavailableHttpError } from '../GlitchKitServiceUnavailableHttpError'; // 503
import { default as GlitchKitTooEarlyHttpError } from '../GlitchKitTooEarlyHttpError'; // 425
import { default as GlitchKitTooManyRequestsHttpError } from '../GlitchKitTooManyRequestsHttpError'; // 429
import { default as GlitchKitUnauthorizedHttpError } from '../GlitchKitUnauthorizedHttpError'; // 401
import { default as GlitchKitUnavailableForLegalReasonsHttpError } from '../GlitchKitUnavailableForLegalReasonsHttpError'; // 451
import { default as GlitchKitUnprocessableEntityHttpError } from '../GlitchKitUnprocessableEntityHttpError'; // 422
import { default as GlitchKitUnsupportedMediaTypeHttpError } from '../GlitchKitUnsupportedMediaTypeHttpError'; // 415
import { default as GlitchKitUpgradeRequiredHttpError } from '../GlitchKitUpgradeRequiredHttpError'; // 426
import { default as GlitchKitUriTooLongHttpError } from '../GlitchKitUriTooLongHttpError'; // 414
import { default as GlitchKitVariantAlsoNegotiatesHttpError } from '../GlitchKitVariantAlsoNegotiatesHttpError'; // 506

describe('HttpError Generics', () => {
  const ErrorClasses = [
    GlitchKitBadRequestHttpError,
    GlitchKitConflictHttpError,
    GlitchKitExpectationFailedHttpError,
    GlitchKitFailedDependencyHttpError,
    GlitchKitForbiddenHttpError,
    GlitchKitGoneHttpError,
    GlitchKitImATeapotHttpError,
    GlitchKitLengthRequiredHttpError,
    GlitchKitLockedHttpError,
    GlitchKitMethodNotAllowedHttpError,
    GlitchKitMisdirectedRequestHttpError,
    GlitchKitNotAcceptableHttpError,
    GlitchKitNotFoundHttpError,
    GlitchKitPayloadTooLargeHttpError,
    GlitchKitPaymentRequiredHttpError,
    GlitchKitPreconditionFailedHttpError,
    GlitchKitPreconditionRequiredHttpError,
    GlitchKitProxyAuthenticationRequiredHttpError,
    GlitchKitRangeNotSatisfiableHttpError,
    GlitchKitRequestHeaderFieldsTooLargeHttpError,
    GlitchKitRequestTimeoutHttpError,
    GlitchKitTooEarlyHttpError,
    GlitchKitTooManyRequestsHttpError,
    GlitchKitUnauthorizedHttpError,
    GlitchKitUnavailableForLegalReasonsHttpError,
    GlitchKitUnprocessableEntityHttpError,
    GlitchKitUnsupportedMediaTypeHttpError,
    GlitchKitUpgradeRequiredHttpError,
    GlitchKitUriTooLongHttpError,
    GlitchKitBadGatewayHttpError,
    GlitchKitGatewayTimeoutHttpError,
    GlitchKitHttpVersionNotSupportedHttpError,
    GlitchKitInsufficientStorageHttpError,
    GlitchKitInternalServerErrorHttpError,
    GlitchKitLoopDetectedHttpError,
    GlitchKitNetworkAuthenticationRequiredHttpError,
    GlitchKitNotExtendedHttpError,
    GlitchKitNotImplementedHttpError,
    GlitchKitServiceUnavailableHttpError,
    GlitchKitVariantAlsoNegotiatesHttpError,
    GlitchKitInternalServerHttpError,
  ];

  const DUMMY_URL = 'https://example.com';
  const DUMMY_REQUEST = { method: 'GET', headers: { 'Content-Type': 'application/json' } };
  const DUMMY_RESPONSE = { status: 500, headers: { 'Content-Type': 'application/json' } };
  const DUMMY_ERROR_CODE = 1001;
  const DUMMY_ERROR_MESSAGE = 'Test Error message';

  it('should be instance of correct BaseError', () => {
    for (const ErrorClass of ErrorClasses) {
      const errorInstance: GlitchKitBaseHttpError = new ErrorClass(DUMMY_ERROR_MESSAGE, DUMMY_ERROR_CODE);

      expect(errorInstance).toBeInstanceOf(ErrorClass);
      expect(ErrorClass.isInstance(errorInstance)).toBe(true);
      expect(GlitchKitBaseError.isInstance(errorInstance)).toBe(true);
      expect(GlitchKitBaseHttpError.isInstance(errorInstance)).toBe(true);
    }
  });

  it('should be instance of correct initialization', () => {
    for (const ErrorClass of ErrorClasses) {
      const errorInstance: GlitchKitBaseHttpError = new ErrorClass(DUMMY_ERROR_MESSAGE, DUMMY_ERROR_CODE);

      expect(errorInstance.url).toBeUndefined();
      expect(errorInstance.request).toBeUndefined();
      expect(errorInstance.response).toBeUndefined();
      expect(errorInstance.statusCode).toBeGreaterThanOrEqual(399);
      expect(errorInstance.statusCode).toBeLessThanOrEqual(600);
    }
  });

  it('should assign collect attribute values 1', () => {
    for (const ErrorClass of ErrorClasses) {
      const errorInstance: GlitchKitBaseHttpError = new ErrorClass(DUMMY_ERROR_MESSAGE, DUMMY_ERROR_CODE);

      errorInstance.withUrl(DUMMY_URL);
      expect(errorInstance.url).toBe(DUMMY_URL);

      errorInstance.withRequest(DUMMY_REQUEST).withResponse(DUMMY_RESPONSE);
      expect(errorInstance.request).toEqual(DUMMY_REQUEST);
      expect(errorInstance.response).toEqual(DUMMY_RESPONSE);

      errorInstance.withStatusCode(900);
      expect(errorInstance.statusCode).toBe(900);

      const errorJson = errorInstance.toJSON();
      expect(errorJson.message).toBe(DUMMY_ERROR_MESSAGE);
    }
  });

  it('should assign collect attribute values 2', () => {
    for (const ErrorClass of ErrorClasses) {
      const errorInstance: GlitchKitBaseHttpError = new ErrorClass(DUMMY_ERROR_MESSAGE, DUMMY_ERROR_CODE);

      errorInstance.url = DUMMY_URL;
      expect(errorInstance.url).toBe(DUMMY_URL);

      errorInstance.request = DUMMY_REQUEST;
      expect(errorInstance.request).toEqual(DUMMY_REQUEST);

      errorInstance.response = DUMMY_RESPONSE;
      expect(errorInstance.response).toEqual(DUMMY_RESPONSE);

      errorInstance.statusCode = 900;
      expect(errorInstance.statusCode).toBe(900);

      const errorJson = errorInstance.toJSON();
      expect(errorJson.message).toBe(DUMMY_ERROR_MESSAGE);
    }
  });
});

// We recommend installing an extension to run jest tests.
