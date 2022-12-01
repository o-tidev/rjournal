import { NextPage } from "next";
import React from "react";
import { MainLayout } from "../layouts/MainLayout";
import { WriteForm } from "../components/WriteForm";

interface WritePageProps {}

export const WritePage: NextPage = (props: WritePageProps) => {
  return (
    <MainLayout className="main-layout-white" hideComments hideMenu>
      <WriteForm />
    </MainLayout>
  );
};

export default WritePage;
