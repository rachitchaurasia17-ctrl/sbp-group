import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
  className?: string;
}

/**
 * Routes to the home page and asks it to scroll to #contact.
 * Works reliably under HashRouter (no nested-hash issues).
 */
export default function ContactLink({ children, className }: Props) {
  return (
    <Link to="/" state={{ scrollTo: 'contact' }} className={className}>
      {children}
    </Link>
  );
}
