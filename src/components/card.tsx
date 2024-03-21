export const Card = (props: { title: string; img: string; price: number }) => {
  return (
    <div style={{ border: "1px solid #000", width: "300px",textAlign:'center' }}>
      <div
        style={{
          width: "300px",
          height: "200px",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{ objectFit: "contain", width: "300px", height: "200px" }}
          src={props.img}
          alt="img"
        />
      </div>
      <h2>{props.title}</h2>
      <h2>{props.price} $</h2>
    </div>
  );
};
