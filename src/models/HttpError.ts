export class HttpError extends Error {
  errorCode = null;

  constructor(message: string, errorCode: number) {
    super(message);
    this.errorCode = errorCode;
  }
}
