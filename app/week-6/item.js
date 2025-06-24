export default function Item(props) {
    return(
        <div className="grid">
            <div className=" grid bg-yellow-300 m-5 p-2 w-150 rounded-4xl font-bold shadow-lg border-blue-700 border-4">
                <li className="list-none grid place-items-center">
                    <ul className="text-3xl">{props.iName}</ul>
                    <ul>Quantity: {props.iQuantity}</ul>
                    <ul>Category: {props.iCategory}</ul>
                </li>
            </div>
        </div>
    );
}