import React from "react";
import { PageMain, PageArticle } from "./styles";

export const PageContainer = ({ children }) => (
  <PageMain>
    <PageArticle>{children}</PageArticle>
  </PageMain>
);
