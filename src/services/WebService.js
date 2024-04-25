export default class WebService {
    SERVER = "http://localhost:5155/api";

    async getAllOffices() {
        const response = await fetch(`${this.SERVER}/office`);

        if (!response.ok) {
            throw new Error('Failed to get all the offices');
        }
        return response.json();
    }

    async getOfficeByName(name) {
        const response = await fetch(`${this.SERVER}/office/name/${name}`);

        if (!response.ok) {
            throw new Error(`Failed to get the office ${name}`);
        }
        return response.json();
    }

    async getAvailableCars(officeId, pickupDate, returnDate) {
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

    async addUser(formData) {
        try {
            const response = await fetch(`${this.SERVER}/user`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            console.log(response);
            if (!response.ok) {
                throw new Error('Failed to add user');
            }

            console.log("User added successfully");
            const apiResponse = await response.json();
            console.log(apiResponse);

            return apiResponse;
        } catch (error) {
            console.error('Error adding user:', error);
            throw error;
        }
    }

    async addReservation(postData) {
        try {
            const response = await fetch(`${this.SERVER}/reservation`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
            });

            if (!response.ok) {
                throw new Error('Failed to add reservation');
            }

            console.log("Reservation added successfully");
            return response;
        } catch (error) {
            console.error('Error adding reservation:', error);
            throw error;
        }
    }
}