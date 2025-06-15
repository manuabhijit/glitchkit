import IGlitchKitMetadataJson from './interfaces/GlitchKitMetadata.interface';

export class GlitchKitMetadata {
  private _info: Object | undefined;
  private _context: Object | undefined;
  private _tags: string[] = [];
  private _category: string | undefined;
  private _cause: string | undefined;

  get info(): Object | undefined {
    return this._info;
  }

  set info(data: Object) {
    this._info = data;
  }

  withInfo(data: Object): this {
    this.info = data;
    return this;
  }

  get context(): Object | undefined {
    return this._context;
  }

  set context(ctx: Object) {
    this._context = ctx;
  }

  withContext(ctx: Object): this {
    this.context = ctx;
    return this;
  }

  get tags(): string[] {
    return this._tags;
  }

  set tags(tags: string[]) {
    this._tags = tags;
  }

  withTags(tags: string[]): this {
    this.tags = tags;
    return this;
  }

  get category(): string | undefined {
    return this._category;
  }

  set category(category: string | undefined) {
    this._category = category;
  }

  withCategory(category: string): this {
    this.category = category;
    return this;
  }

  get cause(): string | undefined {
    return this._cause;
  }

  set cause(cause: string | undefined) {
    this._cause = cause;
  }

  withCause(cause: string): this {
    this.cause = cause;
    return this;
  }

  toJson(): IGlitchKitMetadataJson {
    const glitchkitMetadata: IGlitchKitMetadataJson = {
      info: this._info,
      context: this._context,
      tags: this._tags,
      category: this._category,
      cause: this._cause,
    };

    return glitchkitMetadata;
  }
}

export default GlitchKitMetadata;
