import * as React from "react";
import {
  VStack,
  Text,
  useColorModeValue,
  HStack,
  IconButton,
  Tooltip
} from "@chakra-ui/react";
import { PageSlideFade } from "./page-transitions";
import Header from "./header";
import { RiSignalTowerLine, RiWifiOffLine } from "react-icons/ri";
import OfflineData from "./offline-data";
import LiveData from "./live-data";
import useSound from "use-sound";
import lightswitch from "assets/audios/lightswitch.mp3";

const TURQUOISE = "#06b6d4";

const iconProps = {
  variant: "ghost",
  size: "md",
  isRound: true
};

const RepositoriesList = () => {
  const [activeTab, setActiveTab] = React.useState("offline");

  const [play] = useSound(lightswitch, {
    volume: 0.05,
    sprite: {
      on: [0, 300],
      off: [500, 300]
    }
  });

  const handleClick = (type) => {
    activeTab === "offline" ? play({ id: "on" }) : play({ id: "off" });
    setActiveTab(type)
  }

  return (
    <PageSlideFade>
      <VStack align="start" spacing={3}>
        <HStack justifyContent={"space-between"} width={"100%"}>
          <Header underlineColor={TURQUOISE} mt={0} mb={0}>
              Certificates & License
          </Header>
          <HStack>
         

              <Tooltip hasArrow label="Prince is Online" placement="top">
            <IconButton
              aria-label={"live"}
              size="md"
              colorScheme={"linkedin"}
              icon={<RiSignalTowerLine />}
              isActive={activeTab === "offline"}
              onClick={() => handleClick('offline')}
              {...iconProps}
            />
            </Tooltip>

              
              
          </HStack>
        </HStack>
        <Text
          color={useColorModeValue("gray.500", "gray.200")}
          textAlign="left"
        >
          
        </Text>
      </VStack>
        {activeTab === "offline" ? <OfflineData /> : <LiveData /> }
    </PageSlideFade>
  );
};

export default RepositoriesList;
