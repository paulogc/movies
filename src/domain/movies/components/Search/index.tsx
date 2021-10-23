import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { Button } from "../../../../ui/Button";
import { SearchWrapper, StyledInput } from "./styles";

export const Search = () => {
  const { query, push } = useRouter();
  const [search, setSearch] = useState(query.search || "");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleClick = () => {
    if (search) {
      push(`/?search=${search}&page=1`);
    }
    push("/");
  };

  return (
    <SearchWrapper>
      <StyledInput onChange={handleChange} placeholder="Title" value={search} />
      <Button onClick={handleClick} label="Search" />
    </SearchWrapper>
  );
};
