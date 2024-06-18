import Button from "./Button";

function Navbar(){
    return(
        <>
            <div className="navbar">
                <Button name="Red" color="red"/>
                <Button name="blue" color="blue"/>
                <Button name="Olive" color="Olive"/>
                <Button name="Orange" color="Orange"/>
                <Button name="Purple" color="Purple"/>
                <Button name="Green" color="Green"/>
            </div>
        </>
    )
}

export default Navbar;