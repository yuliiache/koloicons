interface UseAuthReturn {
  isAuthenticated: boolean;
}

const useAuth = (email: string, name: string): UseAuthReturn => {
  const isAuthenticated = Boolean(email) && Boolean(name);

  return {
    isAuthenticated,
  };
};

export default useAuth;
