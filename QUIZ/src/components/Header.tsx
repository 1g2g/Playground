import Store from "../utils/store";
const Header = () => {
  return (
    <Store.Consumer>
      {(store) =>
        store.nickname ? (
          <header>Welcome {store.nickname}</header>
        ) : (
          <header>Enter your nickname!</header>
        )
      }
    </Store.Consumer>
  );
};

export default Header;
