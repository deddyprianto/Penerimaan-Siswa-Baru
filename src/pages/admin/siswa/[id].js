import dynamic from "next/dynamic";
// this function can called at build TIME
import { getDocs, collection } from "firebase/firestore";
import db from "firebaseConf";
const EditSiswa = dynamic(() =>
  import("components/Dashboard/DashSiswa/EditSiswa")
);

const Post = ({ data }) => <EditSiswa data={data} />;
export default Post;

export async function getStaticPaths() {
  let data = getDocs(collection(db, "datasiswa"));
  const idData = await data;
  let dataArrID = [];
  const paths = idData.forEach((doc) => {
    dataArrID.push({ params: { id: doc.id } });
  });
  return {
    paths: dataArrID,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  let data = getDocs(collection(db, "datasiswa"));
  const dataID = await data;
  let dataIDSelecting;
  const { params } = context;
  dataID.forEach((doc) => {
    if (doc.id === params.id) {
      dataIDSelecting = { ...doc.data(), id: params.id };
    }
  });
  return {
    props: {
      data: dataIDSelecting,
    },
  };
}
