import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onSelectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genreId: genre.id })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector
                selectedPlatformId={gameQuery.platformId}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platformId: platform.id })
                }
              />
            </Box>
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;

//  1. Exercise- Picking the Right State Management Solution

//  let's see we can improve the way we manage the client state

//  so in app.tsx , take a few mintutes and see what improvement we can make in
// our current approach of state management

//  what are potencial solution that we can work out better

// observation
// we are using useState hook to maintain the local state , that is our gameQuery object
// and we are sharying this state and other properties via props
// example - Navbar we have onSearch which set to callback function to setGameQuery on searchtext
        // - now go in navbar  
        //  so here we have pass down propr to another compnoet call searchInput
        // so this is example of prop-drilling


// another is in Genrelist  we have selectedGenreId to gameQuery.genreId
    // so we have little bit of prop drilling


//  another issue is logic for using gameQuery is spread all across the place
    // for one place to update genreId & on next to update platformId 
    // , and on down for sortOrder and so on 
  //  so it's hard to see at glance , how we update the game query object and potencially
  //  apply any business rule in single place
  
//  to solve the gamequery problem we can use reducer to centralize the state-mangement logic 
//  and then we can use react-context to share our gameQury for any comonent in our tree
//  context is not right solution here , because our game-query can change in differnt ways 
// as a result any time any value changes in this object  , all component which using our 
// context will rerender 
//  let's see
//  if user share genreId using context , and any component which using context will redenger on changing on genreId,
// so in short if user select the genre , the navbar rerender & platform rerenders, and sortOrder also
//  so unnecessory rerenders  , same goes for selecting platforms & sort order

//  this is where we use state-management libraries like Zustand