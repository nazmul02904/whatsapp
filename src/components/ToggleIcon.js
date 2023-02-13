import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, useColorMode } from "@chakra-ui/react";

const ToggleBtn = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Button onClick={toggleColorMode} pos="fixed" top={0} right={0} m="1rem">
        {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
      </Button>
    </header>
  );
};

export default ToggleBtn;
