export default function SimpleForm() {

    const formsubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.mail.value);

    }
    return <>
        <form onSubmit={formsubmit}>
            <input type="text" name="name" placeholder=" enter name" />
            <input type="text" name="mail" placeholder=" enter mail" />
            <button type="submit">submit</button>
        </form>
    </>
}