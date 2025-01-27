import { MutatingDots, InfinitySpin } from "react-loader-spinner";
import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <MutatingDots
      height="100"
      width="100"
      color="red"
      secondaryColor="#4fa94d"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{}}
      wrapperClass={styles.loader}
    />
  );
}
