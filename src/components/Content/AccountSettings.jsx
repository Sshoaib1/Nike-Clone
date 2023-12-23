import { Box, FormControl, FormLabel, Grid, Input, Select } from '@chakra-ui/react'
import { useSelector } from 'react-redux';
import Actions from './Actions';

function AccountSettings() {
  const user = useSelector((state) => state.auth.user);
  return (
    <Box as="main">
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={6}
      >
        <FormControl id="firstName">
          <FormLabel>First Name</FormLabel>
          <Input focusBorderColor="brand.blue" type="text" placeholder={user.firstName ? user.firstName : "Enter Your First Name"} readOnly />
        </FormControl>
        <FormControl id="lastName">
          <FormLabel>Last Name</FormLabel>
          <Input focusBorderColor="brand.blue" type="text" placeholder={user.lastName ? user.lastName : "Enter Your Last Name"} readOnly />
        </FormControl>
        <FormControl id="phoneNumber">
          <FormLabel>Phone Number</FormLabel>
          <Input
            focusBorderColor="brand.blue"
            type="tel"
            placeholder="+92 XXXXXXXXXX"
            readOnly
          />
        </FormControl>
        <FormControl id="emailAddress">
          <FormLabel>Email Address</FormLabel>
          <Input
            focusBorderColor="brand.blue"
            type="email"
            placeholder={user.email ? user.email : "Enter Your Email"}
            readOnly
          />
        </FormControl>
        <FormControl id="city">
          <FormLabel>City</FormLabel>
          <Select focusBorderColor="brand.blue" placeholder="Select city" isReadOnly={true}>
            <option value="pune" selected>Lahore</option>
            <option value="mumbai">Karachi</option>
            <option value="hyderabad">Islamabad</option>
            <option value="bangalore">Peshawar</option>
            <option value="delhi">Faisalabad</option>
            <option value="chennai">Multan</option>
          </Select>
        </FormControl>
        <FormControl id="country">
          <FormLabel>Country</FormLabel>
          <Select focusBorderColor="brand.blue" placeholder="Select country" isReadOnly={true}>
            <option value="Canada" selected>
              Canada
            </option>
            <option value="Germany" selected>
              Germany
            </option>
            <option value="Pakistan" selected>
              Pakistan
            </option>
          </Select>
        </FormControl>
      </Grid>
      <Actions />
    </Box>
  )
}

export default AccountSettings
