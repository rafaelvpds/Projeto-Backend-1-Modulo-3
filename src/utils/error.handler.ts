export type InvalidIdError = {
    invalidIdError: {
        message: string;
        id: string;
    };
};

export function invalidIdError(id: string): InvalidIdError {
    return {
        invalidIdError: {
            message: "invalid id on request, please submit a ObjectId",
            id: id,
        },
    };
}

export type CustomErrors = InvalidIdError;