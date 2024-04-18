export default class WebService {
    SERVER = "http://localhost:5155/api";

    async getAllOffices() {
        const response = await fetch(`${this.SERVER}/office`);

        if (!response.ok) {
            throw new Error('Failed to get all the offices');
        }
        return response.json();
    }

    async getOfficeByName(name){
        const response = await fetch(`${this.SERVER}/office/name/${name}`);

        if (!response.ok) {
            throw new Error(`Failed to get the office ${name}`);
        }
        return response.json();
    }

    async getAvailableCars(officeId, pickupDate, returnDate){
        try {
            const response = await fetch(`${this.SERVER}/Car/available-cars?officeId=${officeId}&pickupDate=${pickupDate}&returnDate=${returnDate}`);
    
            if (!response.ok) {
                throw new Error(`Failed to get available cars`);
            }
    
            return response.json();
        } catch (error) {
            console.error('Error getting available cars:', error);
        }
    }
}