import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

// interface Props {
//   onSelectGenre: (genre: Genre) => void;
//   selectedGenreId?: number;  
// }

const GenreList = (
  // { selectedGenreId, onSelectGenre }: Props
  ) => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId =  useGameQueryStore(s=>s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore(s=>s.setGenreId)
  //  setname for consistency
  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginTop={9} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                // onClick={() => onSelectGenre(genre.)}
                onClick={() => setSelectedGenreId(genre.id)} // changed here
              
                fontSize="md"
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;


//  remove props interface ,  and from parenthesis
// but we need here selectedGenreId & onSelectGenreId
