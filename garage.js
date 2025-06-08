import Car from "./car";
import Apple from "./Apple";
import { type } from "@testing-library/user-event/dist/type";






function Garage() {

    const brand = "ferrari";
    const color = "blue";

    const Carimfo = {
        brand: "ferrari",
        color: "red"
    }

    const Appleingo = { color: "red", type: "fuji" }

    return (
        <>
            <h1>welcome to garage</h1>
            <h2>hello....</h2>
            <Car Carimfo={Carimfo} />

            <Apple Appleingo={Appleingo}></Apple>
        </>
    );
}
export default Garage;