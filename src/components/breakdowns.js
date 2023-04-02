import { CheckIcon, WarningIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Card,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  list,
} from "@chakra-ui/react";
import React, { useState } from "react";

var totalTasks = 0;
var completeTasks = 0;

function CreateTasks(props) {
  return (
    <Box>
      <List spacing={3}>
        <Box>
          {Array(+Number(totalTasks))
            .fill("")
            .map((n, i) => {
              return (
                <ListItem>
                  <Button onClick={itemClicked} colorScheme="blue">
                    <ListIcon
                      as={props.complete === 0 ? CheckIcon : WarningIcon}
                      color={props.complete === 0 ? "green.500" : "yellow.500"}
                    />
                  </Button>
                  {totalTasks}
                </ListItem>
              );
            })}
        </Box>
      </List>
    </Box>
  );
}
const itemClicked = (e) => {
  e.preventDefault();
  completeTasks = 1;
};
export default function AssignmentBreakdown(props) {
  totalTasks = props.total;
  completeTasks = props.complete;

  return (
    <Box>
      <Heading>{props.assignmentName}</Heading>
      <Accordion>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontSize={"2xl"}
                fontWeight={"bold"}
              >
                CAL Essay Due 4/13
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <CircularProgress value={40} color="green.400">
              <CircularProgressLabel>40%</CircularProgressLabel>
            </CircularProgress>
            <List spacing={3}>
              <CreateTasks listCount={totalTasks} complete={completeTasks} />
              <ListItem>
                <ListIcon as={CheckIcon} color="green.500" />
                Outline
              </ListItem>
              <ListItem>
                <ListIcon as={CheckIcon} color="green.500" />
                Introduction
              </ListItem>
              <ListItem>
                <Button onClick={itemClicked}>
                  <ListIcon
                    as={completeTasks === 0 ? CheckIcon : WarningIcon}
                    color="yellow.500"
                  />
                </Button>
                Body Parargaphs One and Two
              </ListItem>

              {/* You can also use custom icons from react-icons */}
              <ListItem>
                <ListIcon as={WarningIcon} color="yellow.500" />
                Last Body Paragraph and Conclusion
              </ListItem>
              <ListItem>
                <ListIcon as={WarningIcon} color="yellow.500" />
                Revision and Submit
              </ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
}
