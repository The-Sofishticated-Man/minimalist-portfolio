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
    <section
      id={id}
      className="mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16 relative"
    >
      <div className="flex items-center mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8">
        <div className="flex-shrink-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">
            {title}
          </h2>
        </div>
        <div className="flex-grow ml-3 sm:ml-4 lg:ml-5 xl:ml-6 h-px bg-gradient-to-r from-blue-400/50 via-purple-400/50 to-transparent"></div>
      </div>
      <div className="animate-fade-in">{children}</div>
    </section>
  );
}

export default InfoSection;
