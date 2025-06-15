import GlitchKitBaseDatabaseError from '../../baseGlitchKit/GlitchKitBaseDatabaseError';
import GlitchKitBaseError from '../../baseGlitchKit/GlitchKitBaseError';
import GlitchKitDatabase from '../../utility/GlitchKitDatabase';
import GlitchKitMetadata from '../../utility/GlitchKitMetadata';
import GlitchKitTraceability from '../../utility/GlitchKitTraceability';
import { default as GlitchKitPlanLimitExceededError } from './../cloud/GlitchKitPlanLimitExceededError';
import { default as GlitchKitQuotaExceededError } from './../cloud/GlitchKitQuotaExceededError';
import { default as GlitchKitReplicaLagError } from './../cloud/GlitchKitReplicaLagError';

import { default as GlitchKitAuthenticationFailedError } from './../connectionErrors/GlitchKitAuthenticationFailedError';
import { default as GlitchKitConnectionRefusedError } from './../connectionErrors/GlitchKitConnectionRefusedError';
import { default as GlitchKitSSLRequiredError } from './../connectionErrors/GlitchKitSSLRequiredError';
import { default as GlitchKitTimeoutError } from './../connectionErrors/GlitchKitTimeoutError';
import { default as GlitchKitTooManyConnectionsError } from './../connectionErrors/GlitchKitTooManyConnectionsError';

import { default as GlitchKitCheckConstraintError } from './../constraintViolations/GlitchKitCheckConstraintError';
import { default as GlitchKitForeignKeyViolationError } from './../constraintViolations/GlitchKitForeignKeyViolationError';
import { default as GlitchKitNotNullConstraintError } from './../constraintViolations/GlitchKitNotNullConstraintError';
import { default as GlitchKitUniqueConstraintError } from './../constraintViolations/GlitchKitUniqueConstraintError';

import { default as GlitchKitDataTruncationError } from './../dataErrors/GlitchKitDataTruncationError';
import { default as GlitchKitInvalidEnumValueError } from './../dataErrors/GlitchKitInvalidEnumValueError';
import { default as GlitchKitOverflowError } from './../dataErrors/GlitchKitOverflowError';
import { default as GlitchKitUnderflowError } from './../dataErrors/GlitchKitUnderflowError';

import { default as GlitchKitDriverError } from './../ormError/GlitchKitDriverError';
import { default as GlitchKitMigrationError } from './../ormError/GlitchKitMigrationError';
import { default as GlitchKitModelSyncError } from './../ormError/GlitchKitModelSyncError';

import { default as GlitchKitInvalidColumnError } from './../queryErrors/GlitchKitInvalidColumnError';
import { default as GlitchKitInvalidDataTypeError } from './../queryErrors/GlitchKitInvalidDataTypeError';
import { default as GlitchKitInvalidTableError } from './../queryErrors/GlitchKitInvalidTableError';
import { default as GlitchKitQueryTimeoutError } from './../queryErrors/GlitchKitQueryTimeoutError';
import { default as GlitchKitSyntaxError } from './../queryErrors/GlitchKitSyntaxError';

import { default as GlitchKitDeadlockDetectedError } from './../transactionsErrors/GlitchKitDeadlockDetectedError';
import { default as GlitchKitLockWaitTimeoutError } from './../transactionsErrors/GlitchKitLockWaitTimeoutError';
import { default as GlitchKitSerializationFailureError } from './../transactionsErrors/GlitchKitSerializationFailureError';
import { default as GlitchKitTransactionAbortedError } from './../transactionsErrors/GlitchKitTransactionAbortedError';

describe('HttpError Generics', () => {
  const ErrorClasses = [
    // Cloud Errors
    GlitchKitPlanLimitExceededError,
    GlitchKitQuotaExceededError,
    GlitchKitReplicaLagError,

    // Connection Errors
    GlitchKitAuthenticationFailedError,
    GlitchKitConnectionRefusedError,
    GlitchKitSSLRequiredError,
    GlitchKitTimeoutError,
    GlitchKitTooManyConnectionsError,

    // Constraint Violations
    GlitchKitCheckConstraintError,
    GlitchKitForeignKeyViolationError,
    GlitchKitNotNullConstraintError,
    GlitchKitUniqueConstraintError,

    // Data Errors
    GlitchKitDataTruncationError,
    GlitchKitInvalidEnumValueError,
    GlitchKitOverflowError,
    GlitchKitUnderflowError,

    // ORM Errors
    GlitchKitDriverError,
    GlitchKitMigrationError,
    GlitchKitModelSyncError,

    // Query Errors
    GlitchKitInvalidColumnError,
    GlitchKitInvalidDataTypeError,
    GlitchKitInvalidTableError,
    GlitchKitQueryTimeoutError,
    GlitchKitSyntaxError,

    // Transactions Errors
    GlitchKitDeadlockDetectedError,
    GlitchKitLockWaitTimeoutError,
    GlitchKitSerializationFailureError,
    GlitchKitTransactionAbortedError,
  ];

  const DUMMY_ERROR_CODE = 1001;
  const DUMMY_ERROR_MESSAGE = 'Test Error message';

  const DUMMY_DATABASE_NAME = 'testDatabase';
  const DUMMY_DATABASE_URL = 'http://localhost:5432/testDatabase';
  const DUMMY_DATABASE_TYPE = 'postgresql';

  it('should be instance of correct BaseError', () => {
    for (const ErrorClass of ErrorClasses) {
      const errorInstance: GlitchKitBaseDatabaseError = new ErrorClass(DUMMY_ERROR_MESSAGE, DUMMY_ERROR_CODE);

      expect(errorInstance).toBeInstanceOf(ErrorClass);
      expect(ErrorClass.isInstance(errorInstance)).toBe(true);
      expect(GlitchKitBaseError.isInstance(errorInstance)).toBe(true);
      expect(GlitchKitBaseDatabaseError.isInstance(errorInstance)).toBe(true);

      try {
        errorInstance.raise();
      } catch (e) {
        expect(e).toBeInstanceOf(ErrorClass);
      }
    }
  });

  it('should be instance of correct initialization', () => {
    //  private _info: Object | undefined;
    // private _context: Object | undefined;
    // private _tags: string[] = [];
    // private _category: string | undefined;
    // private _cause: string | undefined;

    for (const ErrorClass of ErrorClasses) {
      const errorInstance: GlitchKitBaseDatabaseError = new ErrorClass(DUMMY_ERROR_MESSAGE, DUMMY_ERROR_CODE);

      expect(errorInstance.message).toBe(DUMMY_ERROR_MESSAGE);
      expect(errorInstance.errorCode).toBe(DUMMY_ERROR_CODE);

      const errorJson = errorInstance.toJSON();
      expect(errorJson.message).toBe(DUMMY_ERROR_MESSAGE);
    }
  });

  it('should assign collect attribute values 1', () => {
    const glitchKitMetadata: GlitchKitMetadata = new GlitchKitMetadata();
    glitchKitMetadata.info = { key: 'value' };
    glitchKitMetadata.context = {};
    glitchKitMetadata.tags = ['tag1', 'tag2'];
    glitchKitMetadata.category = 'testCategory';
    glitchKitMetadata.cause = 'testCause';

    const glitchKitTraceability: GlitchKitTraceability = new GlitchKitTraceability();
    glitchKitTraceability.operation = 'testOperation';
    glitchKitTraceability.reported = true;
    glitchKitTraceability.source = 'testSource';
    glitchKitTraceability.traceId = 'testTraceId';

    const glitchKitDatabase: GlitchKitDatabase = new GlitchKitDatabase();
    glitchKitDatabase.databaseName = DUMMY_DATABASE_NAME;
    glitchKitDatabase.databaseUrl = DUMMY_DATABASE_URL;
    glitchKitDatabase.databaseType = DUMMY_DATABASE_TYPE;

    for (const ErrorClass of ErrorClasses) {
      const errorInstance: GlitchKitBaseDatabaseError = new ErrorClass(DUMMY_ERROR_MESSAGE, DUMMY_ERROR_CODE);
      errorInstance.database = glitchKitDatabase;
      errorInstance.metadata = glitchKitMetadata;
      errorInstance.traceability = glitchKitTraceability;

      errorInstance.errorCode = DUMMY_ERROR_CODE;
      expect(errorInstance.errorCode).toBe(DUMMY_ERROR_CODE);

      errorInstance.durationMs = 500;
      expect(errorInstance.durationMs).toBe(500);

      expect(errorInstance.timestamp).toBeInstanceOf(Date);

      const errorJson = errorInstance.toJSON();
      expect(errorJson.message).toBe(DUMMY_ERROR_MESSAGE);

      expect(errorInstance.database.databaseName).toBe(DUMMY_DATABASE_NAME);
      expect(errorInstance.database.databaseUrl).toBe(DUMMY_DATABASE_URL);
      expect(errorInstance.database.databaseType).toBe(DUMMY_DATABASE_TYPE);
    }
  });

  it('should assign collect attribute values 2', () => {
    const glitchKitMetadata: GlitchKitMetadata = new GlitchKitMetadata();
    glitchKitMetadata.withInfo({ key: 'value' });
    glitchKitMetadata.withContext({});
    glitchKitMetadata.withTags(['tag1', 'tag2']);
    glitchKitMetadata.withCategory('testCategory');
    glitchKitMetadata.withCause('testCause');

    const glitchKitTraceability: GlitchKitTraceability = new GlitchKitTraceability();
    glitchKitTraceability.withOperation('testOperation');
    glitchKitTraceability.withReported(true);
    glitchKitTraceability.withSource('testSource');
    glitchKitTraceability.withTraceId('testTraceId');

    const glitchKitDatabase: GlitchKitDatabase = new GlitchKitDatabase();
    glitchKitDatabase.withDatabaseName('testDatabase');
    glitchKitDatabase.withDatabaseUrl('http://localhost:5432/testDatabase');
    glitchKitDatabase.withDatabaseType('postgresql');

    for (const ErrorClass of ErrorClasses) {
      const errorInstance: GlitchKitBaseDatabaseError = new ErrorClass(DUMMY_ERROR_MESSAGE, DUMMY_ERROR_CODE);
      errorInstance.withDatabase(glitchKitDatabase);
      errorInstance.withMetadata(glitchKitMetadata);
      errorInstance.withTraceability(glitchKitTraceability);

      errorInstance.withErrorCode(DUMMY_ERROR_CODE);
      expect(errorInstance.errorCode).toBe(DUMMY_ERROR_CODE);

      errorInstance.withDurationMs(500);
      expect(errorInstance.durationMs).toBe(500);

      expect(errorInstance.timestamp).toBeInstanceOf(Date);

      const errorJson = errorInstance.toJSON();
      expect(errorJson.message).toBe(DUMMY_ERROR_MESSAGE);

      expect(errorInstance.database.databaseName).toBe(DUMMY_DATABASE_NAME);
      expect(errorInstance.database.databaseUrl).toBe(DUMMY_DATABASE_URL);
      expect(errorInstance.database.databaseType).toBe(DUMMY_DATABASE_TYPE);
    }
  });
});
