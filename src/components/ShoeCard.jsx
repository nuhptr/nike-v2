export default function ShoeCard({ shoes, changeBigShoeImg, bigShoeImg }) {
   const handleClick = () => {
      if (bigShoeImg !== shoes.bigShoe) {
         changeBigShoeImg(shoes.bigShoe);
      }
   };

   return (
      <div
         className={`border-2 rounded-xl ${
            bigShoeImg === shoes.bigShoe
               ? 'border-coral-red'
               : 'border-transparent'
         } cursor-pointer max-sm:flex-1`}
         onClick={handleClick}>
         <div className='flex items-center justify-center bg-center bg-cover bg-card sm:h-40 rounded-xl max-sm:p-4'>
            <img
               src={shoes.thumbnail}
               alt='Image thumbnail'
               width={150}
               height={103}
               className='object-contain'
            />
         </div>
      </div>
   );
}
