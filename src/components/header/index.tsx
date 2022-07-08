import { useState } from "react";

import { Box, InputAdornment, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

import { useUser } from "@services/user/provider";
import { searchUser } from "@services/user/search";

import * as S from "./styles";
import background from "../../../public/assets/image.png";

export function HeaderSearch() {
  const [inputSearchUser, setInputSearchUser] = useState("");
  const [searchError, setSearchError] = useState(false);

  const { fetch } = useUser();

  async function handleSearchUser() {
    if (inputSearchUser.length >= 3) {
      setSearchError(false);
      await fetch(inputSearchUser);
    } else {
      setSearchError(true);
    }
  }

  return (
    <>
      <S.ContainerHeader image={background}>
        <Box width="80%">
          <S.InputSearch
            error={searchError}
            placeholder="Search user in Github"
            onChange={(e) => setInputSearchUser(e.target.value)}
            startAdornment={
              <InputAdornment position="start">
                <PersonIcon id="user-icon" />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <S.Button
                  aria-label="toggle to search user"
                  onClick={handleSearchUser}
                >
                  <Typography
                    fontWeight="500"
                    fontSize="16px"
                    lineHeight="18.75px"
                    color="#fff"
                  >
                    Search
                  </Typography>
                </S.Button>
              </InputAdornment>
            }
            style={{ background: "#fff" }}
          />
        </Box>
      </S.ContainerHeader>
      {searchError && (
        <Typography
          color="#f10000"
          fontSize="14px"
          style={{ marginTop: "-2rem" }}
        >
          Username must contain at least 3 characters
        </Typography>
      )}
    </>
  );
}
