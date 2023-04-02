import {
  Button,
  Flex,
  Heading,
  Spacer,
  Tab,
  TabList,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function NavBar(props) {
  const router = useRouter();
  const dashboardClick = (e) => {
    e.preventDefault();
    router.push("/");
  };
  const assignmentClick = (e) => {
    e.preventDefault();
    router.push("/assignments");
  };

  return (
    <Flex margin={5} justifyContent={"space-between"}>
      <Flex margin={5} alignItems={"center"}>
        <Heading>Split</Heading>
      </Flex>
      <Flex margin={5}>
        <Flex margin={5}>
          <Button
            onClick={dashboardClick}
            backgroundColor={props.page === "dash" ? "blue.100" : "white"}
          >
            Dashboard
          </Button>
        </Flex>
        <Flex margin={5}>
          <Button
            onClick={assignmentClick}
            backgroundColor={
              props.page === "assignments" ? "blue.100" : "white"
            }
          >
            Assignments
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
