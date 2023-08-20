export default function Buttton({
   label,
   iconUrl,
   backgroundColor,
   textColor,
   borderColor,
   fullWidth,
}) {
   return (
      <button className='flex items-center justify-center gap-2 py-4 text-lg leading-none text-white border rounded-full px-7 font-montserrat bg-coral-red border-coral-red hover:bg-orange-600'>
         {label}
         {iconUrl && (
            <img
               src={iconUrl}
               alt='Arrow Right Icon'
               className='w-5 h-5 ml-2 rounded-full'
            />
         )}
      </button>
   );
}
