export function isValid(number) {
    return !isNaN(number) && number > 0 && isFinite(number);
}