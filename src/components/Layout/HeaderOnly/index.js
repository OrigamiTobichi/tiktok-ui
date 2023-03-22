import Header from '~/components/Layout/components/Header';

function HeaderOnly({ children }) {
  return (
    <div className="container">
      <Header />
      <div>{children}</div>
    </div>
  );
}
export default HeaderOnly;
