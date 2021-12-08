import dynamic from "next/dynamic";
const Pendaftaran = dynamic(() =>
  import("../../components/Pendaftaran/Pendaftaran")
);

const index = () => {
  return (
    <div>
      <Pendaftaran />
    </div>
  );
};

export default index;
