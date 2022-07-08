import Image from "next/image";

import { useUser } from "@services/user/provider";

import { Box, Typography, useMediaQuery } from "@mui/material";
import { Chip } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import * as S from "./styles";
import defaultImage from "@public/assets/github.png";

export function UserCard() {
  const { user } = useUser();
  const isMobile = useMediaQuery("(max-width: 540px)");

  const date =
    user &&
    new Date(user.created_at).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    });

  return (
    <S.CardContainer>
      <Box>
        <Image
          src={user ? user?.avatar_url : defaultImage}
          alt="avatar"
          width="90px"
          height="90px"
        />
      </Box>
      <Box mx="16px">
        <Box>
          <Typography
            mb="8px"
            fontWeight="700"
            fontSize="12px"
            lineHeight="14.06px"
          >
            {user?.name}
          </Typography>
          <Typography fontWeight="400" fontSize="18px" lineHeight="21.09px">
            {user?.bio}
          </Typography>
        </Box>

        {user?.company && (
          <Chip
            label={user?.company}
            variant="outlined"
            style={{
              border: "1px solid #334680",
              borderRadius: "4px",
              fontWeight: "600",
              fontSize: "12px",
              marginTop: "16px"
            }}
          />
        )}

        {isMobile && (
          <Box mx={{ display: "flex" }} ml="auto" mt="auto">
            <Typography
              color="#B9BDCF"
              fontWeight="500"
              fontSize="12px"
              mr="28px"
              mt="12px"
              style={{
                display: "flex",
                alignItems: "center",
                whiteSpace: "nowrap"
              }}
            >
              <PublicIcon fontSize="inherit" style={{ marginRight: "4px" }} />
              {user?.location}
            </Typography>
            <Typography
              color="#B9BDCF"
              fontWeight="500"
              fontSize="12px"
              mt="12px"
              style={{
                display: "flex",
                alignItems: "center",
                whiteSpace: "nowrap"
              }}
            >
              <AccessTimeIcon
                fontSize="inherit"
                style={{ marginRight: "4px" }}
              />
              {date}
            </Typography>
          </Box>
        )}
      </Box>

      {!isMobile && (
        <Box mx={{ display: "flex" }} ml="auto" mt="auto">
          <Typography
            color="#B9BDCF"
            fontWeight="500"
            fontSize="12px"
            mr="28px"
            mt="12px"
            style={{
              display: "flex",
              alignItems: "center"
            }}
          >
            <PublicIcon fontSize="inherit" style={{ marginRight: "4px" }} />
            {user?.location}
          </Typography>
          <Typography
            color="#B9BDCF"
            fontWeight="500"
            fontSize="12px"
            mt="12px"
            style={{
              display: "flex",
              alignItems: "center"
            }}
          >
            <AccessTimeIcon fontSize="inherit" style={{ marginRight: "4px" }} />
            {date}
          </Typography>
        </Box>
      )}
    </S.CardContainer>
  );
}
