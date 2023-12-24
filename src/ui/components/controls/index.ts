export enum validationStatus{
    DEFAULT,
    ERROR,
    WARNING,
    SUCCESSFULLY
}

export const getValidationClasses = (valid: validationStatus): string => {
    let result: string = '';
    
    switch (valid) {
        case validationStatus.DEFAULT:
            break;
        case validationStatus.ERROR:
            result = 'validationError';
            break;
        case validationStatus.WARNING:
            result = 'validationWarning';
            break;
        case validationStatus.SUCCESSFULLY:
            result = 'validationSuccessfully';
            break;
    }

    return result;
}