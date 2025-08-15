import styles from "src/styles/header.module.css";
import { Anchor, AspectRatio, Group, Image, Text } from "@mantine/core";
type pageOptions = "Home" | "Experience" | "Reasearch" | "Projects" | "Groups";

interface HeaderTypes {
  currentPage: pageOptions;
}

export default function Header({ currentPage }: HeaderTypes) {
  return (
    <Group
      justify="space-between"
      w={"100vw"}
      className={styles.header}
    >
      <Group gap={"sm"} ml={"sm"}>
        <AspectRatio>
          <Image
            src="images/bad_logo.png"
            alt="Logo for the personal website"
            radius="md"
            h={55}
            fit="fill"
          />
        </AspectRatio>
        <Text>Jackson Baimel</Text>
      </Group>
      <Group gap={"sm"} mr={"sm"}>
        <Anchor
          href={"www.google.com"}
          style={{ color: currentPage === "Projects" ? "black" : "green" }}
        >
          Home
        </Anchor>
        <Anchor href={"www.google.com"}>Experience</Anchor>
        <Anchor href={"www.google.com"} style={{ color: "black" }}>
          Reasearch
        </Anchor>
        <Anchor href={"www.google.com"} style={{ color: "black" }}>
          Projects
        </Anchor>
        <Anchor href={"www.google.com"} style={{ color: "black" }}>
          Groups
        </Anchor>
        <Anchor href={"www.google.com"} style={{ color: "black" }}>
          Dark Mode
        </Anchor>
        <Anchor href={"www.google.com"} style={{ color: "black" }}>
          View In Terminal
        </Anchor>
        <Anchor href={"www.google.com"} style={{ color: "black" }}>
          Settings
        </Anchor>
      </Group>
    </Group>
  );
}
