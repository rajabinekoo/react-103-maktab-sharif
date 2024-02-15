const ContactLayout: React.FC<
  Readonly<{
    children: React.ReactNode | React.JSX.Element;
  }>
> = ({ children }) => {
  return (
    <main>
      <p>ok</p>
      {children}
    </main>
  );
};

export default ContactLayout;
