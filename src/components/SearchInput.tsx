import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

// interface Props {
//   onSearch: (searchText: string) => void;
// }

const SearchInput = (
  // { onSearch }: Props
  ) => {
  const ref = useRef<HTMLInputElement>(null);
  // const {setSearchText}= useGameQueryStore()  ;  /// not the best ways
   const setSearchText = useGameQueryStore(s=>s.setSearchText)
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if (ref.current) 
      // onSearch(ref.current.value);
     setSearchText(ref.current.value);
    }}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input ref={ref} borderRadius={20} placeholder="Search games..." variant="filled" />
      </InputGroup>
    </form>
  );
};

export default SearchInput;

//  remove occrance of prop and interface for props 

// const {setSearchText}= useGameQueryStore() 
  // with this aproach any value in store changes will result in rerender of this comopent


  // use selector , so if only searchText changes then only this reredners