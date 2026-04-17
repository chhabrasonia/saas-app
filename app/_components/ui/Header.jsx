import Button from "./Button";

const Header = ({ data }) => {

    // if( !data ) return null;

    return (
        <header className="px-8 py-3 text-sm">
            <div className="flex items-center justify-between"> 
                <div>
                    <div>

                    </div>
                    <div className="pl-10">
                        <ul className="flex gap-6">
                            <li>Product</li>
                            <li>Product</li>
                            <li>Product</li>
                            <li>Product</li>
                            <li>Product</li>
                        </ul>
                    </div>
                </div>
                
                <div>
                    <Button>Book a Demo </Button>
                    <Button>Start Free Trial </Button>
                </div>
            </div>
        </header>
    )
}

export default Header