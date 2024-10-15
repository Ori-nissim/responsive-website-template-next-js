export default function DropDownMenu() {
    return <div className="absolute top-16 right-0 w-48 bg-white shadow-md sm:hidden">
        <ul className="flex flex-col space-y-2 p-4">
            <li><a href="/">Home</a></li>
            <li><a href="/link1">link1</a></li>
            <li><a href="/link2">link2</a></li>
            <li><a href="/link3">link3</a></li>
        </ul>
    </div>
}