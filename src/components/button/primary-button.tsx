import Link from 'next/link'
 
interface buttonProps{
  text: string;
  url: string;
  isOpenNewPage?: boolean;
  className?: string;
}

export default function PrimaryButton({text, url, isOpenNewPage=false, className}: buttonProps) {

  return (
    <Link className={`text-white text-xs bg-secondary py-3 px-3.5 rounded-md ${className}`} href={url} target={isOpenNewPage ? "_blank" : ""}>
      {text}
    </Link>
  )
}