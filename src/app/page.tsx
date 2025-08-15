"use client";
import "@mantine/core/styles.css";
import { AppShell, Group, Text } from "@mantine/core";
import Header from "./_components/header";

export default function BasicAppShell() {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Group h="100%" w="100%" mb={"sm"}>
          <Header currentPage="Home" />
        </Group>
      </AppShell.Header>
      <AppShell.Main>
        <Text>This is the main section, your app content here.</Text>
        <Text> Layout used in most cases - Navbar and Header with fixed position                                                                      </Text>
      </AppShell.Main>
    </AppShell>
  );
}
