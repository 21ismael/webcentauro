export default function calculatePrice(pickupDate, returnDate, dailyRate) {

    const ONE_DAY = 24 * 60 * 60 * 1000; 
    const startDate = new Date(pickupDate);
    const endDate = new Date(returnDate);

    // Calcula la diferencia en días entre las fechas de recogida y devolución
    const differenceInDays = Math.round(Math.abs((startDate - endDate) / ONE_DAY));

    const totalCost = differenceInDays * dailyRate;

    let carPrice = {
        days: differenceInDays, 
        price: totalCost
    }

    return carPrice;
}