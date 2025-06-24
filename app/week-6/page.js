import ItemList from "./item-list";
 
export default function ShoppingListPage() {
    return(
        <main className="grid">
            <h1 className="m-5 text-4xl font-semibold ">Shopping List</h1>
            <ItemList />
        </main>
    );
}
