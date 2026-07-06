export class NotFoundError extends Error {
  constructor(message: string) {
    super(message , {cause : 404});
    this.name = "NotFoundError";
  }
}

export class UnauthorizedError extends Error {
  constructor(message: string) {
    super(message , {cause : 401});
    this.name = "UnauthorizedError";
  }
}

export class BadRequestError extends Error {
  constructor(message: string) {
    super(message , {cause : 400});
    this.name = "BadRequestError";
  }
}

export class conflictError extends Error {
  constructor(message: string) {
    super(message , {cause : 409});
    this.name = "conflictError";
  }
}

export class InternalServerError extends Error {
  constructor(message: string) {
    super(message , {cause : 500});
    this.name = "InternalServerError";
  }
}
