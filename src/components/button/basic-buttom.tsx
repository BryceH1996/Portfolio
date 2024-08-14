import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'
 
interface buttonProps{
  text: string;
  url: string;
  isOpenNewPage?: boolean;
  className?: string;
}

export default function BasicButton({text, url, isOpenNewPage=false, className}: buttonProps) {

  return (
    <Link className={`text-xs ${className}`} href={url} target={isOpenNewPage ? "_blank" : ""}>
      {text} <FontAwesomeIcon icon={faChevronRight} className='ml-1 text-xs' />
    </Link>
  )
}