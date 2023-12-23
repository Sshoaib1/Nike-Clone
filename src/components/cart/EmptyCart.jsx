import { Box, Button, Heading, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export const EmptyCart = () => {

  const navigate = useNavigate();
  return (
    <Box>
      <Image src="/bhola.jpg" width={"600px"}/>
      <Heading mt={1}>Currently Cart Is Empty</Heading>
      <Button
        mt={4}
        mb={"20px"}
        borderColor={'#cecdce'}
        h={"40px"}
        bgColor={"white"}
        color={"black"}
        border={`1px solid #cecdce`}
        borderRadius={"10px"}
        fontSize={"15px"}
        _hover={{ borderColor: "black" }}
        onClick={() => navigate("/men")}
      >
        Explore
      </Button>
    </Box>
  );
};
