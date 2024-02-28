import {AppRoute} from 'constants/AppRoute';
import {useNavigate} from 'react-router';

interface NavigateOnSearchHookReturn {
  onSearch: (value: string) => void;
}

const useNavigateOnSearch = (): NavigateOnSearchHookReturn => {
  const navigate = useNavigate();

  const onSearch: (value: string) => void = (value) => {
    const navigateString = `${AppRoute.ICONS}?searchQuery=${value}`;

    navigate(navigateString);
  };

  return {onSearch};
};

export default useNavigateOnSearch;
