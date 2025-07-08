function InfoSection({ title, id,children }: { title: string; id: string,children:React.ReactNode }) {
  return (
    <section id={id} className="mb-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-100">{title}</h2>
      {children}
    </section>
  );
}

export default InfoSection;
