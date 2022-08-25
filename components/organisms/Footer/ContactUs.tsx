import Link from 'next/link';

interface CompanyProps{
    Title : string;
    href? : string;
}

export default function ContactUs(props: Partial<CompanyProps>) {
  const { Title, href = '' } = props;
  return (
    <li className="mb-6">
        <Link href={href}>
            <a className="text-lg color-palette-1 text-decoration-none">{Title}</a>
        </Link>
    </li>
  );
}
