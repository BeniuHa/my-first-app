export default function Link({ href, title }) {
  return (
    <a href={href} target="_blank">
      <h3 className="text-5xl font-bold text-blue-900">{title}</h3>
    </a>
  );
}
