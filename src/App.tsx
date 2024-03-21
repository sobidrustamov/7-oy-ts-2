import { Card } from "./components/card";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Card
        img="https://hips.hearstapps.com/hmg-prod/images/21802-2025-k5-65c51c31b9323.jpg?crop=0.615xw:0.692xh;0.245xw,0.111xh&resize=768:*"
        title="Kia K5"
        price={31000}
      />
      <Card
        img="https://cdn.motor1.com/images/mgl/P3GrpG/s3/2021-kia-k5-gt-line-exterior-front-view.webp"
        title="Kia K5"
        price={31000}
      />
    </div>
  );
}

export default App;
