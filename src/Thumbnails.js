// Destructuring de props
const Thumbnails = ({ category, imagesArray }) => {
   // console.log("props: ", props);
   // console.log("props.cat: ", props.cat);

   return (
      <div>
         {imagesArray.map((elem, index) => {
            // console.log("elem: ", elem);
            return <img key={index} src={elem} alt={category} />;
         })}
         <div className="fadeout"></div>
      </div>
   );
};

export default Thumbnails;
