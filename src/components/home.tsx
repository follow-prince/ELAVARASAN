import * as React from "react";
import {
  Flex,
  Avatar,
  Box,
  Text,
  Badge,
  Stack,
  Link,
  UnorderedList,
  ListItem,
  useColorModeValue,
  color
} from "@chakra-ui/react";
import { Link as NavLink } from "react-router-dom";
import { MotionBox, MotionFlex } from "./motion";
import Header from "./header";
import { projectsList } from "data/projects-list";
import "style/style.css";
import UserIcon from "assets/images/user_icon.png";
import About from "./about";
import TechStack from "./tech-stack";
import Certificates from "./repositories-list.tsx";
import ButttonResume from "./ButtonResume.tsx";



const ANIMATION_DURATION = 0.5;
const ORANGE = "#ff9400";

const Home = () => {
  return (
    <Flex direction="column" align="center">
      <Flex direction={["column", "column", "row"]}>
        <MotionBox
          opacity="0"
          initial={{
            translateX: -150,
            opacity: 0
          }}
          animate={{
            translateX: 0,
            opacity: 1,
            transition: {
              duration: ANIMATION_DURATION
            }
          }}
          m="auto"
          mb={[16, 16, "auto"]}
        >
         <Avatar
      size={"3xl"}
      style={{ border: "6px solid gray", boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)" }}
      src={UserIcon}
    />


        </MotionBox>
        <MotionFlex
          ml={["auto", "auto", 16]}
          m={["auto", "initial"]}
          w={["90%", "85%", "80%"]}
          maxW="800px"
          opacity="0"
          justify="center"
          direction="column"
          initial={{
            opacity: 0,
            translateX: 150
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            transition: {
              duration: ANIMATION_DURATION
            }
          }}
        >
          <Header underlineColor={ORANGE} emoji="👋" mt={0} className="face">
            Hey!
          </Header>
          <Box as="h4" fontSize="1xl" fontWeight="200" textAlign="left">
            My name is{" "}
           
<Box as="strong" fontWeight="600" >
              ELAVARASAN
            </Box>

              {" "}
            and I&apos;m a{" "}
            <Box as="span" whiteSpace="nowrap">
              Full Stack Developer and
            </Box>{" "}
            <Box as="span" whiteSpace="nowrap">
              open-source enthusiast &nbsp;
            </Box>
            from{" "}
            <Box as="span" whiteSpace="nowrap">
              India..🇮🇳 
            </Box>
          </Box>
          <Box as="h4" fontSize="1xl" fontWeight="200" mt={5} textAlign="left">
       I am a web development beginner studying MCA. Even though I have a B.Com degree, web development is my true passion, and I'm determined to make it my career. I love learning and coming up with new ideas, and I've gained valuable open-source skills from spending a lot of time on the internet.

          </Box>


        </MotionFlex>
      </Flex>
      <MotionBox
        w="100%"
        opacity="0"
        initial={{
          translateY: 80
        }}
        animate={{
          translateY: 0,
          opacity: 1,
          transition: {
            delay: ANIMATION_DURATION - 0.1,
            duration: ANIMATION_DURATION
          }
        }}
      >
        <Box mt={10}>
          <Stack
            mb={10}
            mx={[0, 0, 10]}
            padding={4}
            align="start"
            borderLeft="4px solid"
            borderColor={"#53c8c4"}
            color={"whatsapp"}
            _hover={{ shadow: "lg" }}
            backgroundColor={useColorModeValue("gray.100", "#1e2533")}
            rounded="sm"
            fontSize="md"
          >
            <Text textAlign="center" color="#53c8c4" fontWeight="bold">
              Highlights
            </Text>
            <UnorderedList textAlign="left" paddingLeft={5} m={0}>
            <ListItem>
              

                  <Link as={NavLink} to="/open-source">
                  Certificates
                  <Badge ml="1" colorScheme="green">
                    New
                  </Badge>

                </Link>
              </ListItem>
              <ListItem>
                <Link as={NavLink} to="/story-timeline">
                  Story page
                </Link>
              </ListItem>
              <ListItem>
                <Link as={NavLink} to="/tech-stack">
                  Tech Stack
                </Link>
              </ListItem>
            </UnorderedList>

          </Stack>




<About />
            <Certificates />
                <TechStack />
        </Box>
      </MotionBox>
    </Flex>
  );
};

export default Home;


