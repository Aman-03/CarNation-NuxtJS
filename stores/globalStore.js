import { defineStore } from "pinia";
import axios from "axios";
const useGlobalStore = defineStore("global", {
    state: () => {
        return {
            carList: {},
            carDataToBeEdited: {},
            carDataById: {},
            isloading: false,
            modalType: "add",
            openModal: false,
            userDetails: {},
            isLoggedIn: false,
            baseAPI: "",
        };
    },
    getters: {
        getCarDetail() {
            return this.carList;
        },
        getIsLoading() {
            return this.isloading;
        },
        getCarDataById() {
            return this.carDataById;
        },
    },
    actions: {
        async getCarDetails() {
            this.isloading = true;
            try {
                let responseData = await axios.get(
                    `${this.baseAPI}/resource/cardata/`
                );
                this.carList = responseData.data.data;
                this.isloading = false;
                return responseData.data.data;
            } catch (e) {
                this.isloading = false;
                alert("Error in fetching data...");
            }
        },
        async getCarDetailById(id) {
            this.isloading = true;
            try {
                let responseData = await axios.get(
                    `${this.baseAPI}/resource/cardata/${id}`
                );
                this.carDataById = responseData.data;
                this.isloading = false;
                return responseData.data;
            } catch (e) {
                this.isloading = false;
                alert("Error in fetching data...");
                navigateTo("/");
            }
        },
        async putCarDetails(car) {
            try {
                let responseData = await axios.put(
                    `${this.baseAPI}/resource/cardata/${car.id}`,
                    {
                        ...car,
                    }
                );
                if (responseData.status == 200) {
                    this.getCarDetails();
                }
                return responseData;
            } catch (e) {
                alert("Error in updating data...", e);
            }
        },
        async postCarDetails(car) {
            try {
                let responseData = await axios.post(
                    `${this.baseAPI}/resource/cardata`,
                    {
                        ...car,
                    }
                );
                if (responseData.status == 201) {
                    this.getCarDetails();
                }
                return responseData;
            } catch (e) {
                alert("Error in adding data !...");
            }
        },

        async deleteCarDetails(id) {
            try {
                let responseData = await axios.delete(
                    `${this.baseAPI}/resource/cardata/${id}`
                );
                this.getCarDetails();
                return responseData;
            } catch (e) {
                alert("Error in deleting the data...");
            }
        },

        async getUserDetails() {
            try {
                let responseData = await axios.get(
                    `${this.baseAPI}/resource/users`
                );
                this.userDetails = responseData.data.data;
            } catch (e) {
                alert("Error in adding Login details...");
            }
        },

        async postLoginDetails(loginDetails) {
            try {
                let responseData = await axios.post(`${this.baseAPI}//login`, {
                    ...loginDetails,
                });
                return responseData;
            } catch (e) {
                alert("Error in adding Login details...");
            }
        },

        async postRegisterDetails(registerDetails) {
            try {
                let responseData = await axios.post(
                    `${this.baseAPI}/resource/users`,
                    {
                        ...registerDetails,
                    }
                );
                return responseData;
            } catch (e) {
                alert("Error in adding Registration details...");
            }
        },
    },
});
export default useGlobalStore;
