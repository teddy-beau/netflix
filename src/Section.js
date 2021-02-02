import Category from "./Category";
import Thumbnails from "./Thumbnails";

import movies from "./movies.json";

const Section = () => {
   return (
      <>
         {movies.map((elem, index) => {
            // console.log(elem);
            return (
               <section key={index}>
                  <Category name={elem.category} />
                  <Thumbnails
                     category={elem.category}
                     imagesArray={elem.images}
                  />
               </section>
            );
         })}
      </>
   );
};

export default Section;
