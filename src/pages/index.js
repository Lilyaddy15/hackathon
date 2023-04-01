import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  ChakraProvider,
  Flex,
  HStack,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  SimpleGrid,
  Spacer,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

import { useRouter } from "next/router";
import NavBar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

function ToDoCards(props) {
  return (
    <Card margin={10} textAlign={"center"} bg="#E3DFFD">
      <CardHeader>
        <Heading>{props.subject}</Heading>
        <Heading size={"md"}>Due {props.due}</Heading>
      </CardHeader>
      <CardBody textAlign={"center"}>
        <Text>{props.assigned}</Text>
        <Text>{props.details}</Text>
      </CardBody>
    </Card>
  );
}

function AchievementBadges(props) {
  return (
    <Card margin={5} textAlign={"center"}>
      <CardHeader>
        <Heading>{props.achievement}</Heading>
        <Heading size={"md"}>{props.description}</Heading>
      </CardHeader>
      <CardBody textAlign={"center"}>
        <Text>{props.progress}</Text>
        <Text>{props.complete}</Text>
      </CardBody>
    </Card>
  );
}

export default function Home() {
  let home = true;
  let assign = false;
  return (
    <>
      <Head>
        <title>Split || Dashboard</title>
        <meta name="description" content="Hello" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar page="dash" />
        <Box borderWidth={"2px"} margin={5} borderRadius={"lg"}>
          <Heading margin={"5"} textAlign={"center"} size={"2xl"}>
            To Do Today
          </Heading>
          <Flex alignContent={"center"} justifyContent={"space-evenly"}>
            <ToDoCards
              subject="Calculus 1"
              due="Monday 9:00 AM"
              assigned="SSP Quiz"
              details="Chapter 3"
            />
            <ToDoCards
              subject="Mechanics"
              due="Monday 11:59 PM"
              assigned="15 problems"
              details="Chapter 7"
            />
            <ToDoCards
              subject="English"
              due="Monday 3:00 pm"
              assigned="To Kill a Mockingbird"
              details="Chapter 3"
            />
          </Flex>
        </Box>
        <Box borderWidth={"2px"} margin={5} borderRadius={"lg"} bg="#DAF5FF">
          <Heading margin={"5"} textAlign={"center"} size={"2xl"}>
            Upcoming This Week
          </Heading>
          <Flex alignContent={"center"} justifyContent={"space-evenly"}>
            <ToDoCards
              subject="Statics "
              due="Tuesday 6:59 PM"
              assigned="12 problems"
              details="Chapter 7"
            />
            <ToDoCards
              subject="Math"
              due="Friday 11:59 PM"
              assigned="5 problems"
              details="Chapter 2"
            />
            <ToDoCards
              subject="English"
              due="Wednesday 5:00 PM"
              assigned="Research Essay"
              details="Rough Draft"
            />
            <ToDoCards
              subject="Mechanics"
              due="Wednesday 5:00 PM"
              assigned="Midterm 2"
              details="Exam"
            />
          </Flex>
        </Box>
        <Box borderWidth={"2px"} margin={5} borderRadius={"lg"} bg="#C9EEFF">
          <Heading margin={"5"} textAlign={"center"} size={"2xl"}>
            Achievements and Badges
          </Heading>
          <Flex alignContent={"center"} justifyContent={"space-evenly"}>
            <AchievementBadges
              achievement="Early Bird"
              description="Complete an assignment before noon"
              progress="0/1"
              complete="incomplete"
            />
            <AchievementBadges
              achievement="On A Roll"
              description="Complete 3 assignments in one go"
              progress="1/3"
              complete="incomplete"
            />
            <AchievementBadges
              achievement="Extra Credit"
              description="Complete an assignment for tomorrow"
              progress="0/1"
              complete="incomplete"
            />
          </Flex>
        </Box>
      </main>
    </>
  );
}
