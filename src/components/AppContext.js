export const AppProvider = ({ children }) => {
  const [account, setAccount] = useState([]); // Set account as an empty array initially

  const setAccountAfterDisconnectWallet = () => {
    setAccount([]); // Set account back to an empty array when disconnecting wallet
  };
  const [points, setPoints] = useState(0);

  return (
    <AppContext.Provider
      value={{
        account,
        setAccount,
        setAccountAfterDisconnectWallet,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
