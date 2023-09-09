export const Featured = ({ image, title }) => {
  console.log(image);
  return (
    <div className="featured position-relative overflow-hidden h-100">
      <div
        className="lil-overlay position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0,0,0,.3)" }}
      ></div>
      <img src={image} alt="" className="w-100 h-100 featured-img" />
      <p className="main-title">{title}</p>
    </div>
  );
};
