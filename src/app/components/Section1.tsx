import Card from "./Card"
export default function StockQuotes() {
    
    return <div > 
    <h1 className="font-bold "> Section 1</h1>
    <ul className="flex flex-col gap-1">
        <li>
            <Card>
                <h3>Item 1</h3>
            </Card>
            
        </li>
        <li>
            <Card>
                <h3>Item 2</h3>
            </Card>
            
        </li>
        <li>
            <Card>
                <h3>Item 3</h3>
            </Card>
            
        </li>
    </ul>
</div>
}