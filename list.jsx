export default function List1() {
    const items = ['apple', 'banana', 'cherry']

    return <>
        <ul>
            {items.map((item, value) => <li key={value}>{item}</li>)
            }</ul>

    </>
}