import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../store";

// interface Props {
//   onSelectPlatform: (platform: Platform) => void;
//   selectedPlatformId?: number;
// }

const PlatformSelector = ( ) => {
  const { data, error } = usePlatforms();
  
  const selectedPlatformId = useGameQueryStore(s=>s.gameQuery.platformId)
  const selectedPlatform = usePlatform(selectedPlatformId); // added here

  const setSelectPlatformID = useGameQueryStore(s=>s.setPlatformId)

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            // onClick={() => onSelectPlatform(platform)}
            onClick={() => setSelectPlatformID(platform.id)}  // remember to pass id not platform object
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;



// pay attention to naming