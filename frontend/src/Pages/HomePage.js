import React, {useEffect} from "react";
import {
  Box,
  Container,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import Login from '../components/Authentication/Login'
import Signup from '../components/Authentication/Signup'
import { useHistory } from "react-router-use-history";

const HomePage = () => {

  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('userInfor'));
    if(user) {
      history.push('/chats')
    }
  }, [history])

  return (
    <Container maxW="xl" centerContent>
      <Box
        display='flex'
        justifyContent="center"
        p={2}
        bg={"white"}  
        w="100%"
        m="30px 0 0 0"
        borderRadius="lg"
        borderWidth="1px">
        <Text fontSize="3xl" fontFamily="Roboto">
          TALK TO ME
        </Text>
      </Box>
      <Box
        bg={"white"}
        w="100%"
        p="4"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px">
        <Tabs>
          <TabList mb='1em'>
            <Tab width='50%'>Đăng nhập</Tab>
            <Tab width='50%'>Đăng ký</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login/>
            </TabPanel>
            <TabPanel>
              <Signup/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default HomePage;
