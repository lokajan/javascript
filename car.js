import Apple from "./Apple";



function Car(props) {
    const { Carimfo } = props;
    const { brand, color } = Carimfo;


    const text = `im a ${color} color ${brand} car`;

    return (
        <>
            <h2>hi im a car</h2>
            <h2>{text}</h2>

        </>
    );
}
export default Car;