import styles from "src/styles/header.module.css";
import { Anchor, AspectRatio, Group, Image, Text } from "@mantine/core";
type pageOptions = "Home" | "Experience" | "Reasearch" | "Projects" | "Groups";

interface HeaderTypes {
  currentPage: pageOptions;
}

export default function Header({ currentPage }: HeaderTypes) {
  return (
    <Group justify="space-between" w={"100vw"} className={styles.header}>
      <Group gap={"sm"} ml={"sm"}>
        <AspectRatio>
          <Image
            src="images/bad_logo.png"
            alt="Logo for the personal website"
            radius="md"
            h={60}
            fit="fill"
          />
        </AspectRatio>
        <Text fw={700} size="xl">
          Jackson Baimel
        </Text>
      </Group>
      <Group gap={"sm"} mr={"sm"}>
        <Anchor href={"/"} style={{ color: "black" }}>
          <Text fw={500} style={{ color: "black" }} size="lg">
            Home
          </Text>
        </Anchor>
        <Anchor href={"/experience"} style={{ color: "black" }}>
          <Text fw={500} size="lg">
            Experience
          </Text>
        </Anchor>
        <Anchor href={"/research"} style={{ color: "black" }}>
          <Text fw={500} size="lg">
            Research
          </Text>
        </Anchor>
        <Anchor href={"/projects"} style={{ color: "black" }}>
          <Text fw={500} size="lg">
            Projects
          </Text>
        </Anchor>
        <Anchor href={"/groups"} style={{ color: "black" }}>
          <Text fw={500} size="lg">
            Groups
          </Text>
        </Anchor>
        <Anchor href={"/dark-mode-not-a-page"} style={{ color: "black" }}>
          <Text fw={500} size="lg">
            Dark Mode
          </Text>
        </Anchor>
        <Anchor href={"/terminal-view"} style={{ color: "black" }}>
          <Text fw={500} size="lg">
            View In Terminal
          </Text>
        </Anchor>
        <Anchor href={"/settings"} style={{ color: "black" }}>
          <Text fw={500} size="lg">
            Settings
          </Text>
        </Anchor>
      </Group>
    </Group>
  );
}
