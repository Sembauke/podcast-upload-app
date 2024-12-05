"use client";
import {
  Box,
  Button,
  Center,
  FileUploadRoot,
  Flex,
  Heading,
  Input,
  Spacer,
  Textarea,
} from "@chakra-ui/react";
import { Field } from "@/components/ui/field";

import {
  FileUploadDropzone,
  FileUploadList,
} from "@/components/ui/file-upload";
import { FormEvent } from "react";

export default function Home() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("form submitted");
  };

  return (
    <Center height="100vh">
      <Box height={"100vh"} width="120vh" p="1em">
        <Heading as="h1" size="4xl" pb="1em">
          Add new Podcast
        </Heading>

        <form onSubmit={(e) => handleSubmit(e)}>
          <Flex gap="10px" flexDir={"column"}>
            <Field label="Episode Title" required>
              <Input placeholder="The title of your new episode" />
            </Field>
            <Box>
              <FileUploadRoot
                maxW="100%"
                alignItems="stretch"
                maxFiles={1}
                required
              >
                <FileUploadDropzone
                  label="Drag and drop here to upload"
                  description=".mp3, .wav, .flac, .m4a"
                />
                <FileUploadList />
              </FileUploadRoot>
            </Box>
            <Spacer />
            <Flex flexDirection={"row"} gap={"10px"}>
              <Field label="Author">
                <Input />
              </Field>
              <Field label="Keywords">
                <Input placeholder="coding, developer, technology" />
              </Field>
            </Flex>
            <Flex flexDirection={"row"} gap={"10px"}>
              <Field label="Season Number" required>
                <Input type="number" />
              </Field>
              <Field label="Episode Number">
                <Input type="number" />
              </Field>
            </Flex>
            <Field label="Episode Show Notes / Description">
              <Textarea
                rows={3}
                placeholder="pisode description and show notes. A shortened version will be used as your episode summary."
              />
            </Field>
            <Button colorScheme="blue" size="lg" type="submit">
              Submit
            </Button>
          </Flex>
        </form>
      </Box>
    </Center>
  );
}
