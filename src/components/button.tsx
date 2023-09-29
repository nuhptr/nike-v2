import clsx from 'clsx'

interface IButtonProps {
  label: string
  iconUrl?: string
  backgroundColor?: string
  textColor?: string
  borderColor?: string
  fullWidth?: boolean
}

export default function Button({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}: IButtonProps) {
  return (
    <button
      className={clsx(
        'flex items-center justify-center gap-2 px-7 py-4 text-lg leading-none border rounded-full font-montserrat hover:bg-orange-600',
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : `bg-coral-red text-white border-coral-red`,
        fullWidth && 'w-full'
      )}>
      {label}
      {iconUrl && (
        <img src={iconUrl} alt='Arrow Right Icon' className='w-5 h-5 ml-2 rounded-full' />
      )}
    </button>
  )
}
