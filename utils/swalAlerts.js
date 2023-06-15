import Swal from "sweetalert2";
import { storeToRefs } from "pinia";
import useGlobalStore from "../stores/globalStore";

const store = useGlobalStore();
const { modalType, carDataToBeEdited } = storeToRefs(store);
const { deleteCarDetails } = store;

function swalUpdates() {
    const swalAddMsg = "Created Data";
    const swalEditMsg = "Edited Data";
    Swal.fire({
        title: `${modalType.value === "add" ? swalAddMsg : swalEditMsg}`,
        html: `
            <div>
            <img src="${carDataToBeEdited.value.image}" alt="CarImage" class="swal-img" style="width:300px" />
            <h3>Car: ${carDataToBeEdited.value.name}</h3>
            <p>Price: ${carDataToBeEdited.value.price}</p>
            <p>Details: ${carDataToBeEdited.value.details}</p>
            </div>
            `,
        showCloseButton: false,
        showConfirmButton: true,
    });
}

function swalDeleteCar(id, carName) {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#28a745",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
        if (result.isConfirmed) {
            const response = await deleteCarDetails(id);
            if (response.status === 204) {
                Swal.fire(
                    `Deleted ${carName}!`,
                    `Your Car has been deleted.`,
                    "success"
                );
            }
        }
    });
}
export { swalDeleteCar, swalUpdates };
