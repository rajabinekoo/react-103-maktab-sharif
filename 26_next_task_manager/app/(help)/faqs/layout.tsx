const FaqsLayout: React.FC<
  Readonly<{
    children: React.ReactNode | React.JSX.Element;
  }>
> = ({ children }) => {
  return (
    <main>
      <p>ok2</p>
      {children}
    </main>
  );
};

export default FaqsLayout;
