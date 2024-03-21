import {useState} from 'react';
import {useSearchParams} from 'react-router-dom';

interface useCategoryReturn {
  activeCategoryId: string | null;
  handleCategoryClick: (value: string) => void;
}

const useCategory = (): useCategoryReturn => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);

  const handleCategoryClick = (id: string) => {
    setSearchParams({category: id});
    setActiveCategoryId(id);
  };

  return {activeCategoryId, handleCategoryClick};
};

export default useCategory;
