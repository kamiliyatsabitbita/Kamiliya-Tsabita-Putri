import Lottie from "lottie-react";
import loadingAnimation from "../assets/loading.json";

export default function LoadingScreen() {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "#0f172a",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999
    }}>
      <div style={{ width: 200 }}>
        <Lottie animationData={loadingAnimation} loop />
      </div>
    </div>
  );
}