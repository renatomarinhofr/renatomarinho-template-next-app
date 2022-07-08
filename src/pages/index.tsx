import { useUser } from "@services/user/provider";

import { CircularProgress, Typography, useMediaQuery } from "@mui/material";
import { HeaderSearch } from "@components/header";
import { UserCard } from "@components/user-card";

import * as S from "@styles/index";
import { Box } from "@mui/material";

export default function Home() {
  const isTablet = useMediaQuery("(max-width: 768px)");
  const { user, loading, notFoundUser } = useUser();

  return (
    <S.ContainerLayout isTablet={isTablet}>
      <div>
        <Typography
          fontWeight="700"
          fontSize="24px"
          lineHeight="36px"
          style={{ userSelect: "none" }}
        >
          Github
          <span style={{ fontWeight: "300" }}> Users</span>
        </Typography>
      </div>
      <HeaderSearch />
      {loading && (
        <Box sx={{ display: "flex" }} width="100%" justifyContent="center">
          <CircularProgress />
        </Box>
      )}
      {user && !loading && (
        <Box sx={{ display: "flex" }} width="100%" justifyContent="center">
          <UserCard />
        </Box>
      )}
      {notFoundUser && (
        <Box sx={{ display: "flex" }} width="100%" justifyContent="center">
          <Typography
            fontWeight="700"
            fontSize="24px"
            lineHeight="36px"
            style={{ userSelect: "none" }}
          >
            User not found
          </Typography>
        </Box>
      )}
    </S.ContainerLayout>
  );
}
