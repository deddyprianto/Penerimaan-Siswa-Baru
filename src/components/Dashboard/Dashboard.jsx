import React from "react";
import { useDispatch } from "react-redux";
import LabelTitle from "components/TemplateAdmin/LabelTitle";
import Card from "components/TemplateAdmin/Card";
import TableGuru from "components/TemplateAdmin/TableGuru";

const Dashboard = () => {
  return (
    <React.Fragment>
      <LabelTitle judul="Home" />
      <Card />
      <TableGuru />
    </React.Fragment>
  );
};

export default Dashboard;
