function InfoSection({
  title,
  id,
  children,
}: {
  title: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-16 relative">
      <div className="flex items-center mb-8">
        <div className="flex-shrink-0">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">
            {title}
          </h2>
        </div>
        <div className="flex-grow ml-6 h-px bg-gradient-to-r from-blue-400/50 via-purple-400/50 to-transparent"></div>
      </div>
      <div className="animate-fade-in">{children}</div>
    </section>
  );
}

export default InfoSection;
