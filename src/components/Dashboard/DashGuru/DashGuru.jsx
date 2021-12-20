import React from "react";
import LabelTitle from "components/TemplateAdmin/LabelTitle";
import Card from "components/TemplateAdmin/Card";
import TableGuru from "components/TemplateAdmin/TableGuru";

const DashGuru = () => {
  return (
    <React.Fragment>
      <LabelTitle judul="Guru" />
      <Card />
      <TableGuru />
    </React.Fragment>
  );
};

export default DashGuru;
