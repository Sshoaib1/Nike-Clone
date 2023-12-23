import { Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


export const PlaceOrderBtn = () => {
    const navigate= useNavigate();
    const handleOrderPlacement = () => {
        // Perform any logic related to placing the order here
        alert("Your order has succesfully placed")
        // Navigate to the checkout page
        navigate("/");
    };

    return (
        <>
            <Input
                as={'button'}
                type={'submit'}
                h={"60px"}
                bg={'#edf2f7'}
                color={'black'}
                border={`1px solid #cecdce`}
                borderRadius={"50px"}
                w={"100%"}
                fontSize={"17px"}
                mt={'20px'}
                _hover={{ borderColor: 'black' }}
                onClick={handleOrderPlacement}
            >
                Place Order
            </Input>
        </>
    );
};
