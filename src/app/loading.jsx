'use client';
import ClipLoader from "react-spinners/ClipLoader";
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
export default function Loading({ loading }) {
  return (
    <><ClipLoader
      color='#3B82F6'
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
 
    /></>
  )
}