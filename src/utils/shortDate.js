export default function shortDate(date) {
    if (!(date instanceof Date)) {
        date = new Date(date);
    }

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');

    return `${day}-${month}`;
}
