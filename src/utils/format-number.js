export function fPercent(inputValue) {

    if (!inputValue) return '';

    const number = Number(inputValue) / 100;

    const fm = new Intl.NumberFormat('en-US', {
        style: 'percent',
        minimumFractionDigits: 0,
        maximumFractionDigits: 1,
    }).format(number);

    return fm;
}