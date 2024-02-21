import {useState} from 'react';

interface DropdownState {
  isDropdownVisible: boolean;
  showDropdown: () => void;
  hideDropdown: () => void;
}

const useDropdown = (): DropdownState => {
  const [isDropdownVisible, setDropdownVisible] = useState<boolean>(false);

  const showDropdown = () => {
    setDropdownVisible(true);
  };

  const hideDropdown = () => {
    setDropdownVisible(false);
  };

  return {
    isDropdownVisible,
    showDropdown,
    hideDropdown,
  };
};

export default useDropdown;
