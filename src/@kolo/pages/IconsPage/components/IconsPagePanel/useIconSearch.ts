import {useSearchParams} from 'react-router-dom';

interface useIconSearchReturn {
  currentSearchQuery: string | null;
  handleIconSearch: (value: string) => void;
}

const useIconSearch = (): useIconSearchReturn => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentSearchQuery = searchParams.get('searchQuery');
  const handleIconSearch = (value: string) => {
    setSearchParams({searchQuery: value});
  };

  return {currentSearchQuery, handleIconSearch};
};

export default useIconSearch;
