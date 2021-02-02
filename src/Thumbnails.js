// import movies from "./movies.json";

// import noImg from "./assets/images/image-not-found.jpg";

const Thumbnails = (props) => {
   // console.log("props: ", props);
   // console.log("props.cat: ", props.cat);

   return (
      <div>
         {props.imagesArray.map((elem, index) => {
            // console.log("elem: ", elem);
            return <img key={index} src={elem} alt={props.category} />;
         })}
      </div>
   );
};

export default Thumbnails;
