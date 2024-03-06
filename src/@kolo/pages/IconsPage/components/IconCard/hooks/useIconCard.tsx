import {useState} from 'react';

interface UseIconCardReturn {
  isAdded: boolean;
  handleClick: () => void;
}

const useIconCard = (): UseIconCardReturn => {
  const [isAdded, setIsAdded] = useState(false);
  const handleClick = () => {
    setIsAdded(!isAdded);
  };

  return {isAdded, handleClick};
};

export default useIconCard;
