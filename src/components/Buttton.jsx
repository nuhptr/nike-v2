export default function Buttton({
   label,
   iconUrl,
   backgroundColor,
   textColor,
   borderColor,
   fullWidth,
}) {
   return (
      <button
         className={`flex items-center justify-center gap-2 px-7 py-4 text-lg leading-none border rounded-full font-montserrat hover:bg-orange-600 ${
            backgroundColor
               ? `${backgroundColor} ${textColor} ${borderColor}`
               : `bg-coral-red text-white border-coral-red`
         } ${fullWidth && 'w-full'}`}>
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
