export function dateToBr(date: string): string {
    return date.split('-').reverse().join('/')
}