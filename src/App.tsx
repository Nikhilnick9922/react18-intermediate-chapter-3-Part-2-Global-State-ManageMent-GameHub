import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

//  

function App() {
  // const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          // onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            // selectedGenreId={gameQuery.genreId}
            // onSelectGenre={(genre) =>
            //   setGameQuery({ ...gameQuery, genreId: genre.id })
            // }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading 
          // gameQuery={gameQuery}
           />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector
                // selectedPlatformId={gameQuery.platformId}
                // onSelectPlatform={(platform) =>
                //   setGameQuery({ ...gameQuery, platformId: platform.id })
                // }
              />
            </Box>
            <SortSelector
              // sortOrder={gameQuery.sortOrder}
              // onSelectSortOrder={(sortOrder) =>
              //   setGameQuery({ ...gameQuery, sortOrder })
              // }
            />
          </Flex>
        </Box>
        {/* <GameGrid gameQuery={gameQuery} /> */}
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;

//   Exercise- Removing Props

//  now that we have setup our store , we need to modify each component
//  and have it  to get gameQuery object directly from the store , instead 
// of passing through the props

// GAMEQUERY HAS CURRENT STATE IN THAT THERE IS ALL SELECTED PROPERTIES

//  now start with app comonent , we don't need state , 
// since we are going to manage state using zustand

//  now look for anywhere we passing gameQuery via props , like navbar ,genrelist and so on
//  so refactor each of those component and have them get state directly from the store

// 1st NavBar 
//  remove state from navbar in app.tsx
// go to the navbar

// 2nd now do same for genreList


//  3rd is gameHeading component
// 

// 4th is platformSelector component

// 5th is solrtSelector component


//  last componet is gameGrid

//  all done , now open reactquery dev tools