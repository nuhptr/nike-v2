export default function Buttton({ label, iconUrl }) {
   return (
      <button className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red hover:bg-orange-600'>
         {label}
         <img src={iconUrl} alt='Arrow Right Icon' className='ml-2 rounded-full w-5 h-5' />
         {/* img */}
      </button>
   );
}
