export default function SectionHeader({
  badge,
  title,
  subtitle,
  center = true,
}: {
  badge?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''} mb-12`}>
      {badge && (
        <span className="badge bg-primary-50 text-primary-700 mb-4">
          {badge}
        </span>
      )}
      <h2 className="section-title text-balance">{title}</h2>
      {subtitle && <p className="section-subtitle text-balance">{subtitle}</p>}
    </div>
  );
}
